import { Component, OnInit } from '@angular/core';
import { Team } from 'src/app/teamModel/team.model';
import {UsersService} from '../../services/users.service'

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent implements OnInit {
 
  data: Team[] = []

  constructor(private usersService: UsersService) {
    

    
   }

  ngOnInit(): void {
    this.usersService.getData().subscribe((data) => {
      console.log(data)

      this.data = data
      console.log(this.data)

      for(let i = 0 ; i < this.data.length ; i++) {
    
        let name = document.getElementsByClassName("member-info").item(i);
        name!.getElementsByTagName('h4').item(0)!.textContent = data[i].info.name
        name!.getElementsByTagName('span').item(0)!.textContent = data[i].info.job
        let picture = document.getElementsByClassName("pic").item(i)
        picture!.getElementsByTagName('img').item(0)!.setAttribute("src", data[i].img)
     
      
      }
    })
  }

  

}
