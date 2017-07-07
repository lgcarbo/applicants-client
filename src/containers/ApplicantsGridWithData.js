import { gql, graphql } from 'react-apollo';
import ApplicantsGrid from  '../components/ApplicantsGrid'
import { connect } from 'react-redux';

const ApplicantGridWithData = graphql(gql`
    query ApplicantsGridQuery {
        Applicants {
            ApplicantId
            LastName
            FirstName
            Age
            EducationLevel {
                Description
            }
            TechnicalSkills {
                Description
            }
            ModificationDate
        }
    }
    `)(ApplicantsGrid);

// Use redux to pass in dispatch function to be used in ApplicantsGrid component.
const ApplicantGridWithDataAndState = connect ()(ApplicantGridWithData);

export default ApplicantGridWithDataAndState;