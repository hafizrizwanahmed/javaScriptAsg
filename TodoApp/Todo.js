import React from 'react';


class Todo extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            item: '',
            items: []

        };
        // this.changeTask = this.changeTask.bind(this)
    }
    
    changeTask = (event) => {
        var getTask = event.target.value;
        // console.log(getTask);
        this.setState({item: getTask });
        // console.log(this.state);
    }

    addTasks = (event) => {

        this.setState({item: event.target.value });
        const addTasksArr = this.state.items;

        // console.log('before push: ', addTasksArr)
        addTasksArr.push(this.state.item)
        // console.log('after push: ', addTasksArr)
        this.setState({items: addTasksArr});
        this.state.item = '';
        document.getElementById('inputVal').value = '';

    }

    deleteTask = (i) => {
            var taskArr = this.state.items;

            taskArr.splice(i, 1);
            this.setState({items: taskArr});
    } 
    editTask = (i) => {
        
        var taskArr = this.state.items;
        taskArr[i] = (prompt('Input New Value  '))
        this.setState({items: taskArr});
} 

    render(){
        return(
            <div>
            <div className="header">
                <h2>Todo App</h2>
            </div>
            <div className="body">
                <ul>
                { this.state.items.map((e, i) => 
                <li key={i}>{e} 
                    <button onClick={() => this.deleteTask(i)} >X</button> | 
                    <button onClick={() => this.editTask(i)} >Edit</button> 
                </li>) }
                </ul>    
            </div>
            <div className="footer">
            <input type="text" onChange={this.changeTask} placeholder="Enter Task" id="inputVal" />
              <button name="add" onClick={this.addTasks}>ADD</button>
                
            </div>
            </div>
        );
    };
}

export default Todo;