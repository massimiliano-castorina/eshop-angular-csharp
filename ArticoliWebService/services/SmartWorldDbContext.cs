using ArticoliWebService.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ArticoliWebService.services
{
    public class SmartWorldDbContext : DbContext
    {
        public SmartWorldDbContext(DbContextOptions<SmartWorldDbContext> options) : base(options)
        {

        }

        public virtual DbSet<Articolo> Articoli { get; set; }
        public virtual DbSet<Ordini> Ordini { get; set; }
        public virtual DbSet<Utente> Utente { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Ordini>()
                .HasKey(a => new { a.id });

            modelBuilder.Entity<Ordini>()
                .HasOne<Articolo>(s => s.articolo)
                .WithMany(g => g.ordini)
                .HasForeignKey(g => g.id_articolo);

            modelBuilder.Entity<Ordini>()
                .HasOne<Utente>(s => s.utente)
                .WithMany(g => g.ordini)
                .HasForeignKey(g => g.id_utente);
        }
    }
}
