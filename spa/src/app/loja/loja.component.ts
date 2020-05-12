import { Component, OnInit } from '@angular/core';
import { PostagemService } from '../service/postagem.service';
import { Postagem } from '../model/Postagem';

@Component({
  selector: 'app-loja',
  templateUrl: './loja.component.html',
  styleUrls: ['./loja.component.css']
})
export class LojaComponent implements OnInit {

  listaPostagens: Postagem []

  postagem: Postagem = new Postagem

  constructor(private PostagemService: PostagemService) { }

  ngOnInit(){
    this.findallPostagens()
  }

  findallPostagens(){
    this.PostagemService.getAllPostagens().subscribe((resp: Postagem[])=>{
      this.listaPostagens = resp
      
    })

   
  }

  publicar(){
    this.PostagemService.postPostagem(this.postagem).subscribe((resp: Postagem)=>{
      this.postagem = resp
      location.assign('/loja')
    })
  }
}
