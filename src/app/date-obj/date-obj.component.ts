import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-date-obj',
  templateUrl: './date-obj.component.html',
  styleUrls: ['./date-obj.component.css'],
  template: `<div>
  
  <!--output 'Monday, June 15, 2015'-->
  <p> {{today | date:'fullDate'}}</p>

</div>`
})
export class DateObjComponent implements OnInit {

  today = Date.now();
  fixedTimezone = '2015-06-15T09:03:01+0900';
  
  constructor() { }

  ngOnInit() {
  }

}
