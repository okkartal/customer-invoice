using Microsoft.AspNetCore.Mvc;
using Server.Business.Contracts;
using Server.Security;

namespace Server.Controllers
{
    [ApiController]
    [ApiKey]
    [Produces("application/json")]
    [Route("api/[controller]")]

    public class BaseController : ControllerBase
    { 
    }
}
