﻿using Blog.Data.Models;
using Blog.Models.Post;
using Blog.Services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
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
            var targetPost = await this.postService.GetById<DetailPostViewModel>(id);

            return this.Ok(targetPost);
        }

        [HttpPost]
        [Route(nameof(Add))]
        public async Task<IActionResult> Add(ImportPostView model)
        {
            if (!this.ModelState.IsValid)
            {
                return BadRequest(model);
            }

            var userId = this.GetUserId();
            var postId = await this.postService.Add(model, userId);

            return this.Ok(postId);
        }

        [HttpPut]
        [Route(nameof(Edit))]
        public async Task<IActionResult> Edit(EditPostView model)
        {
            if (!this.ModelState.IsValid)
            {
                return BadRequest(model);
            }

            await this.postService.Edit(model);

            return this.Ok(model.Id);
        }

        [HttpDelete]
        [Route(nameof(Delete))]
        public async Task<IActionResult> Delete(string id)
        {
            await this.postService.Delete(id);

            return this.Ok();
        }
    }
}