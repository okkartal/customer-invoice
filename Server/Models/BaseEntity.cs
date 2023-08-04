using System.ComponentModel.DataAnnotations;

namespace Server.Models
{
    public class BaseEntity : IEntity
    {
        [Key]
        public Guid Id { get; set; } = Guid.NewGuid();

        public DateTime CreationDate { get; set; }

        public DateTime? LastModifiedDate { get; set; } 

        public bool Status { get; set; }
    }
}
