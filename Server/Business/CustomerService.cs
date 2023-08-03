using Microsoft.EntityFrameworkCore;
using Server.Business.Contracts;
using Server.Data;
using Server.Models; 

namespace Server.Business
{
    public class CustomerService : ICustomerService
    {
        private readonly ApplicationDbContext _dbContext;
        #region Constructor

        public CustomerService(ApplicationDbContext dbContext)
        {
            _dbContext = dbContext;
        }

        #endregion

        public async Task<bool> IsExistAsync(string customerName)
        {
            return await _dbContext.Customers.AnyAsync(x => x.Name == customerName);
        } 
        public async Task<Customer?> GetAsync(Guid customerId)
        {
            return await _dbContext.Customers.AsNoTracking().FirstOrDefaultAsync(x => x.Id == customerId);
        } 

        public   IQueryable<Customer> GetAsync()
        {
            return   _dbContext.Customers.AsNoTracking();
        }


        public async Task<bool> Create(Customer customer)
        {
            if (await IsExistAsync(customer.Name))
                return false;
            customer.Id = Guid.NewGuid();
            customer.Created = DateTime.Now;
             _dbContext.Customers.Add(customer);
            return await _dbContext.SaveChangesAsync() > 0;
        }


        public async Task<bool> Update(Customer customer)
        {
            _dbContext.Customers.Update(customer);
            return await _dbContext.SaveChangesAsync() > 0;
        }

        public async Task<bool> Delete(Guid customerId)
        {
            var entity = await GetAsync(customerId);
            
            if (entity == null)
                return false;
            var invoices = _dbContext.Invoices.Where(x => x.CustomerId == entity.Id);
            _dbContext.Invoices.RemoveRange(invoices);
            _dbContext.Customers.Remove(entity);
            return await _dbContext.SaveChangesAsync() > 0;
        }
    }
}
