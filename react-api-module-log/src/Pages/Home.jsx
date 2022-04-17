import React, { Component } from 'react'
import axios from "axios"
import { Link } from 'react-router-dom';
var querystring = require('querystring');
export default class Home extends Component {
    state  ={
        list:[],
        name:'',
        file:{},
        email:'',
        password:'',
    }
    componentDidMount(){
    }
    uploadFile=(e)=>{
        console.log(e.target.files[0].type);
        if(e.target.files[0].type==='image/jpeg' || e.target.files[0].type==='image/png') {
            console.log("e.target.files",e.target.files);
            this.setState({file:e.target.files});
        } else {
            alert("Please Select Valid File");  
        }
    }
    saveForm=()=>{
        const data = new FormData() 
        data.append('name', this.state.name);
        data.append('image', this.state.file);
        console.log(data);
        console.log(this.state.email);
        console.log(this.state.file);
        let obj = {
            email:this.state.email,
            password:this.state.password
        }
        console.log("obj",obj);
        let headers = {
            'Content-Type': 'application/x-www-form-urlencoded',
          }
            /*axios.post("http://localhost:2000/log-in",querystring.stringify(obj), {
                headers: headers
              }).then((resp)=>{
            console.log("Resp",resp);
        })  */
         axios.post("http://localhost:2000/update-category/625166fe7f27f1b8e2f82bc5",data, {
                headers: headers
              }).then((resp)=>{
            console.log("Resp",resp);
        })  
    }
    render() {
        return (
            <div>
                <label>Name</label>
                <input type="text" placeholder="Enter Name" onChange={(e)=>this.setState({name:e.target.value})} /> 
                <input type="text" placeholder="Enter Name" onChange={(e)=>this.setState({password:e.target.value})} /> 
                <label>Image</label>
                <input type="file" multiple onChange={this.uploadFile} /> 
                <button onClick={this.saveForm} >Submit</button>
            </div>
        )   
    }
}
