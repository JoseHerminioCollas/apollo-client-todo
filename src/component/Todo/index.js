
import React from 'react'
import { Query } from 'react-apollo'
// import gql from 'graphql-tag'
import GET_TODOS from '../../graphql/get-todos'

const Todos = () => (
  <Query
    query={GET_TODOS}
  >
    {({ loading, error, data }) => {
      if (loading) return <p>Loading...</p>
      if (error) return <p>Error :(</p>
      // console.log(data)
      return data.todos.map(({ title }) => (
        <div key={`${title}new Date()`}>
          <p>
            t :
            {title}
            :
            {' '}
          </p>
        </div>
      ))
    } }
  </Query>
)

export default Todos
