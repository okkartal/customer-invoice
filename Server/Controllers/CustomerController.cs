using Microsoft.AspNetCore.Mvc;
using Server.Business.Contracts;
using Server.Models;

namespace Server.Controllers
{
    public class CustomerController : BaseController
    {
        private readonly ICustomerService _customerService;

        public CustomerController(ICustomerService customerService)
        {
            _customerService = customerService;
        }

        [HttpGet]
        public async Task<IActionResult> Index([FromQuery]bool? status)
        {
            return Ok(_customerService.GetAsync(status));
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetCustomer(Guid id)
        {
            return Ok(await _customerService.GetAsync(id));
        }

        [HttpPost]
        public async Task<IActionResult> AddCustomer([FromBody]Customer customer)
        { 
            return Ok(await _customerService.Create(customer));
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateCustomer([FromRoute]Guid id,[FromBody] Customer customer)
        {
            if (id != customer.Id)
                return BadRequest();
            return Ok(await _customerService.Update(customer));
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteCustomer([FromRoute] Guid id)
        {
            return Ok(await _customerService.Delete(id));
        }
    }
}