
using System;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;

namespace model{
    public class UploadPdf{
        public string nome { get; set; }
        public string contentType { get ; set;}
        public string fileName { get ; set;}
        public byte[] fileContent { get ; set;}

        public void AddFile(byte[] _fileContent, string _fileName, string _contentType)
        {
            this.fileContent = _fileContent;
            this.fileName = _fileName;
            this.contentType = _contentType;
        }
    }
}