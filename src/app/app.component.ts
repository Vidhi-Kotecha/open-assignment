import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { ScrollSpyService } from 'ngx-scrollspy';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements AfterViewInit 
{
  title= 'Open Assignment'
  @ViewChild(NavBarComponent, { static: false }) navbar!: NavBarComponent;
  scrollTop!: number

  constructor(private scrollSpyService: ScrollSpyService) {}

  ngAfterViewInit() {
    this.scrollSpyService.getObservable('window').subscribe(() => {
      this.scrollTop = window ? window.pageYOffset : 0;
      this.navbar.applysticky = this.scrollTop > 50 ? true : false;
    });
  }

}
