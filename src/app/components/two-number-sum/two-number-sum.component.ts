import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-two-number-sum',
  templateUrl: './two-number-sum.component.html',
  styleUrls: ['./two-number-sum.component.scss']
})
export class TwoNumberSumComponent implements OnInit {

  constructor() { }

  numbers = [1, 3, 2, 2, 5, 4];
  targetSum=5;
  one: number;
  two: number;
  userInput: string;

  

  findPairs(num,tSum){
    let x, y;
    for(x=0;x<num.length;x++){
      for(y=x+1;x< num.length;y++){
       let sum= num[x]+num[y];
       if(sum===tSum){
          this.one= num[x];
           this.two=num[y];
        break; 
       }
       break;
      }
    }
    
  }
  makeArray(){
    this.numbers=this.userInput.split(',').map(function(a){return +a});
    
  }  
  ngOnInit() {
  }

}
