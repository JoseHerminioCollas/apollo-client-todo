import gql from 'graphql-tag'

const GET_TODOS = gql`
  query GetTodos {
    todos {
      title
      description
    }
  }
`

export default GET_TODOS
