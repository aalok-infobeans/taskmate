import React from "react";
interface Users {
  id: number;
  name: string;
  email: string;
}
interface State {
  users: Users[];
  loading: boolean;
  error: string | null;
}
class CounterClass extends React.Component<{}, State> {
  constructor(props: {}) {
    super(props);
    this.state = {
      users: [],
      loading: false,
      error: null,
    };
  }
  // Lifecycle: Component did mount
  componentDidMount() {
    this.fetchUsers();
  }

  fetchUsers = async () => {
    this.setState({ loading: true, error: null });
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data: Users[] = await response.json();
      this.setState({ users: data, loading: false });
    } catch (error) {
      this.setState({
        loading: false,
        error: error instanceof Error ? error.message : "An error occurred",
      });
    }
  };
  componentWillUnmount() {
    console.log("Component unmounted");
  }
  handleRefresh = () => {
    this.setState({ loading: true, error: null }, () => {
      this.fetchUsers();
    });
  };

  render() {
    const { users, loading, error } = this.state;
    console.log("Component rendered");

    return (
      <>
        <h1>Counter Class Component</h1>
        <div className="container mt-4">
          <h2>User List</h2>
          <button className="btn btn-primary mb-3" onClick={this.handleRefresh}>
            Refresh
          </button>

          {loading && <p>Loading...</p>}
          {error && <div className="alert alert-danger">{error}</div>}

          {!loading && !error && (
            <ul className="list-group">
              {users.map((user) => (
                <li className="list-group-item" key={user.id}>
                  <strong>{user.name}</strong> – {user.email}
                </li>
              ))}
            </ul>
          )}
        </div>
      </>
    );
  }
}

export default CounterClass;
