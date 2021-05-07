import React, { Component } from 'react';
import './style.css';
import axios from 'axios';

let defaultOptions;
class Contact extends React.Component{


constructor(props) {
  super(props);
             this.state = {
                     fields: {
                        name: '',
                        email: '',
                        message: ''
                     },
                     errors: {}
                 }
          this.handleChange = this.handleChange.bind(this);
          this.handleSubmit = this.handleSubmit.bind(this);      
  };
   

  handleChange(e) {
    
    let fields = this.state.fields;
    fields[e.target.name] = e.target.value;
    this.setState({
      fields
    });
  }

handleSubmit(e){
  e.preventDefault();
  if (this.validateForm()){
    let name = this.state.fields.name;
    let email = this.state.fields.email;
    let message = this.state.fields.message;
    let errors = {};

    axios.post('https://api.hashtag-ca.com/api/v1/contact',{ name, email, message})
      .then((response) => {
  
       //errors["sucesss"] = response.data.message;
       errors["sucesss"] = "Thanks for contacting us! We will be in touch with you shortly.";
       this.state.fields.firstname = " ";
    this.state.fields.secondname = " ";
    this.state.fields.email = " ";
    this.state.fields.message = " ";
          this.setState({
              errors: errors
            });

      }).catch(error =>{

       errors["failure"] = "Something went wrong. Please try again";
          this.setState({
              errors: errors
            });
    });
      
  }
}


  validateForm() {
    let fields = this.state.fields;
    let errors = {};
    let formIsValid = true;

    if (!fields["name"]) {
      formIsValid = false;
      errors["name"] = "*Please enter your name.";
    }

    if (!fields["email"]) {
      formIsValid = false;
      errors["email"] = "*Please enter your email.";

    }else{
      if (!fields["email"].match('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')) {
          formIsValid = false;
          errors["email"] = "Enter a valid email address";
        }
    }


    if (!fields["message"]) {
      formIsValid = false;
      errors["message"] = "*Please enter your message.";
    }

    this.setState({
      errors: errors
    });
    return formIsValid;
  }

  

  render() {
    return (
    
<div className="container-fluid section-seven-bg pt-5 mb-5" id="contact-form">
  <div className="row justify-content-center cont-sec">
    <div className="col-1"></div>
    <div className="col-10 p-0">
      <div className="custom-contact-style">
          <p className="text-above-main-title ">LET'S SPEAK</p>
          <h1 className="title-level-3"><span className="title-orange form-title d-block"> 
          Get in touch</span></h1>
        <div className="col-lg-10 col-md-12 col-sm-12 mt-5 p-0 pb-4 form-no-margin">
          <form id="contact-form" onSubmit={this.handleSubmit}>
            <div className="form-row">
              <div className="col-lg-5 col-md-12 col-sm-12 pr-4 pt-5">
                <label for="inputName" className="hash-form-label">NAME</label>
                <input type="text" className="form-control hash-input" placeholder="Name Surname" name="name" value={this.state.fields.name} onChange={this.handleChange} />
                  <div style={{color: "red"}}>{this.state.errors.name}</div>
              </div>
              <div className="col-lg-5 col-md-12 col-sm-12 pt-5">
                <label for="inputEmail" className="hash-form-label">EMAIL</label>
                <input type="email" className="form-control hash-input" placeholder="Enter your email" name="email" aria-describedby="emailHelp" value={this.state.fields.email} onChange={this.handleChange}/>
                 <div style={{color: "red"}}>{this.state.errors.email}</div>
              </div>
              <div className="col-lg-10 col-md-12 col-sm-12 pt-5">
                <label for="inputTextarea" className="hash-form-label">MESSAGE</label>
                <textarea className="form-control hash-input"  rows="4" placeholder="Leave your message here" name="message" value={this.state.fields.message} onChange={this.handleChange}  ></textarea>
                 <div style={{color: "red"}}>{this.state.errors.message}</div>
              </div>
              <div className="col-lg-10 col-md-12 col-sm-12 pt-5">
                <div className="btn-group form-btn">
                  <button type="submit" className="btn form-button font-12 font-bold">SEND MESSAGE</button>
                  <button type="submit" className="btn form-button-child px-3">
                    <span className=""><span className="form-btn-arrow btn-right-arrow"></span></span> 
                  </button> 
                                      
                </div>
                <div className="contact-success" style={{color: "green"}}>{this.state.errors.sucesss}</div>
                <div className="contact-error" style={{color: "red"}}>{this.state.errors.failure}</div>  
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
    <div className="col-1"></div>
  </div>
</div>

    )
  }

}

export default Contact;