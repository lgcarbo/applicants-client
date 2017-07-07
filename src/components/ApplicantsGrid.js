import React from 'react';
import moment from 'moment';
import { Pagination, Button, Glyphicon } from 'react-bootstrap';
import { StyledGrid, StyledCol, CenteredCol, StyledRow, HeaderRow, CenteredDiv } from '../styled-components/GridWrappers'
import { editApplicant } from '../actions/pageActions';

export default class ApplicantsGrid extends React.Component {

    render() {
        const { data: { loading, error, Applicants } } = this.props;

        if(loading) {
            return <p>Loading...</p>;
        }
        if(error) {
            return <p>{error.message}</p>;
        }
        
        return (
            <div>
                <StyledGrid>
                    <HeaderRow>
                        <StyledCol md={3}>Name</StyledCol>
                        <CenteredCol md={1}>Age</CenteredCol>
                        <StyledCol md={2}>Education</StyledCol>
                        <StyledCol md={3}>Skills</StyledCol>
                        <CenteredCol md={2}>Last Update</CenteredCol>
                        <StyledCol md={1}></StyledCol>
                    </HeaderRow>
                    { Applicants.map(a => (
                    <StyledRow key={a.ApplicantId}>
                        <StyledCol md={3}><div>{ `${a.LastName}, ${a.FirstName}` }</div></StyledCol>
                        <CenteredCol md={1}>{a.Age || '-'}</CenteredCol>
                        <StyledCol md={2}>{a.EducationLevel.Description}</StyledCol>
                        <StyledCol md={3}>{ a.TechnicalSkills.map(s => s.Description).join(', ') }</StyledCol>
                        <CenteredCol md={2}>{moment(new Date(a.ModificationDate)).format('YYYY-MM-DD')}</CenteredCol>
                        <CenteredCol md={1}>
                            <Button bsSize='xsmall' bsStyle='primary' onClick={ () => this.props.dispatch(editApplicant(a.ApplicantId)) }><Glyphicon glyph='pencil'></Glyphicon></Button>&nbsp;
                            <Button bsSize='xsmall' bsStyle='danger'><Glyphicon glyph='remove'></Glyphicon></Button>
                        </CenteredCol>
                    </StyledRow>                
                        ))
                    }
                </StyledGrid>
                <CenteredDiv>
                    <Pagination items={10}></Pagination>
                </CenteredDiv>
            </div>
        )
    }
};
