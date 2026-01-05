import { Component, OnInit } from '@angular/core';
import { Escala } from '../../../models/escala.model';
import { EscalaServico } from '../../../services/escala.service';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { StatusPipe } from '../../../pipes/status.pipe';

@Component({
  selector: 'app-escala-list',
  imports: [RouterModule,CommonModule,StatusPipe],
  templateUrl: './escala-list.html',
  styleUrl: './escala-list.css',
})
export class EscalaList implements OnInit {
  escalas: Escala[] = [];

  constructor(private escalaServico: EscalaServico) {}

  ngOnInit(): void {
    this.loadEscalas();
  }

  loadEscalas() {
    this.escalaServico.getAll().subscribe(result => {
      this.escalas = result;
    });
  }



}