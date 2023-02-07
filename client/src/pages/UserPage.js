import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom'
import useUser from "../hooks/useUser"


export default function HomePage() {

  const [user, setUser] = useState([]);
  const userID = useParams().id;

  useEffect(() => {
    axios.get(`http://localhost:8080/api/users/${userID}`)
      .then(res => {
        console.log(res.data);
        setUser(res.data);
      });
  }, []);

  return (
    <h1>User Page {userID}</h1>
  )

}