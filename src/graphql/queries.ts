import {gql} from 'graphql-request'


export const GET_AUTORES = gql`
query Autores {
  autor {
    nome {
      text
    }
    imagem {
      url
    }
    nomeAutor
  }
}


`

export const GET_LIVROS = gql`
query Autores($slug: String!) {
  autor(where: {nomeAutor:$slug}) {
    nome {
      text
    }
    imagem {
      url
    }
    nomeAutor
    livros {
      url
    }
    biografia {
      text
    }
  }
}


`