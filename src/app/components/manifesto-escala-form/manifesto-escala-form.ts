import { ManifestoEscala } from './../../models/manifesto-escala.model';
import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ManifestoEscalaServico } from '../../services/manifesto-escala.service';
import { ManifestoServico } from '../../services/manifesto.service';
import { EscalaServico } from '../../services/escala.service';
import { Escala } from '../../models/escala.model';
import { Manifesto } from '../../models/manifesto.model';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { StatusPipe } from '../../pipes/status.pipe';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-manifesto-escala-form',
  imports: [RouterModule,FormsModule,ReactiveFormsModule ,CommonModule,StatusPipe],
  templateUrl: './manifesto-escala-form.html',
  styleUrl: './manifesto-escala-form.css',
})
export class ManifestoEscalaForm implements OnInit {

  form! : FormGroup;
  escalas : Escala[] = [];
  manifestos : Manifesto[] = [];  

  constructor(private fb: FormBuilder,
             private servico: ManifestoEscalaServico,
            private manifestoServico: ManifestoServico,
          private escalaServico : EscalaServico,
            private toastr: ToastrService) {
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      idManifesto: [null,Validators.required],
      idEscala: [null,Validators.required],  
    });
    this.load();
  }

  load(){
    this.manifestoServico.getAll().subscribe(result => {
      this.manifestos = result;
          console.log('manifesto' ,this.manifestos);
    });
    this.escalaServico.getAll().subscribe(result => {
      this.escalas = result;
      console.log('escalas' ,this.escalas);
    });        
  }
  

  salvar() {
    if (this.form.valid) {
        let obj: ManifestoEscala = this.form.value;
      this.servico.post(obj).subscribe({
        next: (data) => {
          console.log('Vínculo salvo com sucesso', 'Sucesso');      
        },
        error: (err) => {
          this.toastr.error(err.error, 'Erro');         
        }
    });
      
    }
  }
}
