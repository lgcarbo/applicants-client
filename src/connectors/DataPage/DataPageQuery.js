import { gql, graphql } from 'react-apollo';

export default graphql(gql`
    query ApplicantQuery($ApplicantId: Int!) {
        Applicant(ApplicantId: $ApplicantId) {
            ApplicantId
            LastName
            FirstName
            BirthDate
            Email
            IsWorking
            EducationLevel {
                EducationLevelId
            }
            EducationLevelFinished
            YearsOfExperience
            DesiredSalary
            SalaryType {
                SalaryTypeId
            }
            ContractType {
                ContractTypeId
            }
            TechnicalSkills {
                TechnicalSkillId
            }
        }
    }
`, { options: ({ ApplicantId }) => ( { variables: { ApplicantId }, fetchPolicy: 'network-only' } ) });
