import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavbarComponent } from '../navbar/navbar.component';
import { BasicauthService } from '../services/auth/basicauth.service';
import { ArticoliDataService } from '../services/data/articoli-data.service';

@Component({
  selector: 'app-articoli',
  templateUrl: './articoli.component.html',
  styleUrls: ['./articoli.component.scss']
})

export class ArticoliComponent implements OnInit {
  articoli = [];
  idTable = '';
  titleTable = '';
  titleColumnId = '';
  titleColumnNome = '';
  titleColumnPrezzo = '';
  titleColumnPzCart = '';
  visibleTable = false;
  createTableCondition = true;
  auth: boolean = false;

  constructor(private route: Router, private getArticoliSrv: ArticoliDataService, private Basicauth: BasicauthService) { }

  ngOnInit(): void {
    if (sessionStorage.getItem('auth') === 'true') {
      this.auth = true;
      const navbar = new NavbarComponent(this.Basicauth, this.route);
      navbar.logIn();
    } else {
      this.auth = false;
      this.route.navigate(['login']);
    }
  }

  listArticoli() {
    if (this.createTableCondition) {
      console.log(this.getArticoliSrv.listArticoli());
      this.idTable = 'articoli';
      this.titleTable = 'Smartphone';
      this.titleColumnId = 'ID';
      this.titleColumnNome = 'nome';
      this.titleColumnPrezzo = 'Prezzo';
      this.titleColumnPzCart = 'Pezzi Disponibili';
      this.getArticoliSrv.listArticoli().subscribe(
        response => this.handleResponse(response),
        error => this.handleError(error)
      );
      this.visibleTable = true;
      this.createTableCondition = false;
    }
  }

  hiddenListaArticoli() {
    this.visibleTable = false;
    this.createTableCondition = true;
    this.idTable = '';
    this.titleTable = '';
    this.titleColumnId = '';
    this.titleColumnNome = '';
    this.titleColumnPrezzo = '';
    this.titleColumnPzCart = '';
    this.articoli = [];
  }


  handleResponse(response) {
    const jsonLength = response.length;
    for (let i = 0; i < jsonLength; i++) {
      if (response[i].id !== 0) {
        this.articoli.push(response[i]);
        console.log(response[i]);
      }
    }
  }

  handleError(error){
    this.articoli = error.error.text;
  }
}
