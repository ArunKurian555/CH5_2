import { Component } from '@angular/core';
import { ChRouteServiceService } from 'src/app/ch-route-service.service';
import { UserIdleService } from 'angular-user-idle';

declare var CrComLib: any;


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(
    public rout: ChRouteServiceService,
    private userIdle: UserIdleService,)
    {}
  title = 'CH5v2';

  activeflag: any;

  activeflag1: any;

  testing: any;
  
  ngOnInit() {

    this.rout.active = 0;
    let self = this;

    setInterval(function () {


      if (self.rout.active == 5 || self.rout.active == 6) {
        self.activeflag = { 'height': '100vh' };

        self.activeflag1 = { 'display': 'none' };
      }

      if (self.rout.active == 3 || self.rout.active == 2) {
        self.activeflag = { 'height': '91vh' };

        self.activeflag1 = { 'display': 'grid' };

      }



    }, 50);
    //Start watching for user inactivity.
    this.userIdle.startWatching();

    // Start watching when user idle is starting.
    this.userIdle.onTimerStart().subscribe(count => console.log(count));

    // Start watch when time is up.
    this.userIdle.onTimeout().subscribe(() =>
      self.rout.active = 6
    );
  }

  onClick(id: number) {
    let self = this;
    this.rout.active = id - 1;

  }


}
