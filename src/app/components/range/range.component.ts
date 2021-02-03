import { Component, Input, OnInit } from '@angular/core'

@Component({
  selector: 'app-range',
  templateUrl: './range.component.html',
  styleUrls: ['./range.component.scss'],
})
export class RangeComponent implements OnInit {

  @Input() minRange = 0
  @Input() maxRange = 0
  @Input() showRange =  false
  @Input() title = ''
  selectedValue = 0
  constructor() { }

  ngOnInit() {
  }

}
