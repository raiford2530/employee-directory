import React, { useState } from "react";
import User from '../../components/User/User'

const Home = (props) => {
  return (
    <div className="container">
      <div className="row">
        <h1 className="text-center py-5">Employee Directory</h1>
      </div>
      <User />
    </div>
  );
};

export default Home;
