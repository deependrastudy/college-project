import React, { Component } from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { Table } from 'reactstrap';
import CategoryService from '../services/categoryService';
import path from '../services/path';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export default class Category extends Component {

     state = {
        modal: false,
        categories:[],
        checked:false,
        status:0,
        file:{},
        name:'',
        errorname:'',
        errorfile:'',
        errorstatus:''

     };
     toggle() {
        this.setState({
            modal: !this.state.modal
        });
     }

     submitForm() {
         console.log("file", this.state.file);
        if(this.state.name == ""){
            this.setState({errorname:"Name Field is require"});
    
        } else {
            this.setState({errorname:""});
            const data = new FormData() 
            data.append('image', this.state.file);
            data.append('name', this.state.name);
            data.append('status', this.state.status);
            
            axios.post(path.API_URL+"create-category",data).then((resp)=>{
                console.log("Resp",resp);

                this.getCategory();
                this.setState({modal:false})
                toast.success('Wow so easy!', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    });

            });

        }

     }

     componentDidMount(){
        // axios.get(path.API_URL+'get-category').then((res)=>{
        //     this.setState({categories: res.data.data});

        // });
        this.getCategory();
     }

     uploadFile=(e)=>{
        console.log(e.target.files[0].type);
        if(e.target.files[0].type==='image/jpeg' || e.target.files[0].type==='image/png') {
            this.setState({file:e.target.files[0]});
        } else {
            alert("Please Select Valid File");  
        }
    }

    deleteCat(id){
        axios.get(path.API_URL+'delete-category/'+id).then(()=>{
            this.getCategory();
            toast.success('🦄 Wow so easy!', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                });
        })
    }

     getCategory(){
        // let res =  await CategoryService.getCategory();
        // this.setState({getCategory: res.data.data});
         axios.get(path.API_URL+'get-category').then((res)=>{
            this.setState({categories: res.data.data});

        });
        // this.setState({getCategory: res.data.data});
        // console.log(res.data.data);    
     }

     getCategoryById(id){
        axios.get(path.API_URL+'get-category-by-id/'+id).then((res)=>{
            if(res.data.data.length > 0){
                console.log("res = ", res.data.data);
                let result = res.data.data;
                this.setState({name:result.name})
                this.setState({status:result.status})
            }
        })
        this.setState({modal: true});
     }

     render() {
      console.log("categories",this.state.categories);
        return (
            <React.Fragment>
                <div className="content">
                    <div className="navbar-custom">
                    <div className="col-12">
                                <div className="page-title-box">
                                    <div className="page-title-right">
                                    <button className='btn btn-info btn-sm' onClick={()=>this.setState({modal:true})}>Open Popup
                                        </button>
                                    </div>
                                    <h4 className="page-title">Category</h4>
                                </div>
                            </div>
            
                    </div>

                    <div className="container mt-2">
                        <table className="table table-striped mt-4">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Image</th>
                                    <th>Name</th>
                                    <th>Status</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.state.categories && this.state.categories.map((item,index)=>{
                                    return(<tr>
                                        <td>{index+1}</td>
                                        <th><img width="100px" height="100px" src={`http://localhost:2000/${item.image}`} /></th>
                                        <td> {item.name} </td>
                                        <td>{item.status}</td>
                                        <td>
                                            <button className='btn btn-info mr-2' onClick={()=>this.getCategoryById(item._id)}>Edit</button>
                                            <button className='btn btn-danger ml-2' onClick={()=>this.deleteCat(item._id)}>Delete</button>
                                        </td>
                                    </tr>);
                                })}
                                
                            </tbody>
                        </table>
                    </div>
                    
                </div>

                <div className="container-fluid">

                        <Modal isOpen={this.state.modal} toggle={()=>this.setState({modal:false})} className={this.props.className}>
                        <ModalHeader toggle={()=>this.setState({modal:false})}>Add Category</ModalHeader>
                        <ModalBody>
                            <form>
                                <div className="input-group">
                                    <input type="text" value={this.state.name} className="form-control dropdown-toggle"  placeholder="Enter Category"  onChange={(e)=>this.setState({name:e.target.value})} />
                                </div>
                                <div className='text-danger mt-1'>{this.state.errorname}</div>
                                <div className="input-group  mt-2">
                                    <input type="file" className="form-control dropdown-toggle" onChange={this.uploadFile} />
                                </div>
                                <div className='text-danger mt-1'>{this.state.errorfile}</div>
                                <div className="input-group  mt-2">
                                    <select className="form-control" onChange={(e)=>this.setState({status:e.target.value})}>
                                        <option value="">Select Status</option>
                                        <option value="1">Active</option>
                                        <option value="0">Inactive</option>
                                    </select>
                                </div>
                                <div className='text-danger mt-1'>{this.state.errorstatus}</div>
                            </form>
                        </ModalBody>
                        <ModalFooter>
                            <Button color="primary" onClick={()=>this.submitForm()}>Save</Button>
                            <Button color="secondary" onClick={()=>this.setState({modal:false})}>Cancel</Button>
                        </ModalFooter>
                        </Modal>

                    </div>

            </React.Fragment>

        )
     }

}