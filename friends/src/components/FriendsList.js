import React from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import FriendsForm from './FriendsForm'

class FriendsList extends React.Component {
  state = {
    friendsList: []
  };

  componentDidMount() {
    this.getData();
  }

  componentDidUpdate(){
      this.getData();
  }

  getData = () => {
    axiosWithAuth()
      .get('/api/friends')
      .then(res => {
        console.log(res.data)
        this.setState({
            friendsList: [...res.data]
        })
      })
      .catch(err => console.log(err));
  };



  render() {
        function addNewFriend(e){
            const newFriend = {
                id: Date.now(),
                name: e.name,
                age: e.age,
                email: e.email
            }
            handleSubmit(newFriend)
        }

        function handleSubmit(values){
        console.log("Submitting...", values)
        axiosWithAuth()
            .post("/api/friends", values)
            .catch(error => console.log(error.response))
            console.log(values)
        }

    return (
        <div>
            <button onClick={() => console.log(this.state.friendsList)}>Test</button>
            <FriendsForm addNewFriend={addNewFriend}/>
            {this.state.friendsList.map(f => (
                <div key={f.id}>
                    <h2>{f.name}</h2>
                    <p>Age: {f.age}</p>
                    <p>Email: {f.email}</p>
                </div>
            )    
            )}

        </div>
              
    );
  }
}

export default FriendsList;
