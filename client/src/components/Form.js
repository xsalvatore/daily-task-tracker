import React, { Component } from 'react';
import axios from 'axios';

class Form extends Component {

	state = {
		value: ""
	}

	handleChange = (e) => {
        this.setState({value: e.target.value});
	}
	
	handleSubmit = e => {
        const newTask = {
			name: this.state.value,
		};

		axios.post('/api/tasks', newTask)
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
		.catch(error => {
            console.log(error);
        });
		    
        this.setState({
            value: ""
        });
    }
	
	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<input autoFocus type="text" value={this.state.value} placeholder="Add your task here" onChange={this.handleChange}/>
            </form>
		);
	}
}

export default Form;
