import gql from 'graphql-tag'

const ADD_TODO = gql`
  mutation ABC($z: String!) {
    b(z: $z)
  }
`

export default ADD_TODO
