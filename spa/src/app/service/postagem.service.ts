import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Postagem } from '../model/Postagem';

@Injectable({
  providedIn: 'root'
})
export class PostagemService {

  constructor(private http: HttpClient) { }

    /* CRUD métodos do HttpClient - create(post) = salvar, incluir uma linha no json.
     Read(get) = leitura, pesquisar, pegar no json e trazer pra ca
     Update(put) = editar e atualizar
     Delete(delete) = excluir 
*/


//endPoint = ponto onde eu me conecto com o servidor

//R - read
getAllPostagens(){
  return this.http.get('http://31.220.57.121:9080/produtos')
}

postPostagem(postagem: Postagem){
  return this.http.post('http://31.220.57.121:9080/produtos', postagem)
}
    
putPostagem(postagem: Postagem){
  return this.http.put('http://31.220.57.121:9080/produtos', postagem)
}

getByIdPostagem(id: number){
  return this.http.get(`http://31.220.57.121:9080/produtos/${id}`)
}

deletePostagem(id:number){
  return this.http.delete(`http://31.220.57.121:9080/produtos/${id}`)
}



}
