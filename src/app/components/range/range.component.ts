import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-range',
  templateUrl: './range.component.html',
  styleUrls: ['./range.component.scss']
})
export class RangeComponent implements OnInit {

  @Input() minRange: number = 0
  @Input() maxRange: number = 0
  @Input() showRange: boolean =  false
  @Input() title: string = ''
  selectedValue: number = 0
  constructor() { }

  ngOnInit() {
  }

}
