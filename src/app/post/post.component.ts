import { Component,Input,Output,OnInit, EventEmitter } from '@angular/core';
import { PostService } from '../AngularServices/post.service';
import { Post } from '../models/post';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  parentPost:string='message from parent component post';
  childMessage:string='message from child component post';
  //this title varible can be accessed in the post component html file only not on other components
  title:string='List of Posts';


  // The @Input() decorator in a child component signifies that the property can receive its value from its parent component.
  @Input() fromParent:string=''

  // The @Output() decorator in a child component signifies that the property can send its value to its parent component.
  @Output() messageEvent=new EventEmitter<string>();

  // constructor works soon after object is created
  // Injecting PostService to the post component
  constructor(private postService:PostService) { }
  // post.service ar method call kora hoise ngOnit() ar vitor
  //ngOnit works soon after the post component is fully initialized in the browser/dom. and then ngOnit() ar vitor ja asey oita only one tym call hobey
  postList:any=[]
  ngOnInit(): void {
    this.postList=this.postService.getItems()
    console.log(this.postList)
  }

  addNewData(){
    let item:Post={name:"amin5",id:27}
    this.postService.addItem(item)
  }
  deletePost(item:any){
    this.postService.deleteItem(item)
  }

  //onclick function when the click btn clicked the the childMessage shown to the parent component app.component.html
  sendMessage(){
    // console.log('message from child component post');
    this.messageEvent.emit(this.childMessage)
  }



}
