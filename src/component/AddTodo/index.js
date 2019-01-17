import React from 'react'
import { Mutation } from 'react-apollo'

import ADD_TODO from '../../graphql/AddTodo'
import GET_TODOS from '../../graphql/get-todos'
import './style.scss'

const AddTodo = () => {
  let titleInput = ''
  let descriptionInput = ''

  return (
    <Mutation
      mutation={ADD_TODO}
      update={(cache, { data: { addTodo } }) => {
        // check to see if the cache exists, TODO why does it not exist in some cases?
        if (cache.data.data.ROOT_QUERY) {
          const { todos } = cache.readQuery({
            query: GET_TODOS,
          })
          // optimistic update, write to cache
          cache.writeQuery({
            query: GET_TODOS,
            data: {
              todos: todos.concat([{
                __typename: 'Todo',
                title: addTodo.title,
                description: addTodo.description,
              }]),
            },
          })
        }
      }}
    >
      {addTodo => (
        <section className="add-todo">
          <header>Add A Todo</header>
          <form>
            <label>
              <span>Title</span>
              <input
                name="title"
                ref={(node) => {
                  titleInput = node
                }}
              />
            </label>
            <label>
              <span>Description</span>
              <input
                name="description"
                ref={(node) => {
                  descriptionInput = node
                }}
              />
            </label>
            <button
              type="submit"
              onClick={(e) => {
                e.preventDefault()
                addTodo({
                  variables: {
                    title: titleInput.value,
                    description: descriptionInput.value,
                  },
                })
                titleInput.value = ''
                descriptionInput.value = ''
              }}
            >
              Add Todo
            </button>
          </form>
        </section>
      )}
    </Mutation>
  )
}

export default AddTodo
