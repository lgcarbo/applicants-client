import React from 'react';
import { FormGroup, ControlLabel, FormControl } from 'react-bootstrap';

export default ( { data: { loading, error, elements }, id, label, placeholder, defaultValue } ) => {

    if(loading) {
        return <p>Loading...</p>;
    }
    if(error) {
        return <p>{error.message}</p>;
    }

    return (
    <FormGroup controlId={ id }>
      <ControlLabel>{ label }</ControlLabel>
      <FormControl componentClass="select" placeholder={placeholder} defaultValue={defaultValue}>
        { elements.map(e => <option key={ e.Id } value={ e.Id } >{ e.Description }</option>) }
      </FormControl>
    </FormGroup> 
    )
}