import { Component, OnInit } from '@angular/core';
import { SidenavService } from '../services/sidenav.service';
import { onMainContentChange } from '../layout/animations/animations';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  animations: [ onMainContentChange ]
})
export class DashboardComponent{
  name = 'Angular';
  public onSideNavChange: boolean;

  constructor(private _sidenavService: SidenavService) {
    this._sidenavService.sideNavState$.subscribe( res => {
      console.log(res)
      this.onSideNavChange = res;
    })
  }
}
