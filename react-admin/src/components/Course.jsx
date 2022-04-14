import React, { Component } from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { Table } from 'reactstrap';

export default class Category extends Component {
    
     state = {
        modal: false
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
     }

     render() {
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
                                    <h4 className="page-title">Course</h4>
                                </div>
                            </div>
            
                    </div>

                    <div className="container mt-2">
        
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                            <th>#</th>
                            <th>Category Name</th>
                            <th>Price</th>
                            <th>Ducation</th>
                            <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                            <td>1</td>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>   
                            <td>Active</td>   
                            </tr>
                            <tr>
                            <td>2</td>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                            <td>Active</td>   
                            </tr>
                            <tr>
                            <td>3</td>
                            <td>Larry the Bird</td>
                            <td>@twitter</td>
                            <td>@mdo</td>   
                            <td>Active</td>   
                            </tr>
                            <tr>  
                            <td>3</td>
                            <td>Larry the Bird</td>
                            <td>@twitter</td>
                            <td>@mdo</td>   
                            <td>Active</td>   
                            </tr>
                        </tbody>
                    </Table>
                    </div>
                    
                </div>

                <div className="container-fluid">

                        <Modal isOpen={this.state.modal} toggle={()=>this.setState({modal:false})} className={this.props.className}>
                        <ModalHeader toggle={()=>this.setState({modal:false})}>Add Course</ModalHeader>
                        <ModalBody>
                            <form>
                                <div className="input-group">
                                    <input type="text" className="form-control dropdown-toggle"  placeholder="Enter Name" />
                                </div>
                                <div className="input-group mt-2">
                                    <input type="text" className="form-control dropdown-toggle"  placeholder="Enter Category" />
                                </div>
                                <div className="input-group mt-2">
                                    <input type="text" className="form-control dropdown-toggle"  placeholder="Enter category Name" />
                                </div>
                                <div className="input-group mt-2">
                                    <input type="text" className="form-control dropdown-toggle"  placeholder="Enter price" />
                                </div>
                                <div className="input-group mt-2">
                                    <input type="text" className="form-control dropdown-toggle"  placeholder="Enter ducation" />
                                </div>
                                <div className="input-group mt-2">
                                    <input type="text" className="form-control dropdown-toggle"  placeholder="Enter status" />
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