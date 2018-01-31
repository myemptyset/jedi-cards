// import { Component } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.less']
})

// export class NotFoundComponent {}

export class NotFoundComponent implements OnInit {
  error: string;
  constructor(private currentroute: ActivatedRoute) { }
  ngOnInit() {
    this.error = this.currentroute.snapshot.params['numError'];
  }
}

// export class NotFoundComponent implements OnInit {

//   constructor() { }

//   ngOnInit() {
//   }

// } ANNA no ens fa falta, no volem implementar res
