import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  appVersion = '1.0.0'

  isSideNavOpen = false;
  sideNavMode: string = 'side';

  constructor(private responsive: BreakpointObserver
  ) {
  }

  ngOnInit(): void {
    this.observeScreenSizeChange();
  }

  observeScreenSizeChange() {
    this.responsive.observe([
      Breakpoints.TabletPortrait,
      Breakpoints.TabletLandscape,
      Breakpoints.HandsetPortrait,
      Breakpoints.HandsetLandscape,
      Breakpoints.Medium,
      Breakpoints.Large,
      Breakpoints.XLarge
    ])
      .subscribe(result => {
        // console.log(result)

        this.sideNavMode = 'side';

        const breakpoints = result.breakpoints

        if (breakpoints[Breakpoints.TabletPortrait] || breakpoints[Breakpoints.HandsetPortrait] || breakpoints[Breakpoints.HandsetLandscape]) {

          this.sideNavMode = 'over';

        }
        else if (breakpoints[Breakpoints.TabletLandscape]
          || breakpoints[Breakpoints.Medium]
          || breakpoints[Breakpoints.Large]
          || breakpoints[Breakpoints.XLarge]) {

          this.sideNavMode = 'side';
        }

        // console.log(this.sideNavMode)
        // console.log(this.isSideNavOpen)
      })
  }

  toggleDrawer() {
    this.isSideNavOpen = !this.isSideNavOpen;
  }

  getCurrentYear(): number {
    const currentDate = new Date();
    return currentDate.getFullYear();
  }

  changePassword() {
    console.log('Clicked Change Password')
  }

  logout() {
    console.log('Clicked Logout')
  }
}
