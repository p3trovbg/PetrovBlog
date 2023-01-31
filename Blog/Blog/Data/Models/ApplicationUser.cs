using Microsoft.AspNetCore.Identity;
using Microsoft.Build.Framework;

namespace Blog.Data.Models
{
    public class ApplicationUser : IdentityUser
    {
        public string Name { get; set; } = string.Empty;
    }
}
