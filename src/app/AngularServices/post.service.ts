import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private items:Array<any>=[{name:"amin",id:23},{name:"amin2",id:24},{name:"amin3",id:25},{name:"amin4",id:26}]
  constructor() { }

  // creating a method to get the items
  getItems(){
    return this.items
  }
  addItem(item:object){
    this.items.push(item)
  }
  deleteItem(item:object){
    let index=this.items.indexOf(item)
    this.items.splice(index,1)
  }
  updateItem(item:object){
    let index=this.items.indexOf(item)
    this.items[index]=item
  }
}
