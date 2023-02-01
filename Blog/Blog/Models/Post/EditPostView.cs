using Microsoft.Build.Framework;

namespace Blog.Models.Post
{
    public class EditPostView
    {
        public string Id { get; set; }

        [Required]
        public string Title { get; set; }

        [Required]
        public string Content { get; set; }
    }
}
