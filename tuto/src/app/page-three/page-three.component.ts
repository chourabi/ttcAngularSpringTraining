import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-page-three',
  templateUrl: './page-three.component.html',
  styleUrls: ['./page-three.component.css']
})
export class PageThreeComponent implements OnInit {

  final;
  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.final = this.route.snapshot.params.number;
  }

}
