using Blog.Models.PostContent;
using Microsoft.Build.Framework;

namespace Blog.Models.Post
{
    public class EditPostView
    {
        [Required]
        public string Id { get; set; } = default!;

        [Required]
        public string Title { get; set; } = default!;

        [Required]
        public string Content { get; set; } = default!;

        [Required]
        public string MainImage { get; set; } = default!;

        public List<ContentViewModel> Images { get; set; }
    }
}
