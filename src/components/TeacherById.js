//Source: https://youtu.be/mZvKPtH9Fzo
// Retrieves a teacher by teacher id

import React, {Component, useState} from 'react'
import axios from 'axios'

class TeacherList extends Component {
    
    constructor(props){
        super(props)

        this.state = {
            teacherID: '' 
        }
    }

    componentDidMount() {
        axios.get('http://squigglepark-fullstack-project.us-east-1.elasticbeanstalk.com/api/teachers/:id', {
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
        // const [searchTerm, setSearchTerm] = useState('')
        return (
            <div>
                Find Teacher by Id:
                    {/* <div>
                        <input type="text" 
                        placeholder="Search..." 
                        onChange={(event) => {
                            setSearchTerm(event.target.value)
                        }} />
                        {JSONDATA.filter((val) => {
                            if (searchTerm == '' || val.first.toLowerCase().includes(searchTerm.toLowerCase()) {
                                return val
                            }
                            
                        }).map((val, key) => {
                            return (
                                <div className="user" key={key}>
                                    <p>{val.first}</p>
                                </div>
                            )
                        })}
                    </div> */}
            </div>
        )
    }
}

export default TeacherList