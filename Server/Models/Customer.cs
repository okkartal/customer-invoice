using System.ComponentModel.DataAnnotations;

namespace Server.Models
{
    public class Customer : BaseEntity
    { 
        [Required,MaxLength(50)]
        public string Name { get; set; }

        [Required, MaxLength(50)]
        public string Phone { get; set; }

        [Required,MaxLength(100)]
        public string Address { get; set; }
    }
}
