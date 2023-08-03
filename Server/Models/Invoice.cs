using System.ComponentModel.DataAnnotations;

namespace Server.Models
{
    public class Invoice : BaseEntity
    { 

        public string Description { get; set; }
        [Required, Range(1,100)]
        public int Quantity { get; set; }
        [Required]
        public decimal Price { get; set; }

        public decimal Discount { get; set; }
        public decimal Total { get; set; }
        public decimal GrandTotal { get; set; } 

        public bool IsPaid { get; set; }

        public Guid CustomerId { get; set; }
        public Customer Customer { get; set; }

    }
}
