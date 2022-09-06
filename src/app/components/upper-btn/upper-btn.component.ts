import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-upper-btn',
  templateUrl: './upper-btn.component.html',
  styleUrls: ['./upper-btn.component.scss']
})
export class UpperBtnComponent implements OnInit {
  bool1: boolean | undefined = false
  constructor() {}

  ngOnInit(): void {
  }

  @HostListener('window:scroll',[]) 
  scrollIt() {
    
    this.bool1 = true
   
    if(window.pageYOffset ===0) {
      this.bool1 = false
    }
   
    

    
  }


  upper() {
    if(window.pageYOffset) {
      window.pageYOffset === 0
    }
  }

}
