//Source: https://youtu.be/x9UEDRbLhJE

// Registers a teacher
import React, {Component} from 'react'
import axios from 'axios'

export class RegisterTeacher extends Component {
    constructor(props) {
        super(props)

        this.state = {
            firstName: '',
            lastName: '',
            schoolCode: ''
        }
    }

    changeHandler = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }

    submitHandler = e => {
        const token = 'tf8P1869GRk2LVNej6YftLl95XNeWbFF'
        e.preventDefault()
        console.log(this.state)
        axios.post('http://squigglepark-fullstack-project.us-east-1.elasticbeanstalk.com/api/teachers', this.state, {
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
        const{firstName,lastName, schoolCode} = this.state
        return (
            <div>
                Register Teacher
                <form onSubmit={this.submitHandler}>
                    <div>
                        <input type="text" name="firstName" value={firstName} onChange={this.changeHandler} />
                    </div>
                    <div>
                        <input type="text" name="lastName" value={lastName} onChange={this.changeHandler} />
                    </div>
                    <div>
                        <input type="text" name="schoolCode" value={schoolCode} onChange={this.changeHandler} />
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}

export default RegisterTeacher