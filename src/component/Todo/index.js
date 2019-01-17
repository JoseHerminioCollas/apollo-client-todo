import React from 'react'
import { Query } from 'react-apollo'
import GET_TODOS from '../../graphql/get-todos'
import './style.scss'

const Todos = () => (
  <Query query={GET_TODOS}>
    {({ loading, error, data }) => {
      if (loading) return <li>Loading...</li>
      if (error) return <li>Error :(</li>

      return (
        <section className="todos">
          <header>Todos</header>
          <ul>
            {data.todos.map(({ title, description }) => (
              <li key={`${title}new Date()`}>
                {title}
                :
                {description}
              </li>
            ))}
          </ul>
        </section>
      )
    } }
  </Query>
)

export default Todos
