import React from 'react'
import axios from 'axios'

class Login extends React.Component {
  constructor(prop) {
    super(prop);
    this.state = {
      email : "",
      password : "",
    }
    this.oncli = this.oncli.bind(this)
    const axios = require('axios');
    axios.get('http://127.0.0.1:5000/api/v1/resources/books?id=2')
      .then(function (response) {
        // handle success
        console.log(response);
      })
      
      .catch(function (error) {
        if (error.response) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
        } else if (error.request) {
          // The request was made but no response was received
          // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
          // http.ClientRequest in node.js
          console.log(error.request);
        } else {
          // Something happened in setting up the request that triggered an Error
          console.log('Error', error.message);
        }
        console.log(error.config);
      })
      .then(function () {
        // always executed
      });
  }
  
  // Make a request for a user with a given ID
  
  oncli() {
    var _email = document.getElementsByClassName('inp')[0].value;
    this.setState({email : _email});
    console.log(this.state.email)
   
  }
  
  componentDidMount() {
    document.getElementsByTagName('body')[0].style.paddingTop = "0px";
    if(document.getElementById('diamond-narrow')){
      let diamond = document.getElementById('diamond-narrow');
    diamond.style.border = window.innerWidth / 2 +'px solid transparent';
    diamond.style.borderBottom = window.innerHeight / 2 +'px solid red';
    diamond.style.top = -window.innerHeight / 2+'px';
    console.log(diamond.style.top) 
    // diamond.style.breakAfter.border = window.innerWidth / 2 + 'px solid transparent';
    diamond.style.borderTop = window.innerHeight / 2 + 'px solid red';
    diamond.pseudoStyle("after","{border:"+window.innerWidth/2+"px solid transparent; border-top:"+window.innerHeight/2+"px solid red;left:-"+window.innerWidth/2+"px;top:"+window.innerHeight/2+"px;}")
    // let x = document.getElementsByClassName('inp');
    // x[0].style.width = window.innerWidth-30+'px';
    // x[1].style.width = window.innerWidth-30+'px';
    // document.getElementsByClassName('inp-button')[0].style.width = window.innerWidth-35+'px';
    // console.log(x[0].style.width)
    
    }
    
  }
  render() {

    HTMLElement.prototype.pseudoStyle = function (element, prop) {
      var _this = this;
      var _sheetId = "pseudoStyles";
      var _head = document.head || document.getElementsByTagName('head')[0];
      var _sheet = document.getElementById(_sheetId) || document.createElement('style');
      _sheet.id = _sheetId;
      var className = "diamond-narrow";

      _this.className += " " + className;

      _sheet.innerHTML += " #" + className + ":" + element + prop;
      console.log(_sheet.innerHTML)
      _head.appendChild(_sheet);
      console.log(_sheet)
      return this;
    };

    function onld() {
      document.getElementsByTagName('body')[0].style.padding  = 'none';
      if(document.getElementById('root')){
      let doc = document.getElementById('root')
      doc.style.width = window.innerWidth + 'px';
      console.log(doc.style.width);
      doc.style.height = window.innerHeight + 'px';
      }
      
    }
    
    return (
      <div onLoad={onld()}>
        <div id="diamond-narrow"></div>
        <form action='www.google.com'className="loginBox">
          <span className='login-text'>Log in</span>
          <div className="inpt1">
            <input required className="inp" width="348px" height="52px" style={{width: '100%', height: '52px'}} type="text"
              placeholder="jane@example.com" />
          </div>
          <div className="inpt2">
            <input required className="inp" width="348px" height="52px" style={{width: '100%', height: '52px'}} type="text"
              placeholder="********"></input>
          </div>
          <div className="inpt3">
            <input className='inp-button' style={{width:'100%', height: '52px'}} type="submit" value={this.state.email} onClick={this.oncli}></input>

          </div>
          <div className="recommand-registering">
            <span>Not yet registered? <a href="">singIN</a></span>
          </div>
        </form>
      </div>
    )
  }
}

export default Login