import React, { Component } from 'react'

class TodoList extends Component {

  state = {
    userInput: "",
    items: []
  }

  onChange(event) {
    this.setState({
      userInput: event.target.value,
    })
  }

  addTodo(event) {
    //preventDefault sert à ne pas recharger la page étant donné que nous sommes dans un formulaire
    event.preventDefault()
    if(this.state.userInput !== "") {
      this.setState({
        userInput: "",
        items: [...this.state.items, this.state.userInput]
      })
    }
  }

  deleteTodos(event) {
    event.preventDefault()
    const array = this.state.items
    const index = array.indexOf(event.currentTarget.value)
    array.splice(index, 1)
    this.setState({
      items: array
    })
  }

  renderTodos() {
    return this.state.items.map(item => {
      return(
        <div className="mt2">
          <span>{item}</span>
          <button
            className="ba b--none bg-blue pa1 br2 ml2"
            value={item}
            onClick={this.deleteTodos.bind(this)}>
              <img width="25" src="./images/bin.svg" alt="Corbeille" className="relative "/>
          </button>
        </div>
      )
    })
  }

  render() {
    return (
      <div>
        <h1 className="tc dark-gray">Ma Todo List</h1>
        <form>
          <input
            className="center db tc ba b--moon-gray br3 pv2 shadow-4"
            value={this.state.userInput}
            type="text" placeholder="Renseigner votre tâche"
            onChange={this.onChange.bind(this)}
          />
          <button
            className="center db mt2 ba b--white bw1 pv2 ph3 br4 white bg-blue hover-btn1 transition pointer"
            onClick={this.addTodo.bind(this)}>Ajouter</button>
        </form>
        <div className="tc mt5 dark-gray">
          {this.renderTodos()}
        </div>
      </div>
    )
  }
}

export default TodoList
