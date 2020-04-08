import { Component, OnInit, HostListener } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  list = [{title: 'MyTodo1', itemList: [{item: 'Angular', isCheck: true},
  {item: 'Angular5', isCheck: true},
  {item: 'Angular', isCheck: true},
  {item: 'Angular', isCheck: true},
  {item: 'Angular', isCheck: true},
  {item: 'Angular', isCheck: true},

]},
{
  title: 'React1', itemList: [
    {item: 'Rea6', isCheck: false},
    {item: 'Re', isCheck: false},
    {item: 'Angular', isCheck: false},
    {item: 'Re', isCheck: false},
    {item: 'R', isCheck: true},
  ]
},
{
  title: 'React1', itemList: [
    {item: 'Rea6', isCheck: false},
  ]
},

{title: 'MyTodo2', itemList: [{item: 'Angular', isCheck: true},
  {item: 'Angular4', isCheck: true},
  {item: 'Angular', isCheck: true},
  {item: 'Angular', isCheck: true},
  {item: 'Angular', isCheck: true},

]},
{title: 'MyTodo4', itemList: [{item: 'Angular', isCheck: true},
  {item: 'Angular8', isCheck: true},
  {item: 'Angular', isCheck: true},
  {item: 'Angular', isCheck: true},
  {item: 'Angular', isCheck: true},
  {item: 'Angular', isCheck: true},
  {item: 'Angular', isCheck: true},
  {item: 'Angular', isCheck: true},
]},
{
  title: 'React3', itemList: [
    {item: 'Rea7', isCheck: false},
    {item: 'React', isCheck: false},
    {item: 'Re', isCheck: false},
    {item: 'Angular', isCheck: false},
    {item: 'Re', isCheck: false},
    {item: 'R', isCheck: true},
    {item: 'R', isCheck: true},

  ]
},
{
  title: 'React5', itemList: [
    {item: 'Rea', isCheck: false},
    {item: 'React', isCheck: false},
    {item: 'Re', isCheck: false},

  ]
},
{title: 'MyTodo6', itemList: [
  {item: 'Angular', isCheck: true},
  {item: 'Angular', isCheck: true},
  {item: 'Angular', isCheck: true},
  {item: 'Angular', isCheck: true},
  {item: 'Angular', isCheck: true},
]},
];
col = 4;
innerWidth: any;
constructor() {}
@HostListener('window:resize', ['$event'])
onResize(event) {
  this.innerWidth = window.innerWidth;
  // console.log(this.innerWidth);
  if (this.innerWidth < 820) {
    this.col = 2;
  } else {
    this.col = 4;
  }
}
  ngOnInit() {
    this.innerWidth = window.innerWidth;
    // console.log(this.innerWidth);
    if (this.innerWidth < 820) {
    this.col = 2;
  } else {
    this.col = 4;
  }
  }

}
