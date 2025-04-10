using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using TodoApi.Data;
using TodoApi.Models;
using Microsoft.EntityFrameworkCore;

namespace TodoApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TodoController(TodolistDbContext context) : ControllerBase
    {
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Users>>> GetUsers()
        {
            var result = await context.Users.ToListAsync();
            if (result.Count == 0)
            {
                return NoContent();
            }
            else
            {
                return Ok(result);
            }
        }

        [HttpGet("single/{id}")]
        public async Task<ActionResult<IEnumerable<Users>>> GetUserById(int id)
        {

            var result = await context.Users.FindAsync(id);
            if (result == null)
            {
                return NoContent();
            }
            else
            {
                return Ok(result);
            }
        }

        [HttpPost("create")]
        public async Task<ActionResult<Users>> CreateTodo(Users data)
        {
            context.Users.Add(data);
            await context.SaveChangesAsync();
            return CreatedAtAction(nameof(GetUserById), new { id = data.Id }, data);
        }

        [HttpPut("update")]
        public async Task<ActionResult<Users>> UpdateTodo(Users data)
        {
            context.Users.Update(data);
            await context.SaveChangesAsync();
            return Ok(data);
        }

        [HttpDelete("remove/{id}")]
        public async Task<ActionResult<Users>> RemoveTodo(int id)
        {
            var productId = await context.Users.FindAsync(id);
            if (productId == null)
            {
                return NotFound();
            }
            else
            {
                context.Users.Remove(productId);
                await context.SaveChangesAsync();
                return NoContent();
            }
        }
    }
}
