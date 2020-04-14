using ArticoliWebService.services;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ArticoliWebService.Controllers
{
    [ApiController]
    [Produces("application/json")]
    [Route("articoli/")]
    public class ArticoliController : Controller
    {
        private IArticoliRepository articoliRepository;

        public ArticoliController (IArticoliRepository articoliRepository)
        {
            this.articoliRepository = articoliRepository;
        }

        [HttpGet("search/description/{filter}")]
        [ProducesResponseType(400)]
        [ProducesResponseType(200, Type = typeof(IEnumerable<Articolo>))]
        public IActionResult GetArticoloByDesc(string filter)
        {
            var articoli = this.articoliRepository.SelArticoliByDescrizione(filter);

            return Ok(articoli);
        }
    }
}
