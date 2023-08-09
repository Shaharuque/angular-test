Video Tutorial:https://www.youtube.com/watch?v=CGLdH5ORX-Y&t=14666s

Angular CLI: for creating new angular app(update,maintain,scaffold,develop)
1.npm i -g @angular/cli
2.to create new app: ng new my-app
3.to run the app:ng serve

//folder architecture
navbar.component.css and navbar.component.html=>view file ar code and styling
navbar.component.ts=>holds all the logics

//For creating new component
ng generate component navbar

//NgOnInit() Lifecycle Hook
The ngOnInit function is specific to Angular applications. It is called as soon as Angular has finished initializing our component. Which allows us to finish initializing the component however we dandy-well please. For example, this is where you will call functions to load external data, etc...
//Data Binding
<!-- {{varible_name}} creatng type script scope in html. inside {{}} can write any valid javascript code. This special type of syntex is called string interpolution -->
<p>{{title}}</p>

//share data between components
3 methods available:->
1.Parent to Child component  via @input Decorator
2. Child to Parent component  via @ViewChild Decorator
3. Child to Parent when there is Event, using the @Output Decorator and Event Emitter

@Input Decorator=>pass data from parent to child component
@Output & Event Emitter =>pass data from child to parent component And this approach is ideal when we want to to share data using btn click,form entries and other user event
---------End of angular component------------
section:Display Data,Data Binding and Event handling
##Property Binding:
<img [src]="imageUrl" alt="" srcset="">
##Event Binding: 
<button class="btn-style" (click)="sendMessage()">Click</button>=>post.component.html
In the post.component.ts file a
sendMessage(){
    console.log('message from child component post');
  }

##Two Way Data binding:

one way data binding vs two way data binding:
one way: we can only bind data from component to view. cann't change the value if we want.Ex:property binding,class,style, all binding are one way. can only send data from component to view
two way: can chage the value if needed: form ar data .can pass data from component to view and view to component. using ngModule we can do two way data binding.ngModule comes from FormModule

<!-- Angular Directive -->
Directives are classes that add additional behavior to elements in your Angular applications. Use Angular's built-in directives to manage forms, lists, styles, and what users see.
Built-in structural directives:-
1. *ngFor Directive =>looping though elements
2. *ngIf Directive => jodi ngIf true hoy tahley kicho korbe naliey korbe na(if-else)
We can use <ng-template></ng-template> to use multiple if-else condition
3. ngSwitch Directive 

<!-- Pipes in Angular -->
Angular 8 Inbuld Pipes:
1. DatePipe
2. UpperCasePipe
3. LowerCasePipe
4. CurrencyPipe
5. PercentPipe
6. DecimalPipe
7. JsonPipe
8. SlicePipe

<!-- Creating Custom Pipe -->
ng g pipe foldername/pipename

<!-- Angular Services -->
Angular Services: We use angular services to share data and common methods between components whether there is relationship between components or not. Services are singleton class. We can inject services in components and use them.Services are a great way to share information among classes that don't know each other. You can use services to organize and share code across your app.
## ngOnInit is commonly used for performing one-time setup tasks that need to happen when the component is created. For example, you might want to fetch data from a server, set default values, or perform other initialization logic.(ngOnit ar vitor ja shita component initialize hobar por call hobe ekbar )
Cli Command:ng g s post (Angular service folder a dhukey ai command chalabo) 

## ng g i models/post (Angular model interface )


### Form Types in Angular
<!-- 1. Template Driven Forms -->


