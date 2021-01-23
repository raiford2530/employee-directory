import React, { useState, useEffect } from "react";
import User from "../../components/User/User";
import SortableHeader from "../../components/SortableHeader/SortableHeader";
import axios from "axios";

const Home = () => {
  const [userState, setUserState] = useState({ users: [] });
  const [sortState, setSortState] = useState("ascending");

  useEffect(() => {
    axios.get("https://randomuser.me/api/?results=10&nat=us").then((res) => {
      setUserState({
        users: res.data.results.map((user) => {
          return {
            name: `${user.name.first} ${user.name.last}`,
            last: user.name.last,
            cell: user.cell,
            email: user.email,
            medium: user.picture.medium,
          };
        }),
      });
    });
  }, []);

  const sortColumn = (name, sort) => {
    let sorted = userState.users;
    if (sort === "ascending") {
      sorted = userState.users.sort((item1, item2) => {
        if (item1[name] > item2[name]) return 1;

        if (item1[name] < item2[name]) return -1;

        return 0;
      });
    } else if (sort === "descending") {
      sorted = userState.users.sort((item1, item2) => {
        if (item1[name] > item2[name]) return -1;

        if (item1[name] < item2[name]) return 11;

        return 0;
      });
    }

    setSortState(sort === "ascending" ? "descending" : "ascending");
    setUserState({ users: sorted });
  };

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
              <SortableHeader
                name="Name"
                onClick={sortColumn}
                sort={sortState}
              />
              <SortableHeader
                name="Cell"
                onClick={sortColumn}
                sort={sortState}
              />
              <SortableHeader
                name="Email"
                onClick={sortColumn}
                sort={sortState}
              />
            </tr>
          </thead>
          <tbody>
            {userState.users.map((user, index) => (
              <User user={user} key={index} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Home;
