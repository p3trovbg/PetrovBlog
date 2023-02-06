using Blog.Models.Identity;

namespace Blog.Models.Post
{
    public class BasePostViewModel
    {
        public string Id { get; set; } = default!;

        public string Title { get; set; } = default!;

        public string? MainImageUrl { get; set; }

        public BaseUserViewModel Author { get; set; } = default!;

        public DateTime CreatedOn { get; set; }

        public DateTime? UpdatedOn { get; set; }
    }
}
