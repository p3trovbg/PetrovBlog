using Blog.Data.Models;
using Blog.Models.Post;
using Blog.Services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;

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

        [Route(nameof(Add))]
        public async Task<IActionResult> Add(ImportPostView model)
        {
            if (!this.ModelState.IsValid)
            {
                return BadRequest(model);
            }

            model.AuthorId = this.userManager.GetUserId(this.User);
            var postId = await this.postService.Add(model);

            return this.Ok(postId);
        }

        public async Task<IActionResult> Edit(EditPostView model)
        {
            if (!this.ModelState.IsValid)
            {
                return BadRequest(model);
            }

            await this.postService.Edit(model);

            return this.Ok(model.Id);
        }

        public async Task<IActionResult> Delete(string id)
        {
            await this.postService.Delete(id);

            return this.Ok();
        }
    }
}
