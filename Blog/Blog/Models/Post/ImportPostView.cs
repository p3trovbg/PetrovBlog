using Microsoft.Build.Framework;
using System.ComponentModel.DataAnnotations.Schema;

namespace Blog.Models.Post
{
    public class ImportPostView
    {
        [Required]
        public string Title { get; set; }

        [Required]
        public string Content { get; set; }

        [Required]
        public IFormFile? MainImage { get; set; }

        [NotMapped]
        public List<IFormFile>? Images { get; set; }

        [NotMapped]
        public List<IFormFile>? Videos { get; set; }
    }
}
