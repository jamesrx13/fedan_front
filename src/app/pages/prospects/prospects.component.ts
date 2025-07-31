import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { FloatLabelModule } from 'primeng/floatlabel';
import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';
import { DatePickerModule } from 'primeng/datepicker';
import { EditorModule } from 'primeng/editor';
import { BadgeModule } from 'primeng/badge';

@Component({
  selector: 'app-prospects',
  imports: [
    BreadcrumbModule,
    ButtonModule,
    TableModule,
    DialogModule,
    InputTextModule,
    FloatLabelModule,
    DatePickerModule,
    EditorModule,
    BadgeModule,
  ],
  templateUrl: './prospects.component.html',
  styleUrl: './prospects.component.scss'
})

export class ProspectsComponent {

  items: MenuItem[] | undefined;

  home: MenuItem | undefined;

  visible: boolean = false;

  modalHeader: string = 'Nuevo Prospecto';

  ngOnInit() {
    this.home = { icon: 'pi pi-home', routerLink: '/dashboard' };
    this.items = [{ label: 'Prospectos' }];
  }

  selectModalMode(edit: boolean = false) {
    if (edit) {
      this.modalHeader = 'Editar Prospecto';
      // Cargar el modelo
    } else {
      this.modalHeader = 'Nuevo Prospecto';
      // Limpiar el modelo
    }
    this.visible = true;
  }


}
