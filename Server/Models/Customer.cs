using System.ComponentModel.DataAnnotations;

namespace Server.Models
{
    public class Customer : BaseEntity
    { 
        [Required]
        public string Name { get; set; }

        [Required]
        public string Address { get; set; }

        public string Phone { get; set; }
    }
}
