import { NgClass, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FluidModule } from 'primeng/fluid';
import { InputTextModule } from 'primeng/inputtext';
import { DatePickerModule } from 'primeng/datepicker';
import { SelectModule } from 'primeng/select';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-forms',
  imports: [NgIf, NgClass, FluidModule, InputTextModule, DatePickerModule, SelectModule, ButtonModule],
  templateUrl: './forms.component.html',
  styleUrl: './forms.component.scss'
})
export class FormsComponent {

    stepsControl: number = 0;

}
