import React from 'react';
import { FormGroup, ControlLabel, FormControl, HelpBlock } from 'react-bootstrap';

export default class FieldGroup extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = { isValid: this.validate(props, props.defaultValue) };
    }

    isValidMail = (email) => /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);

    validate = (props, value) => {
        const isMandatory = props.isMandatory || false;
        const isEmail = props.type === 'email';
        const isNumber = props.isNumber || false;
        const mandatoryValidation = (isMandatory && value.length > 0) || !isMandatory;
        const emailValidation = (isEmail && this.isValidMail(value)) || !isEmail;
        const numberValidation = (isNumber && !isNaN(value)) || !isNumber;
        return mandatoryValidation && emailValidation && numberValidation;
    }

    change = (event) => {
        this.setState({ isValid: this.validate(this.props, event.target.value) });
    }

    render() {
        return (
            <FormGroup controlId={this.props.id} validationState={this.state.isValid ? 'success' : 'error'}>
                <ControlLabel>{this.props.label}</ControlLabel>
                <FormControl onChange={this.change} type={this.props.type} defaultValue={this.props.defaultValue} placeholder={this.props.placeholder} />
                <FormControl.Feedback />
                {this.props.id && <input id={this.props.id+'_valid'} type='hidden' value={this.state.isValid} />}
                {this.props.help && <HelpBlock>{this.props.help}</HelpBlock>}
            </FormGroup>
        )
    }
}
