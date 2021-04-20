import React, {Component} from 'react'

class TodoList extends Component {
    constructor(){
        super()
        this.state = {
            inputVal:'',
            list: []
        }
        this.submit = this.submit.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }
    // can put js right here
    handleChange(value){
        this.setState({inputVal: value})
        console.log(value)
    }

    submit(){
       this.setState({
           list: [...this.state.list, this.state.inputVal]
       }) 
    }

    render(){
        // can put js right here
        console.log(this.state)
        let mappedTodos = this.state.list.map(todo => {
            return (
                <p>{todo}</p>
            )
        })
        return(
            <div>
                hello Todo list
                <input onChange={(e)=> this.handleChange(e.target.value)}/>
                <span>{this.state.inputVal}</span>
                <button onClick={this.submit}>submit</button>
                <h1>{mappedTodos}</h1>
            </div>
        ) 
    }
};

export default TodoList;