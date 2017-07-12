import React from 'react';
import { FormGroup, HelpBlock, Checkbox } from 'react-bootstrap';

export default ({id, label, help, change, defaultValue, ...props}) => (
    <FormGroup>
        <Checkbox id={id+'_check'} defaultChecked={defaultValue === 1} onChange={() => document.getElementById(id).value = document.getElementById(id+'_check').checked ? 1 : 0 } {...props}>{label}</Checkbox>
        <input id={id} type={'hidden'} value={defaultValue} onChange={change} />        
        {help && <HelpBlock>{help}</HelpBlock>}
    </FormGroup>
);
