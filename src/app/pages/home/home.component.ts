import { Component } from '@angular/core';
import { UserService } from '../../_services/user.service';
import { UserGit } from '../../_models/userGit';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from 'ngx-spinner';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
    user: UserGit | undefined;
    username: string = '';
    constructor(
        private userService: UserService,
        private toastr: ToastrService,
        private spinner: NgxSpinnerService,
    )   {}


        getGitUser() {
            if (this.username.length == 0) {
                this.toastr.error('O campo username é obrigatório');
                return;
            }

            this.spinner.show();

            this.userService.getGitUser(this.username).subscribe(
                (response: UserGit) => {
                this.user = response;
                this.spinner.hide();
            },
            (error) => {
                if (error.error.message == 'Not Found') {
                   this.toastr.error('Usuário não encontrado.');
                }
                // this.toastr.error(error.error.message);
                this.spinner.hide();
            }
        );
    }


}
