import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-jumbotron',
  templateUrl: './jumbotron.component.html',
  styleUrls: ['./jumbotron.component.scss']
})
export class JumbotronComponent implements OnInit {

  constructor(private route: Router) { }


  @Input() Titolo: string;
  @Input() SottoTitolo: string;
  @Input() Show: boolean;


  ngOnInit(): void {
  }

  loginFunction() {
    this.route.navigate(['login']);
  }

  registerFunction = () => this.route.navigate(['register']);
}
