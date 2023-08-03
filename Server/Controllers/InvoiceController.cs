using Microsoft.AspNetCore.Mvc;
using Server.Business.Contracts;
using Server.Models;

namespace Server.Controllers
{
    [ApiController]
    [Produces("application/json")]
    [Route("api/[controller]")]
    public class InvoiceController : ControllerBase
    {
        private readonly IInvoiceService _invoiceService;

        public InvoiceController(IInvoiceService invoiceService)
        {
            _invoiceService = invoiceService;
        }

        [HttpGet("invoices/{id}")]
        public async Task<IActionResult> Index(Guid id)
        {
            return Ok(_invoiceService.GetInvoicesAsync(id));
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetInvoice(Guid id)
        {
            return Ok(await _invoiceService.GetInvoiceAsync(id));
        }

        [HttpPost]
        public async Task<IActionResult> AddInvoice([FromBody]Invoice invoice)
        { 
            return Ok(await _invoiceService.Create(invoice));
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateInvoice([FromRoute]Guid id,[FromBody] Invoice invoice)
        {
            if (id != invoice.Id)
                return BadRequest();
            return Ok(await _invoiceService.Update(invoice));
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteInvoice([FromRoute] Guid id)
        {
            return Ok(await _invoiceService.Delete(id));
        }
    }
}