using Microsoft.AspNetCore.Mvc;
using Server.Business.Contracts;
using Server.Models;

namespace Server.Controllers
{
    public class InvoiceController : BaseController
    {
        private readonly IInvoiceService _invoiceService;

        public InvoiceController(IInvoiceService invoiceService)
        {
            _invoiceService = invoiceService;
        }

        [HttpGet("invoices/{id}")]
        public async Task<IActionResult> Index(Guid? id)
        {
            var invoices =   _invoiceService.GetInvoicesAsync(id);
           
            return Ok(invoices.Select(invoiceDetail => new 
            {
                id = invoiceDetail.Id,
                description = invoiceDetail.Description,
                quantity = invoiceDetail.Quantity,
                price = invoiceDetail.Price,
                discount = invoiceDetail.Discount,
                total = invoiceDetail.Total,
                grandTotal = invoiceDetail.GrandTotal,
                status = invoiceDetail.Status,
                customerId = invoiceDetail.CustomerId,
                customerName = invoiceDetail.Customer.Name,
                created = invoiceDetail.Created
            }));
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetInvoice(Guid id)
        {
            var invoiceDetail = await _invoiceService.GetInvoiceAsync(id);
            
            return Ok(new
            {
                id = invoiceDetail.Id,
                description = invoiceDetail.Description,
                quantity = invoiceDetail.Quantity,
                price = invoiceDetail.Price,
                discount = invoiceDetail.Discount,
                total = invoiceDetail.Total,
                grandTotal = invoiceDetail.GrandTotal,
                status = invoiceDetail.Status,
                customerId = invoiceDetail.CustomerId,
                customerName = invoiceDetail.Customer.Name
            });
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