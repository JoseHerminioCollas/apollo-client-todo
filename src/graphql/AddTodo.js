import gql from 'graphql-tag'

const ADD_TODO = gql`
  mutation ABC($title: String!, $description: String) {
    addTodo(title: $title, description: $description) {
      title
      description
    }
  }
`

export default ADD_TODO
