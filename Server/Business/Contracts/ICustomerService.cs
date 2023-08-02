using Server.Models;

namespace Server.Business.Contracts
{
    public interface ICustomerService
    {
        Task<bool> IsExistAsync(string customerName);
        Task<Customer> GetAsync(Guid customerId);
        IQueryable<Customer> GetAsync();

        Task<bool> Create(Customer customer);
        Task<bool> Update(Customer customer);
        Task<bool> Delete(Guid customerId);
    }
}
