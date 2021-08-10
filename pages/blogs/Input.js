import React, { Component } from 'react'

export default class Input extends Component {

    constructor(props) {
        super(props);
        this.state = {
            search: "",
         
        }
        this.handleChange = this.handleChange.bind(this);
         
      };


    handleChange(e) {
    
        this.setState({
            search: e.target.value,
          });
      }
    render() {
        
        return (
            <div>
                <h1>input</h1>
                <input type="email" className="form-control hash-input" placeholder="ssearch" name="search" aria-describedby="emailHelp" value={this.state.search} onChange={this.handleChange}/>
            </div>
        )
    }
}
