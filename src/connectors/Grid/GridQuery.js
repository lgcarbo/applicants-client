import { gql, graphql } from 'react-apollo';

export default graphql(gql`
    query ApplicantsGridQuery($page: Int!, $count: Int!) {
        PaginatedApplicants(page: $page, count: $count) {
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
            TotalCount
        }
    }`, { 
        options: ( { page } ) => ( { variables: { page, count: process.env.REACT_APP_ITEMS_PER_PAGE }, fetchPolicy: 'network-only' } )
     });