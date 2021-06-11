import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { ModalsComponent } from 'src/app/Shared/modals/modals.component';
import { from } from 'rxjs';
import { HomeAboutService } from 'src/app/Services/home-about.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  @Output() newItemEvent = new EventEmitter<string>();
  public event: EventEmitter<any> = new EventEmitter();


  bsModalRef:BsModalRef;
    post:any[]=[];
  submit:"Hello";
item:any[]=[];
itemList = ["Book","Pen"];


  constructor(private modalService:BsModalService,private homeaboutservice:HomeAboutService) { }
  person:any={}


  openModalWithComponent() {
    const initialState = {
      list: [
        'Open a modal with component',
        'Pass your data',
        'Do something else',
        '...'
      ],
      post:[],  
    };
     this.bsModalRef = this.modalService.show(ModalsComponent, {initialState});
    this.bsModalRef.content.closeBtnName = 'Close';
    this.bsModalRef.content.submit='submit';
    
this.bsModalRef.content.event.subscribe(message => {
  console.log(message);
   this.homeaboutservice.sendMessage.next(message.data);


})

  }


  ngOnInit(): void {
  }
}
