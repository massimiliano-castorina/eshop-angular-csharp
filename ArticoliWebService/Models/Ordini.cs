using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace ArticoliWebService.Models
{
    public class Ordini
    {
        [Key]
        public int id { get; }
        public int id_utente { get; set; }
        public int id_articolo { get; set; }

        public DateTime data_ordine { get; set; }

        public double Totale_ordine { get; set; }

        public int numero_pezzi { get; set; }

        public virtual Ordini ordini { get; set; }

        public virtual Articolo articolo { get; set; }

        public virtual Utente utente { get; set; }

    }
}
