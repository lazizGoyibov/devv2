import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss']
})
export class TopbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @HostListener('window:scroll',[]) // for window scroll events
  scrollIt() {
    let head = document.getElementById('topBar')

    
  
    if(window.pageYOffset === 0) {
      head!.style.display = 'flex'

    } else if (window.pageYOffset >= 0) {
          head!.style.display = 'none' 
    }
          
    

   


    
  }

}
