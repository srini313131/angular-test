import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-empty-an-array',
  templateUrl: './empty-an-array.component.html',
  styleUrls: ['./empty-an-array.component.scss']
})
export class EmptyAnArrayComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
 fruits: string[]=['Apple','Banana','Oranges', 'Mangoes', 'Grape Fruit', 'Peaches'];
 arrayString: string="Apple,Banana,Oranges, Mangoes, Grape Fruit, Peaches";
 spliceVariable: number=6;

 EmptyByPop(){
   if(this.fruits.length>0){
    this.fruits.pop()
    return
   }
   alert('noitems to remove')
 }

 EmptyByLength(){
   this.fruits.length=0;

 }
 reload(){
   if(this.fruits.length===0){
    this.fruits=this.arrayString.split(',')
    return
   }
   alert('Empty Array Before Reloading')

  }

  EmptyByShift(){
    if(this.fruits.length>0){
      this.fruits.shift()
      return
     }
     alert('noitems to remove')
  }

  EmptyBySplice(){
    if(this.fruits.length>0){
      this.fruits.splice(0,1);
      return
     }
     alert('noitems to remove')
      
      }

}
