import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-eligibility-calculator',
  templateUrl: './eligibility-calculator.component.html',
  styleUrls: ['./eligibility-calculator.component.scss']
})
export class EligibilityCalculatorComponent implements OnInit {
  calculatorForm!: FormGroup
  constructor() { }

  ngOnInit() {
    this.calculatorForm = new FormGroup({
      tenure: new FormControl('6 Months'),
      loans: new FormControl(true),
      emi: new FormControl(null)
    })
  }

}
