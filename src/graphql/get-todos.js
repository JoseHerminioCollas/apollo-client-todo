import gql from 'graphql-tag'

const GET_TODOS = gql`
  query GetTodos ($first: Int, $offset: Int) {
    todos(first: $first, offset: $offset) {
      title
      description
    }
  }
`

export default GET_TODOS
