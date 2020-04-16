package com.smartworld.project.model;

import java.sql.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name= "articoli")
public class Articoli {
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private int id;
	
	@Column(name="nome")
	private String nome;
	 
	@Column(name="descrizione")
	private String descrizione;
	
	@Column(name="n_pezzi")
	private int n_pezzi;
	
	@Column(name="prezzo")
	private double prezzo;
	
	@Column(name="iva")
	private int iva;

	public int getId() {
		return id;
	}

	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

	public String getDescrizione() {
		return descrizione;
	}

	public void setDescrizione(String descrizione) {
		this.descrizione = descrizione;
	}

	public int getN_pezzi() {
		return n_pezzi;
	}

	public void setN_pezzi(int n_pezzi) {
		this.n_pezzi = n_pezzi;
	}

	public double getPrezzo() {
		return prezzo;
	}

	public void setPrezzo(double prezzo) {
		this.prezzo = prezzo;
	}

	public int getIva() {
		return iva;
	}

	public void setIva(int iva) {
		this.iva = iva;
	}
	
	
	
}
