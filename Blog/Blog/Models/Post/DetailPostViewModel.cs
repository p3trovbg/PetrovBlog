using Blog.Models.PostContent;

namespace Blog.Models.Post
{
    public class DetailPostViewModel : BasePostViewModel
    {
        public string Content { get; set; } = default!;

        public IEnumerable<ContentViewModel>? Images { get; set; }

        public IEnumerable<ContentViewModel>? Videos { get; set; }
    }
}
