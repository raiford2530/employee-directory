import React, { useState, useEffect } from "react";
import User from "../../components/User/User";
import SortableHeader from "../../components/SortableHeader/SortableHeader";
import SearchBox from "../../components/SearchBox/SearchBox";
import API from "../../utils/API";

const Home = () => {
  const [userState, setUserState] = useState([]);
  const [sortState, setSortState] = useState("ascending");
  const [showUsers, setShowUserState] = useState([]);

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = () => {
    API.getUsers().then((res) => {
      setUserState(res.data.results.map((user) => { return destructUser(user);}));
      setShowUserState(res.data.results.map((user) => { return destructUser(user);}));
  })
};

  const destructUser = (user) => {
    return {
      name: `${user.name.first} ${user.name.last}`,
      cell: user.cell,
      email: user.email,
      medium: user.picture.medium,
    };
  };

  const sortColumn = (name, sort) => {
    let sorted = userState;
    if (sort === "ascending") {
      sorted = showUsers.sort((item1, item2) => {
        if (item1[name] > item2[name]) return 1;

        if (item1[name] < item2[name]) return -1;

        return 0;
      });
    } else if (sort === "descending") {
      sorted = showUsers.sort((item1, item2) => {
        if (item1[name] > item2[name]) return -1;

        if (item1[name] < item2[name]) return 11;

        return 0;
      });
    }

    setSortState(sort === "ascending" ? "descending" : "ascending");
    setShowUserState(sorted);
  };
 
  const handleSearch = (event) => {
    const val = event.target.value;

    setShowUserState(userState);

    let searchResult = userState.filter(
      (user) =>
        user.name.toLowerCase().includes(val.toLowerCase()) ||
        user.cell.includes(val) ||
        user.email.toLowerCase().includes(val.toLowerCase())
    );
    setShowUserState(searchResult);
  };

  return (
    <div className="container">
      <div className="row">
        <h1 className="text-center pt-5 pb-2">Employee Directory</h1>
      </div>
      <div className="row">
        <SearchBox handleSearch={handleSearch} />
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
            {
              showUsers.map((user, index) => (<User user={user} key={index} /> )) 
            }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Home;
