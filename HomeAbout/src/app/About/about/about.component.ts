import { Component, Input, OnInit,Output,TemplateRef,EventEmitter } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { HomeAboutService } from 'src/app/Services/home-about.service';
import { ModalsComponent } from 'src/app/Shared/modals/modals.component';
import { PopoverModule } from 'ngx-bootstrap/popover';
import { PageChangedEvent } from 'ngx-bootstrap/pagination';





@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
 @Input() childPosts:any[]=[];
 message:any[]=[];
 @Input() fromhome:string;
 @Input() post:string;
 @Input() item:string;
 items = ['item1', 'item2', 'item3', 'item4'];
 public popover:PageChangedEvent; 
 popoverCloseOnClickOutside:PopoverModule;

 public bsModalRef: BsModalRef;
 Messg:any;



  constructor(private modalService:BsModalService,public homabtservice:HomeAboutService) {
   }

  ngOnInit(): void {
this.homabtservice.sendMessage.subscribe(message => {
  console.log(message);
   this.Messg=message;


})

}
openedit(){
  this.bsModalRef = this.modalService.show(ModalsComponent);
    this.bsModalRef.content.closeBtnName = 'Close';
    this.bsModalRef.content.submit='submit';
    

}

}
