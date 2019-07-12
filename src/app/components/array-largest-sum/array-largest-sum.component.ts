import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-array-largest-sum',
  templateUrl: './array-largest-sum.component.html',
  styleUrls: ['./array-largest-sum.component.scss']
})
export class ArrayLargestSumComponent implements OnInit {
sampleArray: number[]= [1,2,3,4,5,6];
sum:number;
userInput: string;

desiredSum(){
 let sortedArray= this.sampleArray.sort(function(a,b) {return b-a}) ;
 this.sum= sortedArray[0]+sortedArray[1];
}

makeArray(){
  this.sampleArray=this.userInput.split(',').map(function(a){return +a})
}



constructor() { }

  ngOnInit() {
  }

}
