using Microsoft.EntityFrameworkCore;
using TodoApi.Models;

namespace TodoApi.Data
{
    public class TodolistDbContext(DbContextOptions<TodolistDbContext> options) : DbContext(options)
    {
        public DbSet<Users>? Users => Set<Users>();
    }
}
