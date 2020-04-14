using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System.Text.Json;
using System.Text.Json.Serialization;

namespace ArticoliWebService.Controllers
{
    [ApiController]
    [Route("api/smartphone")]
    public class ArticoliControllerBase : ControllerBase
    {
        //private static readonly string[] Summaries = new[]
        //{
        //    "Freezing", "Bracing", "Chilly", "Cool", "Mild", "Warm", "Balmy", "Hot", "Sweltering", "Scorching"
        //};

        //private readonly ILogger<WeatherForecastController> _logger;

        //public WeatherForecastController(ILogger<WeatherForecastController> logger)
        //{
        //    _logger = logger;
        //}

        //[HttpGet]
        //public IEnumerable<WeatherForecast> Get()
        //{
        //    var rng = new Random();
        //    return Enumerable.Range(1, 5).Select(index => new WeatherForecast
        //    {
        //        Date = DateTime.Now.AddDays(index),
        //        TemperatureC = rng.Next(-20, 55),
        //        Summary = Summaries[rng.Next(Summaries.Length)]
        //    })
        //    .ToArray();
        //}
        IList<Articolo> arrList = new List<Articolo>();

        Articolo articoli = new Articolo();


        [EnableCors]
        [HttpGet()]
        public string getArticoli()
        {
            Articolo articolo1 = new Articolo();
            Articolo articolo2 = new Articolo();
            Articolo articolo3 = new Articolo();
            Articolo articolo4 = new Articolo();
            Articolo articolo5 = new Articolo();
            Articolo articolo6 = new Articolo();
            articolo1.id = 1; articolo1.nome = "Xiaomi redmi 5"; articolo1.prezzo = 200; articolo1.n_pezzi = 10;
            articolo2.id = 2; articolo2.nome = "Samsung s8"; articolo2.prezzo = 450; articolo2.n_pezzi = 8;
            articolo3.id = 3; articolo3.nome = "Samsung s9"; articolo3.prezzo = 600; articolo3.n_pezzi = 7;
            articolo4.id = 4; articolo4.nome = "Samsung s10"; articolo4.prezzo = 900; articolo4.n_pezzi = 3;
            articolo5.id = 5; articolo5.nome = "Asus Zoom"; articolo5.prezzo = 250; articolo5.n_pezzi = 2;
            articolo6.id = 6; articolo6.nome = "HTC superb"; articolo6.prezzo = 400; articolo6.n_pezzi = 3;

            /*            articolo1.id.ToString(); articolo1.descrizione = "Xiaomi redmi 5"; articolo1.prezzo = 200; 
                        articolo2.id.ToString(); articolo2.descrizione = "Asus pegasus"; articolo2.prezzo = 120; 
                        articolo3.id.ToString(); articolo3.descrizione = "Samsung s10"; articolo3.prezzo = 730; 
                        articolo4.id.ToString(); articolo4.descrizione = "Samsung s7"; articolo4.prezzo = 520; 
                        articolo5.id.ToString(); articolo5.descrizione = "Samsung s8";  articolo5.prezzo = 520; 
                        articolo6.id.ToString(); articolo6.descrizione = "prova"; articolo6.prezzo = 520;*/
            arrList.Add(articolo1);
            arrList.Add(articolo2);
            arrList.Add(articolo3);
            arrList.Add(articolo4);
            arrList.Add(articolo5);
            arrList.Add(articolo6);
            string jsonReturn = JsonSerializer.Serialize(arrList);
            return jsonReturn;
        }
            

        //[EnableCors]
        //[HttpGet("{Nome}")]
        //public string getArticoli(string Nome)
        //{
        //    try
        //    {
        //        if (Nome.ToLower() == "massimiliano")
        //        {
        //            throw new Exception("Errore, l'utente è stato disabilitato");
        //        }
        //        else
        //        {
        //            return string.Format("\"Ciao {0}, benvenuto nel mio portale!\"", Nome);
        //        }
        //    }
        //    catch(System.Exception ex)
        //    {
        //        return ex.Message;
        //    }

        //}

    }
}
