import { Component, OnInit } from '@angular/core'
import { IFeature } from 'src/app/models/landing.model'

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.scss'],
})
export class MainContentComponent implements OnInit {

  featureList1: IFeature[] = [
    {
      imageUrl: 'assets/images/getpaid.png',
      title: 'Quick cash disbursement',
      description: 'Get terms loans that your business needs within 72 hrs',
    },
    {
      imageUrl: 'assets/images/low.png',
      title: 'Low-interest rate',
      description: 'Achieve your financial goals with an amazing interest rate starting at 13% per annum',
    },
    {
      imageUrl: 'assets/images/secure.png',
      title: 'Zero Paperwork',
      description: 'Get started instantly by submitting only your basic details & bank statements',
    },
  ]
  featureList2: IFeature[] = [
    {
      imageUrl: 'assets/images/freelancer.png',
      title: 'Ace your business finances',
      description: 'Manage banking, accounting & everything in between, on one platform',
    },
    {
      imageUrl: 'assets/images/covid.png',
      title: 'Loans to fight COVID-19',
      description: 'Zero EMI for first 3 months on Back-to-Business loans of upto 1 lakh',
    },
  ]
  constructor() { }

  ngOnInit() {
  }

}
