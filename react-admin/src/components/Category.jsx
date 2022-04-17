import React, { Component } from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { Table } from 'reactstrap';
import CategoryService from '../services/categoryService';
import path from '../services/path';
import axios from 'axios';
export default class Category extends Component {

     state = {
        modal: false,
        getCategory:[],
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
        this.getCategory();
     }

     async getCategory(){
        // let res =  await CategoryService.getCategory();
        // this.setState({getCategory: res.data.data});
         await axios.get(path.API_URL+'get-category').then((res)=>{
            console.log(res);
            this.setState({getCategory: res.data.data});

        });
        // this.setState({getCategory: res.data.data});
        // console.log(res.data.data);    
     }

     render() {
         console.log("get category = ", this.state.getCategory);
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
                         <p>{JSON.stringify(this.state.getCategory)}</p>
                    <table className="striped bordered hover">
                       
                            <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Status</th>
                            <th>Action</th>
                            </tr>
                       
                            <tr>
                                <td></td>
                            </tr>
                
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