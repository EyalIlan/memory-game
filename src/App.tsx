import React from 'react';
import GamePage from './Components/Pages/Game/game';
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import Homepage from './Components/Pages/Home/homepage';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Switch>

        <Route path="/game">
            <GamePage></GamePage>
        </Route>
        <Route path="/">
          <Homepage></Homepage>
        </Route>

      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
