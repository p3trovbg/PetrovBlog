using Microsoft.Build.Framework;

namespace Blog.Models.Post
{
    public class ImportPostView
    {
        [Required]
        public string Title { get; set; }

        [Required]
        public string Content { get; set; }

        public IFormFile? MainImage { get; set; }

        public string AuthorId { get; set; }

        public List<IFormFile>? Images { get; set; }

        public List<IFormFile>? Videos { get; set; }
    }
}
