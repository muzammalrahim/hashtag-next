import React, { Component } from 'react';
import './style.css';
import axios from 'axios';
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css';
import * as config from '../../config.js';

let defaultOptions;
class Contactusform extends React.Component{


  constructor(props) {
    super(props);
    this.state = {
      fields: {
        firstname: '',
        secondname: '',
        email: '',
        phone: '',
        message: ''
      },
      errors: {},
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
      let firstname = this.state.fields.firstname;
      let secondname = this.state.fields.secondname;
      let email = this.state.fields.email;
      let phone = this.state.phone;
      let message = this.state.fields.message;
      let name = firstname + " " + secondname;
      let errors = {};
      this.setState({
        btnSpinner: true
      });

      axios.post(config.myConfig.apiUrl+'contact',{ name, email, phone, message})
      .then((response) => {
         console.log(response.data.data);
         //errors["sucesss"] = response.data.message;
         // errors["sucesss"] = "Thanks for contacting us! We will be in touch with you shortly.";

        this.state.fields.firstname = " ";
        this.state.fields.secondname = " ";
        this.state.fields.email = " ";
        this.state.phone= " ";
        this.state.fields.message = " ";

        //Hide contact form
        this.props.handleFormHide();

        this.setState({
          errors: errors,
          btnSpinner: false
        });

      }).catch(error =>{
        console.log(error.response)
        errors["failure"] = "Something went wrong. Please try again";
        this.setState({
          errors: errors,
          btnSpinner: false
        });
      });
    }
  }



  validateForm() {
    let fields = this.state.fields;
    let errors = {};
    let formIsValid = true;

    if (!fields["firstname"]) {
      formIsValid = false;
      errors["firstname"] = "*Please enter your first name.";
    }else{
      if (!fields["firstname"].replace(/\s/g, '').length)
        {
          formIsValid = false;
          errors["firstname"] = "Please enter a valid first name";
        }
    }
    if (!fields["secondname"]) {
      formIsValid = false;
      errors["secondname"] = "*Please enter your second name.";
    }else{
      if (!fields["secondname"].replace(/\s/g, '').length)
        {
          formIsValid = false;
          errors["secondname"] = "Please enter a valid second name";
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
    
    <div className="container-fluid section-seven-bg pt-5 " id="contact-form">
      <div className="row justify-content-center cont-sec">
    
        <div className="col-lg-10 col-md-12 col-sm-12 form-no-margin">
          <form id="contact-form" onSubmit={this.handleSubmit}>
            <div className="form-row">
              <div className="col-lg-5 col-md-12 col-sm-12 pr-4 pt-5">
                <label for="inputName" className="hash-form-label">FIRST NAME</label>
                <input type="text" className="form-control hash-input" placeholder="First Name" name="firstname" value={this.state.fields.firstname} onChange={this.handleChange} />
                  <div style={{color: "red"}}>{this.state.errors.firstname}</div>
              </div>
              <div className="col-lg-5 col-md-12 col-sm-12 pr-4 pt-5">
                <label for="inputName" className="hash-form-label">SECOND NAME</label>
                <input type="text" className="form-control hash-input" placeholder="Second Name" name="secondname" value={this.state.fields.secondname} onChange={this.handleChange} />
                  <div style={{color: "red"}}>{this.state.errors.secondname}</div>
              </div>

              <div className="col-lg-5 col-md-12 col-sm-12 pr-4 pt-5">
                <label for="inputEmail" className="hash-form-label">EMAIL</label>
                <input type="email" className="form-control hash-input" placeholder="Enter your email" name="email" aria-describedby="emailHelp" value={this.state.fields.email} onChange={this.handleChange}/>
                 <div style={{color: "red"}}>{this.state.errors.email}</div>
              </div>

               <div className="col-lg-5 col-md-12 col-sm-12 pr-4 pt-5" id="hash-phoneno">
                    <label for="inputEmail" className="hash-form-label">MOBILE NUMBER</label>                    
                    <PhoneInput country={'us'} name="phone" value={this.state.phone}  onChange={phone => this.setState({ phone })} /> 
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
        <div className="col-lg-2 col-md-12 col-sm-12"> </div>
      </div>
    
    </div>

    )
  }

}

export default Contactusform;