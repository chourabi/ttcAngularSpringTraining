import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  
  
  title = 'My first angular <strong>app</strong>'; 
  year = 2021;

  heros = [ 
    { name:"chourabi taher", phone:"93863732", email:"tchourabi@gmail.com" , newEmployee:false },
    { name:"chourabi taher 1", phone:"93863732", email:"tchourabi@gmail.com" , newEmployee:false },
    { name:"chourabi taher 2", phone:"93863732", email:"tchourabi@gmail.com" , newEmployee:true },
    { name:"chourabi taher 3", phone:"93863732", email:"tchourabi@gmail.com" , newEmployee:true }
    
    
  ];


  canClick = false;
  countDown = 4;
  btnTXT="Wait...";


  constructor(){

    const i = setInterval(()=>{
      //this.countDown = this.countDown - 1;
      //this.countDown -=1;
      this.countDown--;
      
    },1000)

    setTimeout(()=>{
      this.canClick = true;
      this.btnTXT="click me";
      clearInterval(i)

    },4000);




  }



}
