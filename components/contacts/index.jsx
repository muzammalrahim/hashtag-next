import React, { Component } from 'react';
// import './style.css';
import axios from 'axios';
import * as config from '../../config.js';

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
      errors: {},
      hideForm: false,
      btnSpinner: false
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
      let page = '';
      if(this.props.page){
        page = this.props.page;    
      } else {
        page = '';
      }
      let errors = {};
      this.setState({
        btnSpinner: true
      });

      axios.post(config.myConfig.apiUrl+'contact',{ name, email, message, page})
      .then((response) => {
         console.log(response.data.data);
         //errors["sucesss"] = response.data.message;
        // errors["sucesss"] = "Thanks for contacting us! We will be in touch with you shortly.";
        this.state.fields.firstname = " ";
        this.state.fields.secondname = " ";
        this.state.fields.email = " ";
        this.state.fields.message = " ";
        this.setState({
          errors: errors,
          hideForm: true,
          btnSpinner: false
        });

      }).catch(error =>{
        
        console.log(error.response)
        errors["failure"] = "Something went wrong. Please try again";
        this.setState({
          errors: errors,
          hideForm: false,
          btnSpinner: false
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
    else{
      if (!fields["name"].replace(/\s/g, '').length)
        {
          formIsValid = false;
          errors["name"] = "Please enter a valid name";
        }
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
    }else{
      if (!fields["message"].replace(/\s/g, '').length)
        {
          formIsValid = false;
          errors["message"] = "Please enter a valid message";
        }
    }

    this.setState({
      errors: errors
    });
    return formIsValid;
  }

  

  render() {
    return (
      <div className="container-fluid section-seven-bg pt-5 mb-5" id="contact-form">
        <div className="container">
          <div className="row justify-content-center pl-3 pr-3 ">
            <div className="col-12">
              <div className="custom-contact-style" id="CcstyleSpaceIs">
                <div className="contact-form-out">
                  {(this.state.hideForm == false) ? (
                    <div className="contact-form-wrap">
                      <p className="text-above-main-title ">LET'S SPEAK</p>
                      <h1 className="title-level-3"><span className="title-orange form-title d-block"> 
                      Get in touch</span></h1>
                      <div className="col-lg-10 col-md-12 col-sm-12 mt-5 p-0 pb-4 form-no-margin">
                        <form id="contact-form" onSubmit={this.handleSubmit}>
                          <div className="form-row">
                            <div className="col-lg-5 col-md-12 col-sm-12 pr-4 pt-5">
                              <label for="inputName" className="hash-form-label">NAME</label>
                              <input type="text" className="form-control hash-input" placeholder="Enter your Full name" name="name" value={this.state.fields.name} onChange={this.handleChange} />
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
                                  {(this.state.btnSpinner == true) ? (
                                    <div className="spinner"><div></div><div></div><div></div><div></div></div>
                                  ) : (
                                    <span className=""><span className="form-btn-arrow btn-right-arrow"></span></span> 
                                  )}
                                </button> 
                                                    
                              </div>
                              <div className="contact-error" style={{color: "red"}}>{this.state.errors.failure}</div>  
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  ) : (
                    <div className="col-md-12">
                      <div className="message-box">
                        <div className="msg-bx-col">
                          <h3 className="title-orange form-title">Thank you for contacting us</h3>
                          <p>We appreciate that you've taken time to write us. We will get back to you soon.</p>
                        </div>
                        <div className="msg-bx-col pl-3">
                          <img src="/images/contacts/contact-success.svg" alt="success" />
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Contact;