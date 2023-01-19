/*
- classe de post
                                                            * categoria/tag
                                                            * autor
    * título
                                                            * conteúdo
                                                            * imagem do post

- database de posts 
- function buscar-post --> preencher com options com todas as opções possíveis
*/
const postDataBase = []

class Post {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }
}

const objetoPost1 = new Post("midnight", "shok");
const objetoPost2 = new Post("carrie", "king");
const objetoPost3 = new Post("and then there were none", "christie");
postDataBase.push(objetoPost1, objetoPost2, objetoPost3);


function fillOptionsQuery() {
  for (let i = 0; i < postDataBase.length; i++) {
    document.querySelector('#search-options').innerHTML += `
    <option> ${postDataBase[i].title} </option>`
  }
}

fillOptionsQuery();