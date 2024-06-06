import { Component, ViewChild } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { ToolbarModule } from 'primeng/toolbar';
import { AvatarModule } from 'primeng/avatar';
import { MenuModule } from 'primeng/menu';
import { ButtonModule } from 'primeng/button'; 
import { Menu } from 'primeng/menu'; 
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  standalone: true,
  imports: [ToolbarModule, AvatarModule, MenuModule, ButtonModule] 
})
export class NavbarComponent {
  items: MenuItem[] | any;

  @ViewChild('menu') menu!: Menu;

  ngOnInit() {
    this.items = [
      {
        items: [
          {
            label: 'Ingresar',
            icon: 'pi pi-sign-in',
            routerLink: ['/login']
          },
          {
            label: 'Registrar',
            icon: 'pi pi-user-plus',
            routerLink: ['/register']
          },
        ],
      },
    ];
  }

  toggleMenu(event: Event): void {
    this.menu.toggle(event);
  }
}
