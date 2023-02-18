using Microsoft.AspNetCore.Mvc;

namespace Blog.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public abstract class ApiController : ControllerBase
    {
        protected string GetUserId()
        {
            return this.User.Claims.FirstOrDefault(i => i.Type == "id")?.Value!;
        }
    }
}
