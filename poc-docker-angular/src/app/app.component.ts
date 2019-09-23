import {Component, OnInit} from '@angular/core';
import {HttpRequestService} from './http-request.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'poc-docker-angular';
  url = 'http://localhost:8080/api/person';

  public data: any;

  constructor(private api: HttpRequestService) {
  }

  ngOnInit() {
    this.api
      .getPerson(this.url)
      .subscribe(
        data => {
          console.log(data);
          this.data = data;
        },
        err => {
          console.log(err);
        }
      );
  }

}
