import React from 'react';
import Header from './Header';
import TaskList from './TaskList';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      tasks: [],
      newTask: {
        title: "",
        pending: true
      },
    }
    this.change = this.change.bind(this);
    this.markAsDone = this.markAsDone.bind(this)
  }
  addTask() {
    let tasks = this.state.tasks;
    tasks.push(this.state.newTask);
    this.setState({ 'tasks': tasks });
    this.state.newTask = {
      title: "",
      pending: true
    }
  }
  reset() {
    this.setState({ tasks: [] })
  }
  change(e) {
    let tasks = this.state.tasks;
    let newTask = e.target.value;
    this.setState({
      'tasks': tasks,
      'newTask': { title: newTask, pending: true }
    })
  }
  markAsDone(index) {
    let taskList = this.state.tasks
    taskList[index].pending = !taskList[index].pending
    this.setState({
      tasks: taskList
    })
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Header headerContent="Tasks" />
          <input value={this.state.newTask.title} onChange={this.change} />
          <input type="button" onClick={() => this.addTask()} value="Add Task" />
          <TaskList markAsDone={this.markAsDone} taskList={this.state.tasks} />
        </header>
      </div>
    );
  }
}

export default App;
