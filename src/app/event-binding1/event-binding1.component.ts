import { Component, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-event-binding1',
  templateUrl: './event-binding1.component.html',
  styleUrls: ['./event-binding1.component.css']
})
export class EventBinding1Component implements OnInit {
 
  // var visit5 = "s";  
    private visit1 : string = "s1";
    // console.log('im in component');
    
things = [1,23,56,4];
vinay1 = {name:"vinay3453", id:465};
vinay = [{name:"vinayfgh", id:465},
          {name:"shankar", id:5}]; 
          
print (){
console.log(this.vinay);
}
  constructor() {
    var things2 = [56,1,23,56,4];
    console.log(things2);

    this.print();
     var vinay41 : {name:"chanfdu", id:465};
    var isk = true;
    var a = this.things ;
    console.log(a);
    {name:465 ; id:132};
    // console.log(vinay1);
    var visit6 = "s6";
    console.log('im in constru');
    console.log(visit6);
    console.log(this.visit1);
    // private visit2 = "s";
   }
  //  var visit7 = "s";  
    private visit3 = "s";
 ngOnInit() {
  var vinay15 = {name:"chanfdu56345", id:465};
    this.things = [56];
    // console.log(a1);
    var visit8 = "s8";
    // private visit4 = "s";
    console.log('im in ngOninit');
    console.log(visit8);
    console.log(this.visit1);
    // console.log(visit6);
  }
  
 }