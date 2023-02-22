using Blog.Data.Models;
using Blog.Models.Post;
using Blog.Services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json.Linq;
using System.Net;
using System.Security.Claims;

namespace Blog.Controllers
{
    [Authorize]
    public class PostController : ApiController
    {
        private readonly IPostService postService;
        private readonly UserManager<ApplicationUser> userManager;

        public PostController(
            IPostService postService,
            UserManager<ApplicationUser> userManager)
        {
            this.postService = postService;
            this.userManager = userManager;
        }

        [HttpGet]
        [AllowAnonymous]
        [Route(nameof(All))]
        public async Task<IActionResult> All()
        {
            var all = await this.postService.All<BasePostViewModel>();
            return this.Ok(all);
        }

        [HttpGet("{id}")]
        [AllowAnonymous]
        public async Task<IActionResult> Get(string id)
        {
            try
            {
                var targetPost = await this.postService.GetById<DetailPostViewModel>(id);
                return this.Ok(targetPost);
            }
            catch(Exception ex)
            {
                return this.NotFound(ex.Message);
            }
        }

        [HttpPost]
        [Route(nameof(Add))]
        public async Task<IActionResult> Add([FromForm] ImportPostView model)
        {
            if (!this.ModelState.IsValid)
            {
                return BadRequest(model);
            }

            var userId = this.GetUserId();
            var postId = await this.postService.Add(model, userId);

            return this.Ok(new { id = postId });
        }

        [HttpPut]
        [Route(nameof(Edit))]
        public async Task<IActionResult> Edit([FromForm] EditPostView model)
        {
            if (!this.ModelState.IsValid)
            {
                return BadRequest(model);
            }

            await this.postService.Edit(model);

            return this.Ok(new { id = model.Id });
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(string id)
        {
            await this.postService.Delete(id);

            return this.Ok();
        }
    }
}
