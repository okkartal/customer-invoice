using Microsoft.EntityFrameworkCore;
using Server.Business.Contracts;
using Server.Data;
using Server.Models;

namespace Server.Business
{
    public class InvoiceService : IInvoiceService
    {
        private readonly ApplicationDbContext _dbContext;
        #region Constructor

        public InvoiceService(ApplicationDbContext dbContext)
        {
            _dbContext = dbContext;
        }

        #endregion
         
        public async Task<Invoice?> GetInvoiceAsync(Guid invoiceId)
        {
            return await _dbContext.Invoices.Include(x => x.Customer).AsNoTracking().FirstOrDefaultAsync(x => x.Id == invoiceId);
        } 

        public   IQueryable<Invoice> GetInvoicesAsync(Guid? customerId)
        {
            return (customerId.HasValue) ?
                   _dbContext.Invoices.Where(x => x.CustomerId == customerId).OrderByDescending(x => x.LastModifiedDate).AsNoTracking() :
             _dbContext.Invoices.OrderByDescending(x => x.LastModifiedDate).AsNoTracking();
        }


        public async Task<bool> Create(Invoice invoice)
        {
            invoice.Id = Guid.NewGuid();
            invoice.CreationDate = DateTime.Now;
             _dbContext.Invoices.Add(invoice);
            return await _dbContext.SaveChangesAsync() > 0;
        }


        public async Task<bool> Update(Invoice invoice)
        {
            invoice.LastModifiedDate = DateTime.Now;
            _dbContext.Invoices.Update(invoice);
            return await _dbContext.SaveChangesAsync() > 0;
        }

        public async Task<bool> Delete(Guid invoiceId)
        {
            var entity = _dbContext.Invoices.Find(invoiceId);
            
            if (entity == null)
                return false;
           
            _dbContext.Invoices.Remove(entity);
            return await _dbContext.SaveChangesAsync() > 0;
        }
    }
}
