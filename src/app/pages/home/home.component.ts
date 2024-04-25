import { Component, OnInit } from '@angular/core';
import { UserService } from '../../_services/user.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{

    constructor(private userService: UserService){

    }

    ngOnInit(): void {
        this.getGitUser();
    }

    getGitUser(){
        this.userService.getGitUser('facebook').subscribe((response:any) => {
            console.log(response);
        });
    }


}
