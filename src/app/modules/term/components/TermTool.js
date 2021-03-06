import React, { Component } from 'react';

import { NavLink } from 'react-router-dom' ;

import { Button } from 'react-bootstrap';

import API from './../../../config/api';
const themes_admin  = API.admin_url;

class TermTool extends Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        let { handlePublishs, handleUnPublishs, handleTrashs } = this.props;

        return ( 
            <div className="box-tools">
                <div className="col-sm-12 text-right">
                    { /* THÊM */ }                   
                    <NavLink to={themes_admin + 'term/edit'} className="btn btn-primary btn-flat btn-sm" id="add" target="_blank">
                        <i className="fa fa-plus"></i><span> THÊM </span>
                    </NavLink>
                    
                    { /* XÓA */ }
                    <Button bsClass="btn bg-maroon btn-flat btn-sm" id="delete" onClick={ handleTrashs }>
                        <i className="fa fa-trash-o"></i><span> XÓA </span>
                    </Button> 

                    { /* PUBLISH */ } 
                    <Button bsClass="btn bg-olive btn-flat btn-sm" id="publish" onClick={ handlePublishs }>
                        <i className="fa fa-check"></i><span > PUBLISH </span> 
                    </Button>

                    { /* UNPUBLISH */ } 
                    <Button bsClass="btn bg-maroon btn-flat btn-sm" id="unpublish" onClick={ handleUnPublishs }>
                        <i className="fa fa-check"></i><span > UNPUBLISH </span> 
                    </Button>
                </div>
            </div>
        )
    }
}

export default TermTool;