import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const Room = () => {
  const { roomCode } = useParams();
  const [votesToSkip, setVotesToSkip] = useState(2);
  const [guestCanPause, setGuestCanPause] = useState(false);
  const [isHost, setIsHost] = useState(false);

  useEffect(() => {
    const getRoomDetails = async () => {
      const response = await fetch("/api/get-room?code=" + roomCode);
      const data = await response.json();
      setVotesToSkip(data.votes_to_skip);
      setGuestCanPause(data.guest_can_pause);
      setIsHost(data.is_host);
    };

    getRoomDetails();
  }, [roomCode]);

  return (
    <div>
      <h3>{roomCode}</h3>
      <p>Votes: {votesToSkip}</p>
      <p>Can Pause: {guestCanPause.toString()}</p>
      <p>Host: {isHost.toString()}</p>
    </div>
  );
};

export default Room;

// import React, { Component } from "react";
//   import { useParams } from "react-router-dom";

//   export default class Room extends Component {
//     constructor(props) {
//       super(props);
//       this.state = {
//         votesToSkip: 2,
//         guestCanPause: false,
//         isHost: false,
//       };
//       this.roomCode = this.props.match.params.roomCode;
//     }
//     render() {
//       return (
//         <div>
//           <h3>{this.roomCode}</h3>
//           <p>Votes: {this.state.votesToSkip}</p>
//           <p>Can Pause: {this.state.guestCanPause}</p>
//           <p>Host: {this.state.isHost}</p>
//         </div>
//       );
//     }
//   }
