using Microsoft.AspNetCore.Identity;
using Microsoft.Build.Framework;

namespace Blog.Data.Models
{
    public class ApplicationUser : IdentityUser
    {
        public string Name { get; set; } = string.Empty;

        public string? MainImageUrl { get; set; }

        public ICollection<Post>? Posts { get; set; }
    }
}
