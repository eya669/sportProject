import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
blogTab:any=[
{title:"titre1",description:"des1",date:"14/02/1999"},
{title:"titre2",description:"des2",date:"29/11/2009"},

];
  constructor() { }

  ngOnInit(): void {
  }

}
