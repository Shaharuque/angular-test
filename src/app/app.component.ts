import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Tour of Heros';
  parentMessage = "message from parent component app";
  // child component post thekey jei data click event handling ar maddhome ashbey sheita messageFromPost e store hbe
  messageFromPost:any=""
  imageUrl:string="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVFJlDrBiKFJCpV2iUvFdNVq5bsN5A0XvFCs_9iqipG_jSKgpdckff6je2bSUZjdMyu_E&usqp=CAU"

  bool:boolean=true

  receiveMessage($event: any) {
    console.log($event);
    this.messageFromPost=$event
  }

  // //after click on the enter button the value of input field will be shown on the console(old way)
  // onKeyUp($event:any){
  //   console.log('enter was pressed and the value is ', $event.target.value);
  // }
  //new way is using Template Variable
  onKeyUp(username:string){
    console.log('enter was pressed and the value is ', username);
  }

  // For two way data binding we need to import FormsModule in app.module.ts
  user:string=""
  onkeyUp2(){
    console.log(this.user)
  }

  // For Testing form
  postTitle:string=""
  postDetails:string=""
  postUrl:string=""
  postImageUrl:string=""
  addBack:boolean=false

  onSubmit(){
    console.log("Form Submitted")
  console.log(this.postTitle,this.postDetails,this.postUrl,this.postImageUrl)
  }

  // looping through array
  users:Array<string>=['Amin','shafiq','shakib', 'sakib']
  admins:Array<any>=[{name:'shaik',id:27,passion:'cricket'},{name:'shakib',id:75,passion:'football'} ,{id:75,passion:'football'}]


  //angular change detection
  addNewUser(){
    this.users.push('new user')
  }
deleteUser(user:any){
  console.log(user)
  let index=this.admins.indexOf(user)
  this.admins.splice(index,1)
  }

  // Pipes
  name:string="shakib al hasan"
  person:any={
    name:'shakib',
    age:34,
    passion:'cricket'
  }
  date=new Date()

}
