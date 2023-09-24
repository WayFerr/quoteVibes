import { Component, OnInit } from '@angular/core';
import { Pensamento } from '../pensamento';
import { PensamentoService } from '../pensamento.service';

@Component({
  selector: 'app-criar-pensamento',
  templateUrl: './criar-pensamento.component.html',
  styleUrls: ['./criar-pensamento.component.css']
})
export class CriarPensamentoComponent implements OnInit {

  constructor(private service: PensamentoService) { }

  pensamento: Pensamento = {
    id: 1,
    conteudo: 'Aprendendo Angular',
    autor: 'Princesa',
    modelo: 'modelo1'
  }

  criarPensamento(){
    alert("Teste criar pensamento")
  }

  cancelarPensamento(){
    alert("Ação cancelada")
  }

  ngOnInit(): void {
  }

}
