import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-array-sort',
  templateUrl: './array-sort.component.html',
  styleUrls: ['./array-sort.component.scss']
})
export class ArraySortComponent implements OnInit {

  constructor() { }
  isToggle: boolean=true;
  ngOnInit() {
  }
   jsonArray = [
    {x:6, y:'mno'}, 
    {x: 8, y:'cda'}, 
    {x: 6, y: 'abc'}, 
    {x: 4, y: 'cda'}, 
    {x: 6, y: 'cda'}, 
    {x: 3, y: 'ada'}, 
    {x: 7, y: 'mda'}, 
    {x: 8, y: 'adfff'}, 
    {x: 6, y: 'cda'}, 
    {x: 4, y: 'adfda'},
    {x: 2, y: 'ada'}, 
    {x: 7, y: 'adfda'}, 
    {x: 1, y: 'zdfff'}, 
    {x: 5, y: 'cda'}, 
    {x: 4, y: 'kksj'}
  ];
  

  sort(){
   if(this.isToggle){
    this.jsonArray.sort(function(a,b){return a.x-b.x})
    this.isToggle=!this.isToggle;
   }
   else{
     this.jsonArray.sort(
       function(a,b){
         if(a.y>b.y){
          
          return 1}

         return -1
       })
       this.isToggle=!this.isToggle;

       
   }
    
  }
}
