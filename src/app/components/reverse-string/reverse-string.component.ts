import { Component, OnInit } from '@angular/core';
import {StorageServiceService} from '../../storage-service.service'
import {ActivatedRoute} from '@angular/router'


@Component({
  selector: 'app-reverse-string',
  templateUrl: './reverse-string.component.html',
  styleUrls: ['./reverse-string.component.scss']
})
export class ReverseStringComponent implements OnInit {
  strForReversal = 'abc1!2ab3cdm';
  strAfterReversal:string;

  constructor(private storageService: StorageServiceService, private route: ActivatedRoute) { }
  names=['sri','srinivas', 'ghantasala'];

  ngOnInit() {
  }
  reserveString() {
    let  strarray = this.strForReversal.split("");
    this.reverse(strarray);
  }
  isAlphabet(str) {
    return str.length === 1 && str.match(/[a-z]/i);
  }
  reverse(str) { 
    let r = str.length - 1;
    let l = 0;
      while (l < r) 
      { 
          if (!this.isAlphabet(str[l])) 
              l++; 
          else if(!this.isAlphabet(str[r])) 
              r--; 
    
          else { 
              var tmp = str[l];
              str[l] = str[r];
              str[r] = tmp;
              l++; 
              r--; 
          } 
      } 
      this.strAfterReversal= str;
    } 
  routeData= this.route.data;
    storageMethod(){
    this.storageService.doSomethingAwesome();
    this.routeData.subscribe(data=>console.log(data))
    console.log(    this.route.snapshot.params
      )
    }
}
