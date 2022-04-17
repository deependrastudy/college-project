import React, { Component } from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { Table } from 'reactstrap';
import CategoryService from '../services/categoryService';
import path from '../services/path';
import axios from 'axios';
export default class Category extends Component {

     state = {
        modal: false,
        categories:[],
     };
     toggle() {
        this.setState({
            modal: !this.state.modal
        });
     }

     submitForm() {
        console.log("this form is submit");
     }

     componentDidMount(){
        axios.get(path.API_URL+'get-category').then((res)=>{
            this.setState({categories: res.data.data});

        });
     }

     async getCategory(){
        // let res =  await CategoryService.getCategory();
        // this.setState({getCategory: res.data.data});
         axios.get(path.API_URL+'get-category').then((res)=>{
            this.setState({categories: res.data.data});

        });
        // this.setState({getCategory: res.data.data});
        // console.log(res.data.data);    
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
                                        <td></td>
                                        <td>
                                            <button className='btn btn-info mr-2'>Edit</button>
                                            <button className='btn btn-danger ml-2'>Delete</button>
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
                                    <input type="text" className="form-control dropdown-toggle"  placeholder="Enter Category" />
                                </div>
                            </form>
                        </ModalBody>
                        <ModalFooter>
                            <Button color="primary" onClick={()=>this.submitForm()}>Save</Button>{' '}
                            <Button color="secondary" onClick={()=>this.setState({modal:false})}>Cancel</Button>
                        </ModalFooter>
                        </Modal>

                    </div>

            </React.Fragment>

        )
     }

}