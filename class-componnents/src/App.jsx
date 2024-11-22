import "./App.css";
import { Component } from "react";

class MyInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      inputVal: "",
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.handleResubmit = this.handleResubmit.bind(this);
  }

  handleInputChange(e) {
    this.setState((state) => ({ ...state, inputVal: e.target.value }));
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState((state) => ({
      todos: [...state.todos, state.inputVal],
      inputVal: "",
    }));
  }

  handleDelete(e) {
    this.setState((state) => ({
      ...state,
      todos: state.todos.filter((todo) => todo != e.target.id),
    }));
  }

  handleResubmit(e) {
    let parentDiv = e.target.parentElement;
    let newTask = parentDiv.firstChild.value;

    parentDiv.removeChild(parentDiv.firstChild);

    const li = document.createElement("li");
    li.key = newTask;
    li.textContent = newTask;
    parentDiv.insertBefore(li, parentDiv.firstChild);

    parentDiv.removeChild(parentDiv.lastChild);

    const editBtn = document.createElement("button");
    editBtn.textContent = "Edit";
    parentDiv.appendChild(editBtn);
    editBtn.onclick = this.handleEdit;
  }

  handleEdit(e) {
    let parentDiv = e.target.parentElement;
    let oldTask = parentDiv.firstChild.textContent;

    parentDiv.removeChild(parentDiv.firstChild);

    const input = document.createElement("input");
    input.value = oldTask;
    parentDiv.insertBefore(input, parentDiv.firstChild);

    parentDiv.removeChild(parentDiv.lastChild);

    const submitBtn = document.createElement("button");
    submitBtn.textContent = "reSubmit";
    submitBtn.className = "reSubmit";
    parentDiv.appendChild(submitBtn);
    submitBtn.onclick = this.handleResubmit;
  }

  render() {
    return (
      <section>
        <h3>{this.props.name}</h3>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="task-entry">Enter a task: </label>
          <input
            type="text"
            name="task-entry"
            value={this.state.inputVal}
            onChange={this.handleInputChange}
          />
          <button type="submit">Submit</button>
        </form>
        <h4>All the tasks!</h4>
        <ul>
          {this.state.todos.map((todo) => (
            <div className="task">
              <li key={todo}>{todo}</li>
              <button onClick={this.handleDelete} id={todo}>
                Delete
              </button>
              <button onClick={this.handleEdit}>Edit</button>
            </div>
          ))}
        </ul>

        <Count length={this.state.todos.length} />
      </section>
    );
  }
}

class Count extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <h1>{this.props.length}</h1>;
  }
}

export default MyInput;
