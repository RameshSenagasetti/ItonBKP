import { Component, OnInit } from '@angular/core';
import { ApphttpclientService } from '../apphttpclient.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private ApphttpclientService:ApphttpclientService) { }

  onLogin(){
    this.ApphttpclientService.post('https://jsonplaceholder.typicode.com/posts',{uid:'ID',pwd:'PWD'})
                              .subscribe(data => {
                                // Redirect to Dashbaorad
                              }, error => {

                              }
                            )
  }

  ngOnInit() {
  }

}
