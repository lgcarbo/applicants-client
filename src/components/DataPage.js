import React from 'react';
import { FormGroup, ControlLabel, FormControl, HelpBlock, Grid, Row, Col, Button, Checkbox } from 'react-bootstrap';
import { saveApplicant, cancelApplicant } from '../actions/pageActions';
import SalaryTypeContainer from '../containers/SalaryTypeContainer';
import ContractTypeContainer from '../containers/ContractTypeContainer';
import EducationLevelContainer from '../containers/EducationLevelContainer';
import TechnicalSkillsContainer from '../containers/TechnicalSkillsContainer';

const FieldGroup = ({id, label, help, ...props}) => (
    <FormGroup controlId={id}>
        <ControlLabel>{label}</ControlLabel>
        <FormControl {...props} />
        {help && <HelpBlock>{help}</HelpBlock>}
    </FormGroup>
);

const CheckGroup = ({id, label, help, ...props}) => (
    <FormGroup>
        <Checkbox id={id} {...props}>{label}</Checkbox>
        {help && <HelpBlock>{help}</HelpBlock>}
    </FormGroup>
);

export default class DataPage extends React.Component {

    toNull(value) {
        if(value === '') {
            return null;
        }
        else {
            return value;
        }
    }

    toBit(value) {
        return value ? 1 : 0;
    }

    submitApplicant(applicantId) {
        let result = { 
            LastName: document.getElementById('fgLastName').value,
            FirstName: document.getElementById('fgFirstName').value,
            BirthDate: this.toNull(document.getElementById('fgBirthDate').value), 
            Email: document.getElementById('fgEmail').value, 
            IsWorking: this.toBit(document.getElementById('fgIsWorking').checked), 
            EducationLevelId: document.getElementById('fgEducationLevelId').value, 
            EducationLevelFinished: this.toBit(document.getElementById('fgEducationLevelFinished').checked), 
            YearsOfExperience: document.getElementById('fgYearsOfExperience').value, 
            DesiredSalary: document.getElementById('fgDesiredSalary').value, 
            ContractTypeId: document.getElementById('fgContractTypeId').value, 
            SalaryTypeId: document.getElementById('fgSalaryTypeId').value,             
            TechnicalSkillIds: document.getElementById('fgTechnicalSkills').value
        }
        this.props.submit(result)
            .then(this.props.dispatch(saveApplicant(applicantId)));
    }

    render() {
        const { data: { loading, error, Applicant } } = this.props;

        if(loading) {
            return <p>Loading...</p>;
        }
        if(error) {
            return <p>{error.message}</p>;
        }

        return (
            <form style={{ marginTop: '10px' }}>
                <Grid>
                    <Row>
                        <Col md={4}><FieldGroup id="fgLastName" type="text" label="Last Name" placeholder="Enter Last Name" defaultValue={Applicant.LastName} /></Col>
                        <Col md={4}><FieldGroup id="fgFirstName" type="text" label="First Name" placeholder="Enter First Name" defaultValue={Applicant.FirstName}/></Col>
                    </Row>
                    <Row>
                        <Col md={4}><FieldGroup id="fgBirthDate" type="text" label="Birth Date" placeholder="Enter Birth Date" defaultValue={Applicant.BirthDate}/></Col>
                        <Col md={4}><FieldGroup id="fgEmail" type="text" label="Email" placeholder="Enter Email" defaultValue={Applicant.Email}/></Col>
                    </Row>
                    <Row>
                        <Col md={4}><EducationLevelContainer id="fgEducationLevelId" label="Education Level" placeholder="Enter Education Level" defaultValue={Applicant.EducationLevel.EducationLevelId}/></Col>
                        <Col md={4}><CheckGroup id="fgEducationLevelFinished" label="Finished" defaultChecked={Applicant.EducationLevelFinished == 1}/></Col>
                    </Row>
                    <Row>
                        <Col md={4}><FieldGroup id="fgYearsOfExperience" type="text" label="Years of Experience" placeholder="Enter Years of Experience" defaultValue={Applicant.YearsOfExperience}/></Col>
                        <Col md={4}><CheckGroup id="fgIsWorking" label="Is Working" defaultChecked={Applicant.IsWorking == 1}/></Col>
                    </Row>
                    <Row>
                        <Col md={4}><SalaryTypeContainer id="fgSalaryTypeId" label="Salary Type" placeholder="Select Salary Type" defaultValue={Applicant.SalaryType.SalaryTypeId}/></Col>                    
                        <Col md={4}><FieldGroup id="fgDesiredSalary" type="text" label="Desired Salary" placeholder="Enter Desired Salary" defaultValue={Applicant.DesiredSalary}/></Col>
                    </Row>
                    <Row>
                        <Col md={4}><ContractTypeContainer id="fgContractTypeId"  label="Contract Type" placeholder="Select Contract Type" defaultValue={Applicant.ContractType.ContractTypeId}/></Col>
                    </Row>
                    <Row>
                        <Col md={6}><TechnicalSkillsContainer id="fgTechnicalSkills" label="Technical Skills" placeholder="Select Technical Skills" values={Applicant.TechnicalSkills.map(s => s.TechnicalSkillId)}/></Col>
                    </Row>
                </Grid>
                <Grid>
                    <Row>
                        <Col md={1}>
                            <Button bsStyle='primary' onClick={ () => this.submitApplicant(Applicant.applicantId) }>Save</Button>
                        </Col>
                        <Col md={1}>
                            <Button bsStyle='danger' onClick={ () => this.props.dispatch(cancelApplicant())} >Cancel</Button>
                        </Col>                    
                    </Row>
                </Grid>
            </form>
        )
    }
};