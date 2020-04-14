using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ArticoliWebService.services
{
    public class ArticoliRepository : IArticoliRepository
    {
        SmartWorldDbContext smartWorldDbContext;

        public ArticoliRepository (SmartWorldDbContext smartWorldDbContext)
        {
            this.smartWorldDbContext = smartWorldDbContext;
        }
        public bool ArticoloExists(Articolo IdArticolo)
        {
            throw new NotImplementedException();
        }

        public bool DelArticolo(Articolo articolo)
        {
            throw new NotImplementedException();
        }

        public bool InsArticolo(Articolo articolo)
        {
            throw new NotImplementedException();
        }

        public bool Salva()
        {
            throw new NotImplementedException();
        }

        public ICollection<Articolo> SelArticoliByDescrizione(string Descrizione)
        {
            var listArticoli = this.smartWorldDbContext.Articoli
                .Where(a => a.descrizione.Contains(Descrizione))
                .OrderBy(a => a.nome)
                .ToList();

            return listArticoli;
        }

        public ICollection<Articolo> SelArticoliByNome(string Nome)
        {
            var listArticoli = this.smartWorldDbContext.Articoli
                .Where(a => a.nome.Contains(Nome))
                .OrderBy(a => a.nome)
                .ToList();

            return listArticoli;
        }

        public ICollection<Articolo> SelArticoliIfNumPezziMag(int NumPezzi)
        {
            var listArticoli = this.smartWorldDbContext.Articoli
                .Where(a => a.n_pezzi >= NumPezzi)
                .OrderBy(a => a.nome)
                .ToList();

            return listArticoli;
        }

        public ICollection<Articolo> SelArticoliIfNumPezziMin(int NumPezzi)
        {
            var listArticoli = this.smartWorldDbContext.Articoli
                .Where(a => a.n_pezzi <= NumPezzi)
                .OrderBy(a => a.nome)
                .ToList();

            return listArticoli;
        }

        public Articolo SelArticoloById(string CodID)
        {
            var articolo = this.smartWorldDbContext.Articoli
                .Where(a => a.id.Equals(CodID))
                .FirstOrDefault();

            return articolo;
        }

        public bool UpdArticolo(Articolo articolo)
        {
            throw new NotImplementedException();
        }
    }
}
