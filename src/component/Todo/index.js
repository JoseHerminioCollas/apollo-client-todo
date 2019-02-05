import React from 'react'
import { Query } from 'react-apollo'
import GET_TODOS from '../../graphql/get-todos'
import './style.scss'

const offset = 3

const Todos = () => (
  <Query
    query={GET_TODOS}
    fetchPolicy="cache-and-network"
  >
    {({
      loading,
      error,
      data,
      fetchMore,
    }) => {
      if (loading) return <div>Loading...</div>
      if (error) return <div>Error</div>

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
          <button
            type="submit"
            onClick={() => {
              fetchMore({
                variables: {
                  first: data.todos.length,
                  offset,
                },
                updateQuery: (prev, { fetchMoreResult }) => Object.assign({}, prev,
                  { todos: [...prev.todos, ...fetchMoreResult.todos] }),
              })
            }}
          >
            More Todos
          </button>
        </section>
      )
    } }
  </Query>
)

export default Todos
