import { Component, OnInit } from '@angular/core';
import { UserIdleService } from 'angular-user-idle';
import { ChRouteServiceService } from '../ch-route-service.service';
@Component({
  selector: 'app-clock-timed',
  templateUrl: './clock-timed.component.html',
  styleUrls: ['./clock-timed.component.scss']
})
export class ClockTimedComponent implements OnInit {

  constructor(
    
    public rout: ChRouteServiceService,

    private userIdle: UserIdleService
  ) { }

  ngOnInit(): void { var hoursContainer = document.querySelector('.hours')
  var minutesContainer = document.querySelector('.minutes')
  var secondsContainer = document.querySelector('.seconds')
  var tickElements = Array.from(document.querySelectorAll('.tick'))

  var last = new Date(0)
  last.setUTCHours(-1)

  var tickState = true

  function updateTime() {
    var now = new Date

    var lastHours = last.getHours().toString()
    var nowHours = now.getHours().toString()
    if (lastHours !== nowHours) {
      updateContainer(hoursContainer, nowHours)
    }

    var lastMinutes = last.getMinutes().toString()
    var nowMinutes = now.getMinutes().toString()
    if (lastMinutes !== nowMinutes) {
      updateContainer(minutesContainer, nowMinutes)
    }

    var lastSeconds = last.getSeconds().toString()
    var nowSeconds = now.getSeconds().toString()
    if (lastSeconds !== nowSeconds) {
      //tick()
      updateContainer(secondsContainer, nowSeconds)
    }

    last = now
  }

  function tick() {
    tickElements.forEach(t => t.classList.toggle('tick-hidden'))
  }

  function updateContainer(container:any, newTime:any) {
    var time = newTime.split('')

    if (time.length === 1) {
      time.unshift('0')
    }


    var first = container.firstElementChild
    if (first.lastElementChild.textContent !== time[0]) {
      updateNumber(first, time[0])
    }

    var last = container.lastElementChild
    if (last.lastElementChild.textContent !== time[1]) {
      updateNumber(last, time[1])
    }
  }

  function updateNumber(element :any, number:any ) {
    //element.lastElementChild.textContent = number
    var second = element.lastElementChild.cloneNode(true)
    second.textContent = number

    element.appendChild(second)
    element.classList.add('move')

    setTimeout(function () {
      element.classList.remove('move')
    }, 990)
    setTimeout(function () {
      element.removeChild(element.firstElementChild)
    }, 990)
  }

  setInterval(updateTime, 100)
  }
  onclick() {


    this.rout.active = 5;

    this.userIdle.resetTimer();
  }


}
