namespace Server.Models
{
    public interface IEntity
    {
        public Guid Id { get; set; }

        public DateTime CreationDate { get; set; }

        public DateTime? LastModifiedDate { get; set; }

        public bool Status { get; set; }
    }
}
