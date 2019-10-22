import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dirifswitchfor',
  templateUrl: './dirifswitchfor.component.html',
  styleUrls: ['./dirifswitchfor.component.css']
})
export class DirifswitchforComponent implements OnInit {

  courseI = [
    {cname:"html",course_id:200101,trainer:"Prasad"},
    {cname:"java",course_id:200103,trainer:"Naresh"},
    {cname:"Devops",course_id:200124,trainer:"Shankar"}
];
  constructor() { }

  ngOnInit() {
  }

}
