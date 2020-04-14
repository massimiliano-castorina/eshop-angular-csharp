import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-image-jumbotron',
  templateUrl: './image-jumbotron.component.html',
  styleUrls: ['./image-jumbotron.component.scss']
})
export class ImageJumbotronComponent implements OnInit {

  constructor(private route: Router) { }
  pathImage: string ;


  ngOnInit(): void {
    if (this.route.url === '/login') {
      this.pathImage = '../../assets/images/login.jpg';
    } else if (this.route.url === '/register') {
      this.pathImage = '../../assets/images/register.jpg';
    } else if (this.route.url === '/welcome') {
      this.pathImage = '../../assets/images/welcome.jpg';
    } else if (this.route.url === '/articoli') {
      this.pathImage = '../../assets/images/smartphone.jpg';
    } else {
      this.pathImage = '../../assets/images/elettronica.jpg';
    }
  }

}
