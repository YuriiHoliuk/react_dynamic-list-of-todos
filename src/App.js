import React, { Component } from 'react';
import { TodoList } from "./components/TodoList";

const BASE_URL = 'https://jsonplaceholder.typicode.com';

async function loadData() {
  const [todosResponse, usersResponse] = await Promise.all([
    fetch(`${BASE_URL}/todos`),
    fetch(`${BASE_URL}/users`),
  ]);

  if (
    !todosResponse.ok
    || !usersResponse.ok
    || todosResponse.status >= 400
    || usersResponse.status >= 400
  ) {
    throw new Error('Invalid response');
  }

  const todos = await todosResponse.json();
  const users = await usersResponse.json();

  return todos.map(({ userId, ...rest }) => ({
    ...rest,
    user: users.find(({ id }) => id === userId),
  }));
}

class App extends Component {
  state = {
    todos: [],
    filteredTodos: [],
    isLoading: false,
    isLoaded: false,
    error: null,
  };

  loadData = async() => {
    this.setState({ isLoading: true });

    try {
      const todos = await loadData();

      this.setState({
        todos,
        filteredTodos: todos,
        isLoaded: true,
        isLoading: false,
      });
    } catch (error) {
      this.setState({
        error: error.message,
        isLoading: false,
      });
    }
  };

  render() {
    const {
      filteredTodos,
      isLoaded,
      isLoading,
      error,
    } = this.state;

    if (error) {
      return <p>{error}</p>;
    }

    if (!isLoaded) {
      return (
        <button
          type="button"
          onClick={this.loadData}
          disabled={isLoading}
        >
          {isLoading ? 'Loading...' : 'Load TODOs'}
        </button>
      );
    }

    return (
      <TodoList todos={filteredTodos} />
    );
  }
}

export default App;
