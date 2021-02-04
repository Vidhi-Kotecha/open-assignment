import { Component, Input, OnInit } from '@angular/core'

@Component({
  selector: 'app-custom-btn',
  templateUrl: './custom-btn.component.html',
  styleUrls: ['./custom-btn.component.scss'],
})
export class CustomBtnComponent implements OnInit {
  @Input() btnText: string = ''
  @Input() btnStyle: { [key:string]: string } = {}
  constructor() { }

  ngOnInit() {
  }

}
