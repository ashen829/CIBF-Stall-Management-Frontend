import { Component } from '@angular/core';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Header } from '../header/header';

@Component({
  selector: 'app-home',
  imports: [MatFormFieldModule, MatInputModule, Header],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {

}
