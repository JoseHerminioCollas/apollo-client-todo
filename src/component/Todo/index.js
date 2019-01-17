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
          <section>
            {data.todos.map(({ title, description }) => (
              <article key={`${title}new Date()`}>
                {title}
                :
                {description}
              </article>
            ))}
          </section>
        </section>
      )
    } }
  </Query>
)

export default Todos
