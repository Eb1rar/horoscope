import React from "react";

const Main = ({ data }) => {
  return (
    <div className="main">
      {data.map(({ id, title, date, desc, image }) => (
        <div key={id} className="container">
          <img src={image} alt="" width="450px" height="330px" />
          <h2 className="sign">{title}</h2>
          <p className="card-over">{desc}</p>
          <h3 className="date">{date}</h3>
        </div>
      ))}
    </div>
  );
};

export default Main;
