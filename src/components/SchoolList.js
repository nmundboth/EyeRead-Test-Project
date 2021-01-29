//Source: https://youtu.be/NEYrSUM4Umw

// Retrieves a list of all available schools
import React, {Component} from 'react'
import axios from 'axios'

class SchoolList extends Component {
    
    constructor(props){
        super(props)

        this.state = {
            schools: [],
            errorMsg: ''
        }
    }

    componentDidMount() {
        axios.get('http://squigglepark-fullstack-project.us-east-1.elasticbeanstalk.com/api/schools')
        .then(response => {
            console.log(response)
            this.setState({schools: response.data})
        })
        .catch(error => {
            console.log(error)
            this.setState({errorMsg: 'Error retrieving data'})
        })
    }
    
    render() {
        const {schools, errorMsg} = this.state
        return (
            <div>
                List of available schools
                {
                    schools.length ?
                    schools.map(school => <div key={school.schoolCode}>{school.name}</div>) :
                    null
                }
                {errorMsg ? <div>{errorMsg}</div>: null}
            </div>
        )
    }
}

export default SchoolList