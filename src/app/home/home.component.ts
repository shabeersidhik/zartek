import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { __param } from 'tslib';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
list=[];
restName;
count=0;
counth=0;
countArray=[]
private quantities: number[];
  constructor(private http:HttpClient) {}
   
  ngOnInit(): void {
    this.getDish()
  }
getDish(){
  return this.http.post('https://www.mocky.io/v2/5dfccffc310000efc8d2c1ad',null).subscribe((body)=>{
    this.restName=body[0]['restaurant_name']
    this.list=body[0]['table_menu_list']
    this.list.forEach((item)=>{
      for(let i=0;i<item.category_dishes.length;i++){
        item.category_dishes[i].qty=0
      }
    })
  })
}
countAdd(i,h,c){
  this.list[i].category_dishes[h].qty=c+1
  this.count=this.count+1
}
countDec(i,h,c){
  if(this.count>0){
    this.list[i].category_dishes[h].qty=c-1
    this.count=this.count-1;
  }
}
}
