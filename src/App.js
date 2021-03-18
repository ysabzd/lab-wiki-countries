import logo from './logo.svg';
import React from 'react';
import './App.css';
import { Switch, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';
import jsonFile from './countries.json';


class App extends React.Component {

  state = {
    countries: jsonFile
  }

  render(){
    return (
      <div className="App">
        <Navbar/>
        <CountriesList countries={this.state.countries}/>
        <Switch>
          <Route 
          path="/countries/:uid"
          render={(historyProps) => {
            return <CountryDetails {...historyProps}/>;
          }}
          />
        </Switch>
        
        
      </div>
    )
  }
}

export default App;
