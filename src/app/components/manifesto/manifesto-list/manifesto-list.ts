import { Component, OnInit } from '@angular/core';
import { Manifesto } from '../../../models/manifesto.model';
import { ManifestoServico } from '../../../services/manifesto.service';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { TipoOperacaoPipe } from '../../../pipes/tipo-operacao.pipe';

@Component({
  selector: 'app-manifesto-list',
  imports: [RouterModule,CommonModule,TipoOperacaoPipe],
  templateUrl: './manifesto-list.html',
  styleUrl: './manifesto-list.css',
})
export class ManifestoList implements OnInit {
  manifestos: Manifesto[] = [];

  constructor(private manifestoServico: ManifestoServico) {}

  ngOnInit(): void {
    this.loadManifestos();
  }

  loadManifestos() {
    this.manifestoServico.getAll().subscribe(result => {
      this.manifestos = result;
    });
  }
}