import { Route } from "react-router-dom";
import HomePages from "./Pages/HomePages";
import "./App.css";
import ChatPages from "./Pages/ChatPages";

function App() {
  return (
    <div className="App">
      {/* two to use router-dom v5 */}
      {/* <Route path="/" exact>
        <HomePages />
      </Route>
      <Route path="/chats" >
        <ChatPages />
      </Route> */}
      <Route path="/" component={HomePages} exact />
      <Route path="/chats" component={ChatPages} />
    </div>
  );
}

export default App;
