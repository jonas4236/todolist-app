using System.ComponentModel.DataAnnotations;

namespace TodoApi.Models
{
    public class Users
    {
        [Key]
        public int Id { get; set; }
        public string Name { get; set; } = string.Empty;
        public int? Age { get; set; }
        public string? message { get; set; }
    }
}
