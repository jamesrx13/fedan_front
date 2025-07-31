import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { BadgeModule } from 'primeng/badge';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { ButtonModule } from 'primeng/button';
import { DatePickerModule } from 'primeng/datepicker';
import { DialogModule } from 'primeng/dialog';
import { FloatLabelModule } from 'primeng/floatlabel';
import { InputTextModule } from 'primeng/inputtext';
import { SelectModule } from 'primeng/select';
import { TableModule } from 'primeng/table';

@Component({
  selector: 'app-users',
  imports: [
    BreadcrumbModule,
    ButtonModule,
    TableModule,
    DialogModule,
    InputTextModule,
    FloatLabelModule,
    DatePickerModule,
    BadgeModule,
    SelectModule,
  ],
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss'
})
export class UsersComponent {

  items: MenuItem[] | undefined;

  home: MenuItem | undefined;

  visible: boolean = false;

  modalHeader: string = 'Nuevo Usuario';

  roles: string[] = [
    'Admin',
    'User'
  ]

  ngOnInit() {
    this.home = { icon: 'pi pi-home', routerLink: '/dashboard' };
    this.items = [{ label: 'Usuarios' }];
  }

  selectModalMode(edit: boolean = false) {
    if (edit) {
      this.modalHeader = 'Editar Usuario';
      // Cargar el modelo
    } else {
      this.modalHeader = 'Nuevo Usuario';
      // Limpiar el modelo
    }
    this.visible = true;
  }

}
