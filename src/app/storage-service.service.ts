import { Injectable, Inject } from '@angular/core';
import{LOCAL_STORAGE, StorageService} from 'angular-webstorage-service';

const STORAGE_KEY='pure_awsomeness'

@Injectable({
  providedIn: 'root'
})
export class StorageServiceService {
  constructor(@Inject(LOCAL_STORAGE) private storage: StorageService) { }

doSomethingAwesome(){
  const awesomenessLevel: number= this.storage.get(STORAGE_KEY) || 1337;
  this.storage.set(STORAGE_KEY, awesomenessLevel+1);
  console.log(awesomenessLevel) 
}
}
