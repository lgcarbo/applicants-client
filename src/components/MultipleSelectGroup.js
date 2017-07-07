import React from 'react';
import { FormGroup, ControlLabel, FormControl } from 'react-bootstrap';

export default ( { data: { loading, error, elements }, id, label, placeholder, values } ) => {

    if(loading) {
        return <p>Loading...</p>;
    }
    if(error) {
        return <p>{error.message}</p>;
    }

    return (
    <FormGroup controlId={ id }>
      <ControlLabel>{ label }</ControlLabel>
      <FormControl multiple componentClass="select" placeholder={placeholder} >
        { elements.map(e => <option selected={values.indexOf(e.Id) > -1} key={ e.Id } value={ e.Id } >{ e.Description }</option>) }
      </FormControl>
    </FormGroup> 
    )
}