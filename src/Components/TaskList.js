import React from 'react'

class TaskList extends React.Component {
    showTask(task) {
        if (task.pending) {
            return <span><input type="checkbox" /> {task.title}</span>
        } else {
            return <s><input type="checkbox" onChange={()=>{}} checked="{true}?"/> {task.title}</s>
        }
    }
    render() {
        return (
            <div>
                <h4>Click on the Task to mark as Done</h4>
                <ul>
                    {
                        this.props.taskList.map(function (task, index) {
                            return <li onClick={() => this.props.markAsDone(index)}>
                                {this.showTask(task)}
                            </li>
                        }.bind(this))
                    }
                </ul>
            </div>
        )
    }
}

export default TaskList;