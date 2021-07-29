import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-page-two',
  templateUrl: './page-two.component.html',
  styleUrls: ['./page-two.component.css']
})
export class PageTwoComponent implements OnInit {
 
  amount;

  ammountForm = new FormGroup({
    ammount: new FormControl('',Validators.required)
  })

  constructor( private route:ActivatedRoute ) { }

  ngOnInit(): void { 
    this.amount = this.route.snapshot.params.number;

    console.log(this.amount);
    
    
    
  }

  operation(){

    let oldAmount = Number.parseInt(this.amount);
    let bills = Number.parseInt(this.ammountForm.value.ammount);
    

    return (oldAmount-bills);
  }

}
