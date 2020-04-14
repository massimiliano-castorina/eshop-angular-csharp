using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ArticoliWebService.services
{
    public interface IArticoliRepository
    {
        ICollection<Articolo> SelArticoliByDescrizione(string Descrizione);

        ICollection<Articolo> SelArticoliByNome(string Nome);
        ICollection<Articolo> SelArticoliIfNumPezziMag(int NumPezzi);
        ICollection<Articolo> SelArticoliIfNumPezziMin(int NumPezzi);

        Articolo SelArticoloById(string CodID);

        bool InsArticolo (Articolo articolo);

        bool UpdArticolo(Articolo articolo);

        bool DelArticolo(Articolo articolo);

        bool ArticoloExists(Articolo IdArticolo);

        bool Salva();

    }
}
