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
                                    <h4 className="page-title">Category</h4>
                                </div>
                            </div>
            
                    </div>

                    <div className="container mt-2">
        
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                            <th>#</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Username</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                            <td>1</td>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>   
                            </tr>
                            <tr>
                            <td>2</td>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                            </tr>
                            <tr>
                            <td>3</td>
                            <td colSpan={2}>Larry the Bird</td>
                            <td>@twitter</td>
                            </tr>
                            <tr>  
                            <td>3</td>
                            <td colSpan={2}>Larry the Bird</td>
                            <td>@twitter</td>
                            </tr>
                        </tbody>
                    </Table>
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