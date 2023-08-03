using System.ComponentModel.DataAnnotations;

namespace Server.Models
{
    public class BaseEntity : IEntity
    {
        [Key]
        public Guid Id { get; set; } = Guid.NewGuid(); 

        public DateTime Created { get; set; } = DateTime.Now;
    }
}
