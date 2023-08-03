using Server.Models;

namespace Server.Business.Contracts
{
    public interface IInvoiceService
    { 
        Task<Invoice> GetInvoiceAsync(Guid invoiceId);
        IQueryable<Invoice> GetInvoicesAsync(Guid customerId);

        Task<bool> Create(Invoice customer);
        Task<bool> Update(Invoice customer);
        Task<bool> Delete(Guid customerId);
    }
}
