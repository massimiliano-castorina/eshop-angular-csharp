import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.scss']
})
export class ErrorComponent implements OnInit {

  errorMsg = 'Spiacente, la pagina da te ricercata non è presente!';

  constructor() { }

  ngOnInit(): void {
  }

}
