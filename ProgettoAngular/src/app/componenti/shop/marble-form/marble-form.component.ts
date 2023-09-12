import { Component } from '@angular/core';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatRadioModule } from "@angular/material/radio";

@Component({
  selector: 'app-marble-form',
  templateUrl: './marble-form.component.html',
  styleUrls: ['./marble-form.component.scss'],
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, MatSelectModule, MatRadioModule],
})
export class MarbleFormComponent {

}
