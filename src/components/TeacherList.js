// Retrieves a list of all registered teachers

import React, {Component} from 'react'
import axios from 'axios'

class TeacherList extends Component {
    
    constructor(props){
        super(props)

        this.state = {
            teachers: [],
            errorMsg: '', 
        }
    }

    componentDidMount() {
        axios.get('http://squigglepark-fullstack-project.us-east-1.elasticbeanstalk.com/api/teachers', {
            headers: {
                'Authorization': `token ${'tf8P1869GRk2LVNej6YftLl95XNeWbFF'}`
            }
        })
        .then(response => {
            console.log(response)
            this.setState({teachers: response.data})
        })
        .catch(error => {
            console.log(error)
            this.setState({errorMsg: 'Error retrieving data'})
        })
    }
    
    render() {
        const {teachers, errorMsg} = this.state
        return (
            <div>
                List of registered teachers
                {
                    teachers.length ?
                    teachers.map(teacher => <div key={teacher.schoolCode}>{teacher.firstName, teacher.lastName}</div>) :
                    null
                }
                {errorMsg ? <div>{errorMsg}</div>: null}
            </div>
        )
    }
}

export default TeacherList