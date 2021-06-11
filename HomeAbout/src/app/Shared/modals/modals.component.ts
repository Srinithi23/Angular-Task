import { Component, OnInit,Output,TemplateRef,EventEmitter, Input } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { HomeComponent } from 'src/app/Home/home/home.component';
import { HomeAboutService } from 'src/app/Services/home-about.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl } from '@angular/forms';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-modals',
  templateUrl: './modals.component.html',
  styleUrls: ['./modals.component.css']
})
export class ModalsComponent implements OnInit {
 
  valid:string;
  closeBtnName: string;
  submit:string;
  list: any[] = [];
  post:any[]=[];
  value:'';
  pattern="[a-zA-Z ]*";
public event:EventEmitter<any>=new EventEmitter();
  
  username = new FormControl(); 
  


  constructor( private modalService:BsModalService,private homeaboutservice:HomeAboutService,
    public  bsModalRef:BsModalRef,private router:Router,
    private currentRoute:ActivatedRoute) { 
      
    }
    public openModal(template: TemplateRef<any>) {
      this.bsModalRef = this.modalService.show(template);
    }



  ngOnInit(): void {
    // this.list.push('PROFIT!!!');
    // this.post.push('Hello');

  }

//  validateForm(){
//   this.isValid = true;
//   if(this.homeaboutservice.sendMessage.)
//   this.isValid = false;
//   // else if(this.service.orderItems.length==0)
//   // this.isValid = false;
//   return this.isValid;
// }

  
 sendmsgtoAbout(){
   if(this.post.length!=0 )
   {
    this.event.emit({data:this.post});
    this.bsModalRef.hide();

  // this.homeaboutservice.Homeabout(this.post);
  // this.router.navigate(['/about']);
   }
  //  else{
  //    alert("Input should not be Empty");
  //  }


}

}
