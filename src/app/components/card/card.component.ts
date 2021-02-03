import { Component, Input, OnInit } from '@angular/core'
import { IFeature } from 'src/app/models/landing.model'

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
@Input() featureDetails!: IFeature
  constructor() { }

  ngOnInit(): void {
  }

}
