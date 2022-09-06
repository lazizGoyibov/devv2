import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import {Subscription} from 'rxjs';
import { ProjectsService } from 'src/app/services/projects.service';
import { Team } from 'src/app/teamModel/team.model';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss']
})
export class WorkComponent implements OnInit {
  
  id: string | undefined
  data: Team[] | undefined
  
  private subscription: Subscription 
  
  constructor(private activatedRoute: ActivatedRoute , private projectsService: ProjectsService ) { 
    this.subscription = activatedRoute.params.subscribe(params=> this.id = params["id"])

  
  }

  ngOnInit(): void {
    this.projectsService.getData().subscribe((item):any=> {
      this.data = item
      console.log(this.id)

      for(let i= 0; i < this.data.length; i++) {
        let name = document.getElementsByClassName("project-wrap").item(0)
        let img = document.getElementsByClassName("ImgTo").item(0)
       
        if(this.data[i]._id === this.id) {
          console.log(this.data[i]._id, "========", this.id)
          name!.getElementsByTagName('a').item(0)!.textContent = this.data[i].title+".uz"
          img!.getElementsByTagName('img').item(0)!.setAttribute('src', this.data[i].img.url)
        }
      
       
      }

     
      
  })
  }

}
