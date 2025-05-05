import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-programacao',
  imports: [IonicModule, HttpClientModule, CommonModule, RouterModule],
  templateUrl: './programacao.page.html',
})
export class ProgramacaoPage implements OnInit {
  eventos: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get<any[]>('https://jsonplaceholder.typicode.com/posts?_limit=5')
      .subscribe(data => this.eventos = data);
  }
}

