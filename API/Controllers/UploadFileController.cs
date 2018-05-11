
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using model;

namespace dotnetcoreupload.Controllers
{
    [Route("api/[controller]")]
    public class UploadFileController : Controller
    {

        [HttpPost]
        [Route("/api/upload")]
        public UploadPdf Upload([FromForm] UploadVM vm)
        {            
            var uploadService = new UploadPdf();
            if (vm.pdf == null) throw new Exception("File is null");
            if (vm.pdf.Length == 0) throw new Exception("File is empty");

            using (Stream stream = vm.pdf.OpenReadStream())
            {
                using (var binaryReader = new BinaryReader(stream))
                {
                    var fileContent = binaryReader.ReadBytes((int)vm.pdf.Length);
                    uploadService.AddFile(fileContent, vm.pdf.FileName, vm.pdf.ContentType);
                }
            }
            return uploadService;
        }
    }
}