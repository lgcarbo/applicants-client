import { gql, graphql } from 'react-apollo';

export default graphql(gql`
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
    }`);