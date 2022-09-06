import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Team } from 'src/app/teamModel/team.model';
import {ProjectsService} from '../../services/projects.service'

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {
  dataId: [] | any 
  val: string | undefined
  exbool: boolean | undefined
  numcop: number  = 0

  @ViewChild("all", {static:false}) all: ElementRef | undefined
  @ViewChild("mobile", {static:false}) mobile: ElementRef | undefined
  @ViewChild("web", {static:false}) web: ElementRef | undefined
  bool: boolean = true
  bool1: boolean = false
  bool2: boolean = false

  data: Team[] = []
  constructor(private projectsService: ProjectsService) {  }

  ngOnInit(): void {

    this.projectsService.getData().subscribe((item):any=> {

        this.data = item
        console.log(this.data)

        for(let i= 0; i < this.data.length; i++) {
          let name = document.getElementsByClassName("portfolio-info").item(i)
          let img = document.getElementsByClassName("img-fluids").item(i)
          img!.setAttribute("src", this.data[i].img.url)
          name!.getElementsByTagName('h4').item(0)!.textContent = this.data[i].title
          name!.getElementsByTagName('p').item(0)!.textContent = this.data[i].description



          this.dataId?.push(this.data[i])

        }

       
        
    })

  }


  setActive() {
    
    this.val = this.all?.nativeElement.textContent
    if(this.bool1) {
      this.bool1 = !this.bool1
      this.bool = !this.bool
      
     }else if(this.bool2){
      this.bool2 = !this.bool2
      this.bool = !this.bool
     } else {
      this.bool = !this.bool
     }
    
    
  }

  setActive2() {
    
    this.val = this.mobile?.nativeElement.textContent
   if(this.bool) {
    this.bool = !this.bool
    this.bool1 = !this.bool1
   } else if(this.bool2) {
    this.bool2 = !this.bool2
    this.bool1 = !this.bool1
   } else {
    this.bool1 = !this.bool1
   }
    
    
    
  }


  setActive3() {
    
    this.val = this.web?.nativeElement.textContent
    if(this.bool1) {
      this.bool1 = !this.bool1
      this.bool2 = !this.bool2
     } else if(this.bool) {
      this.bool = !this.bool
      this.bool2 = !this.bool2
     } else {
      this.bool2 = !this.bool2
     }
    console.log(this.bool)
    
    
    
  }


  scaleb(num: number) {
    

    this.numcop = num
  let blWr = document.getElementById('blWrap')
    
     
  let wrap = document.getElementsByClassName('portfolio-item').item(num);
  console.log(document.getElementsByClassName('portfolio-item'))
  let wrap2 =  wrap?.getElementsByTagName('div').item(0);
  let img = wrap2?.getElementsByTagName('img').item(0);
  let texts = wrap2?.getElementsByTagName('div').item(0);
  console.log(img)
   img!.classList.add('active')
   wrap!.classList.add('active');
   blWr!.style.display = 'flex';
   wrap2!.style.overflow = 'visible';
   texts!.style.display = 'none';

    
  
   
    
  }


  close (num: any) {
    let wrap = document.getElementsByClassName('portfolio-item').item(num);
     let wrap2 =  wrap?.getElementsByTagName('div').item(0);
     let img = wrap2?.getElementsByTagName('img').item(0);
     let texts = wrap2?.getElementsByTagName('div').item(0);
    let blWr = document.getElementById("blWrap")
    
    wrap!.classList.remove('active')
    img!.classList.remove('active')
    blWr!.style.display ='none'
    texts!.style.display = 'block'
    wrap2!.style.overflow = 'hidden'
  }

}
