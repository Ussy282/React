import React from 'react';
import Cardlist from './Components/Cardlist';
import SearchBox from './Components/SearchBox';
import Scroll from './Components/Scroll';

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            robots: [],
            searchField: "",

        }
    }

    componentDidMount(){
        fetch('http://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => this.setState({ robots: users}))
    }
    onsearchChange = (e) => {
        this.setState({ searchField: e.target.value })
    }
    render() {
        const { searchField, robots} = this.state
        const filteredRobots = robots.filter((robot) => {
            return robot.name.toLowerCase().includes(searchField.toLowerCase());
        })
       return !robots.length?
       <h1 className="tc"> <i className="fa fa-spinner fa-spin">
       </i> Loading...</h1>
       :
       ( 
        <div className ="tc" >
            <h1> Robot Friends </h1>  
            <SearchBox searchChange = { this.onsearchChange }/> 
            <Scroll>
            <Cardlist robots = { filteredRobots }/> 
            </Scroll>
             </div >
        )
    }
}

export default App;