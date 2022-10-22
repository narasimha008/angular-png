import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { Location } from '@angular/common';

@Component({
  selector: 'ivest-navigation',
  templateUrl: './ivest-navigation.component.html',
  styleUrls: ['./ivest-navigation.component.css']
})
export class IvestNavigationComponent implements OnInit {

  items: MenuItem[] = [];

  constructor(private router: Router, private location: Location) {
  }

  ngOnInit() {
    this.items = [
      {
        label: 'Dashboard',
        icon: 'pi pi-fw pi-chart-bar',
        routerLink: ['/dashboard'],
        routerLinkActiveOptions: { exact: true },
        expanded: this.checkActiveState('/dashboard')
      },
      {
        label: 'Vehicle Electronics',
        icon: 'pi pi-fw pi-bookmark',
        routerLinkActiveOptions: { exact: false },
        items: [
          { label: 'Report 1', icon: 'pi pi-fw pi-trash', routerLink: ['/ve/r1'] },
          { label: 'Report 2', icon: 'pi pi-fw pi-refresh', routerLink: ['/ve/r2'] }
        ],
        expanded: this.checkActiveState('/ve')
      },
      {
        label: 'Truck Data',
        icon: 'pi pi-fw pi-money-bill',
        routerLink: ['/td'],
        routerLinkActiveOptions: { exact: true },
        expanded: this.checkActiveState('/td')
      },
      {
        label: 'TPMS Wheel Id',
        icon: 'pi pi-fw pi-cog',
        routerLink: ['/twi'],
        routerLinkActiveOptions: { exact: true },
        expanded: this.checkActiveState('/twi')
      }
    ];
  }

  checkActiveState(givenLink: string) {
    console.log(this.location.path());
    if (this.location.path().indexOf(givenLink) === -1) {
      return false;
    } else {
      return true;
    }
  }

}
