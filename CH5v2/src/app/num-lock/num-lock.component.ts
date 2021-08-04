import { Component, OnInit } from '@angular/core';
import { ChRouteServiceService } from '../ch-route-service.service';

declare var CrComLib: any;
@Component({
  selector: 'app-num-lock',
  templateUrl: './num-lock.component.html',
  styleUrls: ['./num-lock.component.scss']
})
export class NumLockComponent implements OnInit {

  constructor(public rout: ChRouteServiceService) { }

  
  ngOnInit(): void {
    let self = this;


    


    const sig2SubKey = CrComLib.subscribeState('b', 'Pinpad.User', function (value :any) {
      if(value)
      self.rout.active = 2;
    });

    const sig3SubKey = CrComLib.subscribeState('b', 'Pinpad.Admin', function (value :any) {
      if(value)
      self.rout.active = 3;
    });


  }


  number = ["1",2,3,4,5,6,7,8,9,0];
}
