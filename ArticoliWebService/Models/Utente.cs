using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace ArticoliWebService.Models
{
    public class Utente
    {
        [Key]
        public int id { get; set; }

        [MinLength(2, ErrorMessage = "The name is min 2 char")]
        [MaxLength(100, ErrorMessage = "The name is max 100 char")]
        public string nome { get; set; }

        [MinLength(2, ErrorMessage = "The surname is min 2 char")]
        [MaxLength(100, ErrorMessage = "The surname is max 100 char")]
        public string cognome { get; set; }

        [StringLength(16, ErrorMessage = "The cod.fisc. is 16 char")]
        public string cod_fiscale { get; set; }

        [MinLength(2, ErrorMessage = "The surname is min 2 char")]
        [MaxLength(200, ErrorMessage = "The surname is max 200 char")]
        public string indirizzo { get; set; }

        [MinLength(2, ErrorMessage = "The address is min 2 char")]
        [MaxLength(150, ErrorMessage = "The address is max 150 char")]
        public string citta { get; set; }

        [StringLength(5, ErrorMessage = "The cap is 5 char")]
        public string cap { get; set; }

        [StringLength(2, ErrorMessage = "The prov is 2 char")]
        public string provincia { get; set; }

        [MinLength(2, ErrorMessage = "The telephone is min 2 char")]
        [MaxLength(100, ErrorMessage = "The telephone is max 100 char")]
        public string telefono { get; set; }

        [MinLength(5, ErrorMessage = "The email is min 5 char")]
        [MaxLength(200, ErrorMessage = "The email is max 200 char")]
        public string email { get; set; }

        [MinLength(2, ErrorMessage = "The password is min 2 char")]
        [MaxLength(100, ErrorMessage = "The password is max 100 char")]
        public string password { get; set; }

        [MinLength(5, ErrorMessage = "The username is min 5 char")]
        [MaxLength(100, ErrorMessage = "The username is max 200 char")]
        public string username { get; set; }

        [MaxLength(100, ErrorMessage = "The partita_iva is max 15 char")]
        public string partita_iva { get; set; }

        [MaxLength(1, ErrorMessage = "The activate is 1 or 0 (true,false)")]
        public Int16 attivato { get; set; }
        public DateTime dataIscrizione { get; }

        public virtual ICollection<Ordini> ordini { get; set; }
        public virtual Utente utente { get; set; }
    }
}
