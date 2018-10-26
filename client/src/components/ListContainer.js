import React, { Component } from 'react';
import axios from 'axios';

import removeButton from '../images/remove.png';
import priorityButton from '../images/priority.png';

class ListContainer extends Component {

    state = {
        inbox: [],
        priority: []
	}
    
	componentDidMount = () => {
		axios.get('/api/tasks/inbox')
            .then(response => {
                const me = this;
            
                me.setState({
                    inbox: response.data
                });
            })
            .catch(error => {
                console.log(error);
            });

        axios.get('/api/tasks/priority')
            .then(response => {
                const me = this;
            
                me.setState({
                    priority: response.data
                });
            })
            .catch(error => {
                console.log(error);
            });
    }
    
    handleClickRemove = (id) => {
        axios.delete(`/api/tasks/${id}`)
            .then(() => {
                axios.get('/api/tasks/inbox')
                .then(response => {
                    const me = this;
            
                    me.setState({
                        inbox: response.data
                    });
                })
                .catch(error => {
                    console.log(error);
                });

                axios.get('/api/tasks/priority')
                .then(response => {
                    const me = this;
            
                    me.setState({
                        priority: response.data
                    });
                })
                .catch(error => {
                    console.log(error);
                });
            })
            .catch(error => { 
                console.log(error);
            });
    }

    handleClickPriority = (id) => {
        axios.put(`/api/tasks/${id}`)
            .then(() => {
                axios.get('/api/tasks/inbox')
                .then(response => {
                    const me = this;
            
                    me.setState({
                        inbox: response.data
                    });
                })
                .catch(error => {
                    console.log(error);
                });

                axios.get('/api/tasks/priority')
                .then(response => {
                    const me = this;
            
                    me.setState({
                        priority: response.data
                    });
                })
                .catch(error => {
                    console.log(error);
                });
            })
            .catch(error => { 
                console.log(error);
            });
    }

    render() {
		return (
			<main>
				<section>
                    <h2>Priorities</h2>
                    <ul>
                        {
                            this.state.priority.map((tasks, index) => (
                                <li key={index} id={tasks._id}>
                                    <p>{tasks.name}</p>
                                    
                                    <div className="buttons">
                                        <button onClick={this.handleClickRemove.bind(this, tasks._id)}>
                                            <img src={removeButton} alt="delete button"     />
                                        </button>

                                        <button onClick={this.handleClickPriority.bind(this, tasks._id)}>
                                            <img src={priorityButton} alt="priority button" />
                                        </button>
                                    </div>
                                </li>
                            ))
                        }
                    </ul>
				</section>

				<section>
			    	<h2>Inbox</h2>
					<ul>
                        {
                            this.state.inbox.map((tasks, index) => (
                                <li key={index} id={tasks._id}>
                                    <p>{tasks.name}</p>
                                    
                                    <div className="buttons">
                                        <button onClick={this.handleClickRemove.bind(this, tasks._id)}>
                                            <img src={removeButton} alt="delete button"     />
                                        </button>

                                        <button onClick={this.handleClickPriority.bind(this, tasks._id)}>
                                            <img src={priorityButton} alt="priority button" />
                                        </button>
                                    </div>
                                </li>
                            ))
                        }
                    </ul>
				</section>
			</main>
		);
	}
}

export default ListContainer;
