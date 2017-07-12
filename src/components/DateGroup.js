import React from 'react';
import { FormGroup, ControlLabel, HelpBlock } from 'react-bootstrap';
import DateTime from 'react-datetime';

export default ({id, label, help, change, defaultValue, ...props}) => (
    <FormGroup>
        <ControlLabel>{label}</ControlLabel>
        <DateTime defaultValue={defaultValue} onChange={(date) => document.getElementById(id).value = date } {...props} />
        <input id={id} type={'hidden'} value={defaultValue} onChange={change} />
        {help && <HelpBlock>{help}</HelpBlock>}        
    </FormGroup>
);