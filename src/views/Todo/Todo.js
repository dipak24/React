import React, { Component } from 'react';

class TodoApp extends Component {
    
    //idb free api
    constructor() {
        super();

        this.state = {
            ToDo: '',
            ToDos : [],
        }
    }

    render() {
        return (
            <div>
                <section className="fromWrapper">
                    <input />
                    <button>Add</button>
                </section>
                <section>
                    <ul>
                        <li>Laxman </li>
                        <li>Laxman </li>
                        <li>Laxman </li>
                        <li>Laxman </li>
                    </ul>
                </section>
            </div>
        )
    }


    //calling a function 
    


}

export default TodoApp