import React, { Component } from 'react';
import { ApolloProvider, Query, Mutation } from "react-apollo";
import ApolloClient from "apollo-boost";
import gql from "graphql-tag";

const ADD_TODO = gql`
  mutation ABC($z: String!) {
    b(z: $z) 
  }
`;
const GET_TODOS = gql`
  query GetTodos {
    todos {
      title 
      description
    }
  }
`;
const AddTodo = () => {
  let input;

  return (
    <Mutation
      mutation={ADD_TODO}
      update={(cache, { data: { b }}) => {
        console.log('arg', b)
        const { todos } = cache.readQuery({ query: GET_TODOS });
        cache.writeQuery({
          query: GET_TODOS,
          data: { todos: todos.concat([{__typename: 'Todo', title: b, author: "abvc"}]) },
        });

      } }
      >
      {(b, { data }) => (
        <div>
          <form
            onSubmit={e => {
              e.preventDefault();
              b({ variables: { z: input.value } });
              input.value = "";
            } }
            >
            <input
              ref={node => {
                input = node;
              } }
              />
            <button type="submit">Add Todo</button>
          </form>
        </div>
      )}
    </Mutation>
  );
};
const Books = () => (
  <Query
    query={GET_TODOS}
    >
    {({ loading, error, data }) => {
      if (loading) return <p>Loading...</p>;
      if (error) return <p>Error :(</p>;
console.log(data)
      return data.todos.map(({ title }) => (
        <div key={title + `new Date()`}>
          <p>t : {title}: </p>
        </div>
      ));
    } }
  </Query>
);
const uri = "http://goatstone.com:4000/graphql"
const client = new ApolloClient({
  uri
});
client
  .query({
    query: gql`
      {
        todos { title }
      }
    `
  })
  .then(result => console.log('xx', result));

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <div className="App">
          <header className="App-header">
            <AddTodo />
            <Books />
          </header>
        </div>
      </ApolloProvider>
    );
  }
}

export default App;
