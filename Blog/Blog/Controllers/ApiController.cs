using Microsoft.AspNetCore.Mvc;

namespace Blog.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public abstract class ApiController : ControllerBase
    {
        protected string GetUserId()
        {
            return this.User.Claims.First(i => i.Type == "id").Value;
        }
    }
}
