
using Microsoft.AspNetCore.Http;

namespace model{
    public class UploadVM{
        public string nome { get; set; }
        public string file { get ; set;}
        public IFormFile pdf { get ; set;}

    }
}