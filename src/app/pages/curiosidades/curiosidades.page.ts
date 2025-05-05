import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-curiosidades',
  imports: [IonicModule, RouterModule, CommonModule],
  templateUrl: './curiosidades.page.html',
})
export class CuriosidadesPage {}

