import React, { Component } from 'react'
import axios from "axios"
import { Link } from 'react-router-dom';
export default class Home extends Component {
    state  ={
        list:[],
        name:'',
        file:{},
    }
    componentDidMount(){
    }
    uploadFile=(e)=>{
        console.log(e.target.files[0].type);
        if(e.target.files[0].type==='image/jpeg' || e.target.files[0].type==='image/png') {
            this.setState({file:e.target.files[0]});
        } else {
            alert("Please Select Valid File");  
        }
    }
    saveForm=()=>{
        const data = new FormData() 
       // data.append('image', this.state.file);
        data.append('name', this.state.name);
        data.append('status', 1);
        
        axios.post("http://localhost:2000/update-category/625166fe7f27f1b8e2f82bc5",data).then((resp)=>{
            console.log("Resp",resp);
        })  
    }
    render() {
        return (
            <div>
                <label>Name</label>
                <input type="text" placeholder="Enter Name" onChange={(e)=>this.setState({name:e.target.value})} /> 
                <label>Image</label>
                <input type="file" onChange={this.uploadFile} /> 
                <button onClick={this.saveForm} >Submit</button>
            </div>
        )   
    }
}
