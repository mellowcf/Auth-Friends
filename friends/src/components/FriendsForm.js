import React, { useState } from "react";

const FriendsForm = props => {
  const [friend, setFriend] = useState({
    name: "",
    age: '',
    email:"",
  });

  const handleChanges = e => {
    setFriend({
      ...friend,
      [e.target.name]: e.target.value
    });
    console.log(e.target.value);
  };

  const submitForm = e => {
    e.preventDefault();
    props.addNewFriend(friend);
  };

  return (
    <form onSubmit={submitForm}>
      <label htmlFor="Name">Name</label>
      <input
        id="name"
        type="text"
        placeholder="Name"
        onChange={handleChanges}
        name="name"
        value={friend.name}
      />
      <label htmlFor="Age">Age</label>
       <input
        id="age"
        type="text"
        placeholder="age"
        onChange={handleChanges}
        name="age"
        value={friend.age}
      />
      <label htmlFor="email">Email</label>
       <input
        id="email"
        type="text"
        placeholder="email"
        onChange={handleChanges}
        name="email"
        value={friend.email}
      />
      <button type="submit">Add Friend</button>
    </form>
  );
};

export default FriendsForm;