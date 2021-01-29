import logo from './logo.svg';
import './App.css';
import SchoolList from './components/SchoolList';
import RegisterTeacher from './components/RegisterTeacher';
import axios from 'axios';
import React, { useState, useCallback } from 'react';
import TeacherList from './components/TeacherList';
import { Route, Link } from "react-router-dom";
import Navbar from './NavBar';
import TeacherById from "./components/TeacherById";
import DeleteTeacher from './components/DeleteTeacher';

// const accessToken = 'tf8P1869GRk2LVNej6YftLl95XNeWbFF'
// const apiUrl = 'http://localhost:3000';

// const authAxios = axios.create({
//   baseUrl: apiUrl,
//   headers: {
//     Authorization: `Bearer ${accessToken}`,
//   },
// });

function App() {
  // const [teachers, setTeachers] = useState([]);
  // const [requestError, setRequestError] = useState();

  // const fetchData = useCallback(async () => {
  //   try {
  //     const result = await authAxios.get(`http://squigglepark-fullstack-project.us-east-1.elasticbeanstalk.com/api/teachers`);
  //     setTeachers(result.data);
  //   } catch (err){
  //     setRequestError(err.message);
  //   }
  // }); 

  return (
    <div className="App">
      <Navbar />
      <Route exact path="/register" component={RegisterTeacher} />
      <Route exact path="/schools" component={SchoolList} />
      <Route exact path="/teachers" component={TeacherList} />
      <Route exact path="/teachers/id" component={TeacherById} />
      <Route exact path="/delete" component={DeleteTeacher} />
      {/* <button onClick={() => fetchData()}>Get Teachers</button>
      {teachers.map(teacher => {
        return <p key={teacher.schoolCode}>{teacher.first, teacher.last}</p>;
      })} */}
      {/* <TeacherList/> */}
      {/* <RegisterTeacher /> */}
      {/*<SchoolList />*/}
    </div>
  );
}

//{requestError && <p className="error">{requestError}</p>}

export default App;
