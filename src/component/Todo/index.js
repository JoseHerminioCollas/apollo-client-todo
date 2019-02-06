import React from 'react'
import { Query } from 'react-apollo'
import GET_TODOS from '../../graphql/get-todos'
import './style.scss'

const offset = 2

const Todos = () => (
  <Query
    query={GET_TODOS}
    variables={{
      first: 0,
      offset,
    }}
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
            {data.todos.todos.map(({ title, description }) => (
              <article key={`${title}new Date()`}>
                {title}
                :
                {description}
              </article>
            ))}
          </section>
          <article>
            <p>
              Viewing &nbsp;
              {data.todos.todos.length}
              &nbsp;of a total of &nbsp;
              {data.todos.totalCount}
            </p>
          </article>
          {
            (data.todos.todos.length !== data.todos.totalCount)
            && (
              <button
                type="submit"
                onClick={() => {
                  fetchMore({
                    variables: {
                      first: data.todos.todos.length,
                      offset,
                    },
                    updateQuery: (prev, { fetchMoreResult }) => Object.assign({}, prev,
                      {
                        todos: {
                          __typename: 'TodoResult',
                          todos: [...prev.todos.todos, ...fetchMoreResult.todos.todos],
                          totalCount: prev.todos.totalCount,
                        },
                      }),
                  })
                }}
              >
                Get More Todos
              </button>
            )
          }
        </section>
      )
    } }
  </Query>
)

export default Todos
