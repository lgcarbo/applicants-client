import React from 'react';
import moment from 'moment';
import { Pagination, Button, Glyphicon, ControlLabel } from 'react-bootstrap';
import { StyledGrid, StyledCol, CenteredCol, StyledRow, HeaderRow, CenteredDiv } from '../styled-components/GridWrappers'
import NewApplicantButtonContainer from 'containers/NewApplicantButtonContainer';

export default class ApplicantsGrid extends React.Component {

    shouldComponentUpdate(nextProps, nextState) {
        if(nextProps.data.loading) {
            return false;
        }
        else {
            return true;
        }
    }

    render() {       
        const { data: { loading, error, PaginatedApplicants } } = this.props;
        const count = +process.env.REACT_APP_ITEMS_PER_PAGE || 5;

        if(loading) {
            return <p>Loading...</p>;
        }
        if(error) {
            return <p>{error.message}</p>;
        }
        
        const { Applicants, TotalCount } = PaginatedApplicants;

        return (
            <div>
                <div style={{ height: ((count + 1) * 36) + 'px' }}>
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
                                <Button bsSize='xsmall' bsStyle='primary' onClick={ () => this.props.editApplicant(a.ApplicantId) }><Glyphicon glyph='pencil'></Glyphicon></Button>&nbsp;
                                <Button bsSize='xsmall' bsStyle='danger' onClick={ () => this.props.askIfDeleteApplicant(a.ApplicantId) }><Glyphicon glyph='remove'></Glyphicon></Button>
                            </CenteredCol>
                        </StyledRow>                
                            ))
                        }
                    </StyledGrid>
                </div>
                <CenteredDiv>
                    <NewApplicantButtonContainer />
                </CenteredDiv>
                <CenteredDiv>
                    <Pagination items={ Math.ceil(TotalCount / count) } 
                        activePage={ this.props.page }
                        onSelect={ (eventKey) => { this.props.changePage(eventKey); } }>
                    </Pagination>
                </CenteredDiv>
                <CenteredDiv>
                    <ControlLabel>{ `Total: ${TotalCount} applicants` }</ControlLabel> 
                </CenteredDiv>                    
            </div>
        )
    }
};
