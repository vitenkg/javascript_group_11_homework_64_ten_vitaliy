import './App.css';
import {BrowserRouter, NavLink, Route, Switch} from "react-router-dom";
import Home from "./Conteiner/Home/Home";
import Posts from "./Conteiner/Posts/Posts";
import About from "./Conteiner/About/About";
import Contacts from "./Conteiner/Contacts/Contacts";
import PostsAdd from "./Conteiner/PostsAdd/PostsAdd";

function App() {
  return (
      <div className="Container">
          <BrowserRouter>
              <div className="Header">
                  <p className="NaviHeader">My Blog</p>
                  <ul>
                      <li><NavLink exact to="/">Home</NavLink></li>
                      <li><NavLink to="/posts/add">Add</NavLink></li>
                      <li><NavLink to="/about">About</NavLink></li>
                      <li><NavLink to="/contacts">Contacts</NavLink></li>
                  </ul>
              </div>

              <Switch>
                  <Route path="/" exact component={Home}/>
                  <Route path="/posts/add" component={PostsAdd}/>
                  {/*<Route path="/posts/:id" component={Posts}/>*/}
                  <Route path="/about" component={About}/>
                  <Route path="/contacts" component={Contacts}/>
                  <Route render={()=><h1>NotFound</h1>}/>
              </Switch>
          </BrowserRouter>
      </div>
  );
}

export default App;
