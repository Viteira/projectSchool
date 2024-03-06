import { Component, OnInit, ViewChild, inject } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';
import { MatSidenav } from '@angular/material/sidenav';
import { MatToolbar } from '@angular/material/toolbar';
import { filter, fromEvent, map } from 'rxjs';
import { MenuItem } from './shared/models/menuItem';
import { menuItems } from './shared/models/menu';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';

export const SCROLL_CONTAINER = 'mat-sidenav-content ';
export const TEXT_LIMIT = 63;
export const SHADOW_LIMIT = 100;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  @ViewChild(MatSidenav) sidenav!: MatSidenav;
  @ViewChild(MatToolbar) tollbar!: MatToolbar;
  public popText = false;
  public applyShadow = false;
  public itemsMenu: MenuItem[] = menuItems;
  public menuName= '';
  private breakpointObserver = inject(BreakpointObserver);
  private route = inject(Router);
  private activatedRout = inject(ActivatedRoute)


  ngOnInit(): void {
    const content = document.getElementsByClassName(SCROLL_CONTAINER)[0];

    fromEvent(content, 'scroll')
    .pipe(map(() => content.scrollTop))
    .subscribe((value: number) => this.determineHeader(value));

    this.route.events.pipe(
      filter((event => event instanceof NavigationEnd)),
      map(event => event as NavigationEnd)
    ).subscribe(()=>{
      this.menuName = this.activatedRout.firstChild?.snapshot.routeConfig?.path ?? ''
    });
  }

  determineHeader(scrollTop: number){
    this.popText = scrollTop >= TEXT_LIMIT;
    this.applyShadow = scrollTop >= SHADOW_LIMIT;
  }

  ngAfterContentInit(): void{
    this.breakpointObserver.observe(['(max-width: 800px)']).subscribe({
      next: (res) => {
        if(res.matches){
          this.sidenav.mode= 'over';
          this.sidenav.close();
        } else{
          this.sidenav.mode= 'side';
        }
      }
    });
  }
}
;
