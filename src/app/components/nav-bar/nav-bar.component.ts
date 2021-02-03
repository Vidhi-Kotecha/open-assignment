import { Component, HostBinding, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  @HostBinding('class.sticky') applysticky: boolean = false;
  constructor() { }

  ngOnInit() {
  }

}
