import React from "react";

function SideBar() {
  return (
    <div className="sidebar">
      <h1>Is your pet bored?!</h1>
      <h2>
        Do they chew the furniture? Or your favorite shoes? Even worse, do
        they💩in inappropriate places??
      </h2>
      <h2>
        Your bestie might need a PetDate. Luckily for you, you've come to the
        right place!
      </h2>
      <div>
        <button className="btn">Log In / Sign Up</button>
        <button className="btn">Add New Pet</button>
      </div>
    </div>
  );
}

export default SideBar;
