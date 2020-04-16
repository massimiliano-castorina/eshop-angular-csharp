package com.smartworld.project.controller;

import java.math.BigInteger;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.sql.SQLException;
import java.text.DateFormat;
import java.util.Calendar;
import java.util.Date;
import java.util.logging.Level;
import java.util.logging.Logger;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import com.smartworld.project.model.Utente;
import com.smartworld.project.model.Articoli;
import com.smartworld.project.model.IUtenteDb;
import com.smartworld.project.model.IArticoliDb;

@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
public class Controller {
	
	@Autowired
	IArticoliDb articolo;
	
	@Autowired
	IUtenteDb utente;
	
	Boolean emailControl;
	
	@SuppressWarnings("unchecked")
	@RequestMapping(method = RequestMethod.POST, value = "/insertnewuser")
	@ResponseBody
	public ResponseEntity<?> inserisciUtente (@RequestBody Utente u) throws SQLException, NoSuchAlgorithmException {
		String md5 = null;
		emailControl = false;
		try {
		       // Create MessageDigest object for MD5
	        MessageDigest digest = MessageDigest.getInstance("MD5");
	        // Update input string in message digest
	        digest.update(u.getPassword().getBytes(), 0, u.getPassword().length());
	        // Converts message digest value in base 16 (hex)
	        md5 = new BigInteger(1, digest.digest()).toString(32);
		} catch (NoSuchAlgorithmException e) {
	        throw e;
	    }
		
		//boolean emailControl = false;
		
		//u.getPassword() = md5;
		utente.findAll().forEach(email -> {
			if(email.getEmail().equals(u.getEmail())) {
				emailControl = true;
			};
		});

		utente.findAll().forEach(username -> {
			if(username.getUsername().equals(u.getUsername())) {
				emailControl = true;
			};
		});
		
		if(!emailControl) {
			Utente ut = new Utente();
			ut.setNome(u.getNome());
			ut.setCognome(u.getCognome());
			ut.setEmail(u.getEmail());
			ut.setUsername(u.getUsername());
			ut.setPassword(md5.toString());
			utente.save(ut);
			return new ResponseEntity<Object>(HttpStatus.OK);
		} else {
			return new ResponseEntity<Object>(HttpStatus.CONFLICT);
		}
	}
	
//	public boolean contactExist (Iterable<Utente> u) {
//
//	}
}
