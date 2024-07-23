import React, { Component } from "react";
import RoomJoinPage from "./RoomJoinPage";
import CreateRoomPage from "./CreateRoomPage";
import Room from "./Room";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

export default class HomePage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<h1>This is Home</h1>} />
          <Route path="/join" element={<RoomJoinPage />} />
          <Route path="/create" element={<CreateRoomPage />} />
          <Route path="/room/:roomCode" element={<Room/>}/>
        </Routes>
      </Router>
    );
  }
}



// import React, { Component } from "react";
// import RoomJoinPage from "./RoomJoinPage";
// import CreateRoomPage from "./CreateRoomPage";
// import {
//   BrowserRouter as Router,
//   Switch,
//   Routes,
//   Route,
//   Link,
//   Redirect,
// } from "react-router-dom";

// export default class HomePage extends Component {
//   constructor(props) {
//     super(props);
//   }
//   render() {
//     // return (<div>
//     //   <h1>Home Page</h1>
//     // </div>)
//     return (
//       <Router>
//         <Switch>
//           <Route exact path="/"><h1>This is Home</h1>
//           </Route>
//           <Route path="/join" Component={RoomJoinPage} />
//           <Route path="/create" Component={CreateRoomPage} />
//         </Switch>
//       </Router>
//     );
//   }
// }
