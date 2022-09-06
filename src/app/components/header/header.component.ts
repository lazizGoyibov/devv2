import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  currentPosition = window.pageYOffset;
  constructor() {  }


  status: boolean | undefined  = true
  status2: boolean | undefined = false
  status3: boolean | undefined = false
  status4: boolean | undefined = false
  status5: boolean | undefined = false
  status6: boolean | undefined = false


  ngOnInit(): void {
  }

  @HostListener('window:scroll',['$event']) // for window scroll events
  scrollIt2(event: any) {
    console.log()

    
  
    if(window.pageYOffset === 0 && window.pageYOffset < 600) {
      this.status6 =false
      this.status =true
      this.status2 = false

    } else if (window.pageYOffset >= 600 && window.pageYOffset < 1400) {
        this.status = false
        this.status2 = true
        this.status3 = false
        } else if (window.pageYOffset >= 1400 && window.pageYOffset < 2200) {
          this.status2 = false
          this.status3 = true
          this.status4 = false
      } else if (window.pageYOffset >= 2200 && window.pageYOffset < 2900) {
        this.status3 = false
        this.status4 = true
        this.status5 = false
    } else if (window.pageYOffset >= 2900 && window.pageYOffset < 3600) {
      this.status4 = false
      this.status5 = true
      this.status6 = false
    } else if (window.pageYOffset >= 3600 && window.pageYOffset > 2900) {
      this.status5 = false
      this.status6 = true
    }
          
    

   


    
  }
  
  

}
