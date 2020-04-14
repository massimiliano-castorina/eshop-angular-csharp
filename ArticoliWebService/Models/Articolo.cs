using ArticoliWebService.Models;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace ArticoliWebService
{
    public class Articolo
    {
        [Key]
        public int id { get; set; }
        public string descrizione { get; set; }

        [MinLength(5, ErrorMessage = "The name is min 5 char")]
        [MaxLength(200, ErrorMessage = "The name is max 200 char")]
        public string nome { get; set; }
        public int n_pezzi { get; set; }
        public double prezzo { get; set; }


        public int iva { get; set; }

        public virtual ICollection<Ordini> ordini { get; set; }
        public virtual Articolo articolo { get; set; }

    }
}
