import gql from 'graphql-tag'

const GET_TODOS = gql`
  query GetTodos ($first: Int, $offset: Int) {
    todos(first: $first, offset: $offset) {
      todos {
        title 
        description
      }
      totalCount
    }
  }
`

export default GET_TODOS
