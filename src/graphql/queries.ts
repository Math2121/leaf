import {gql} from 'graphql-request'
export const GET_EDITORA = gql`
query Editoras {
  editoras {
    descricao {
      text
    }
  }
}

`