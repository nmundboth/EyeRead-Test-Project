//Source: https://youtu.be/x9UEDRbLhJE

// Removes a teacher by teacher id
import React, {Component} from 'react'
import axios from 'axios'

export class DeleteTeacher extends Component {
    constructor(props) {
        super(props)

        this.state = {
            teacherID: ''
        }
    }

    changeHandler = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }

    submitHandler = e => {
        const token = 'tf8P1869GRk2LVNej6YftLl95XNeWbFF'
        e.preventDefault()
        console.log(this.state)
        axios.delete('http://squigglepark-fullstack-project.us-east-1.elasticbeanstalk.com/api/teachers/:id', this.state, {
            headers: {
                'Authorization': `token ${token}`
            }
        })
        .then(response => {
            console.log(response)
        })
        .catch(error => {
            console.log(error)
        })
    }

    render() {
        const{teacherID} = this.state
        return (
            <div>
                Delete by Teacher ID
                <form onSubmit={this.submitHandler}>
                    <div>
                        <input type="text" name="teacherID" value={teacherID} onChange={this.changeHandler} />
                    </div>
                    <button type="delete">Delete</button>
                </form>
            </div>
        )
    }
}

export default DeleteTeacher