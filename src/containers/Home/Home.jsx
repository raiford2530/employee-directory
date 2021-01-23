import React, { useState, useEffect } from "react";
import User from "../../components/User/User";
import axios from "axios";

const Home = () => {
  const [userState, setUserState] = useState({ users: [] });

  useEffect(() => {
    axios.get("https://randomuser.me/api/?results=10&nat=us").then((res) => {
      console.log(res.data);
      setUserState({ users: res.data.results });
    });
  }, []);

  return (
    <div className="container">
      <div className="row">
        <h1 className="text-center py-5">Employee Directory</h1>
      </div>
      <div className="row">
        <table className="table table-striped">
            <thead>
            <tr>
                <th></th>
                <th>Name</th>
                <th>Phone Number</th>
                <th>Email</th>
            </tr>
            </thead>
            <tbody>
            {
                userState.users.map((user, index) => <User user={user} key={index}/>)
            }
            </tbody>
        </table>
      </div>
    </div>
  );
};

export default Home;
