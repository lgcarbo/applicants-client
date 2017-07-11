import { gql, graphql } from 'react-apollo';

export default graphql(gql`
    mutation DeleteApplicantMutation($ApplicantId: Int!)  {
        deleteApplicant(ApplicantId: $ApplicantId)
    }`, {
        props: ( { mutate, ownProps: { applicantId, endDeleteApplicant } }) => ({
            beginDeleteApplicant: () => { 
                mutate({variables: { ApplicantId: applicantId }})
                    .then(result => {
                        let deleted = result.data.deleteApplicant === 1;
                        endDeleteApplicant(applicantId, deleted);
                    })
            }
        }),
        options: {
            refetchQueries: [ 'ApplicantsGridQuery' ]
        }
    });

