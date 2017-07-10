import { gql, graphql } from 'react-apollo';

export default graphql(gql`
    mutation ApplicantMutation($ApplicantId: Int!, $LastName: String!, $FirstName: String!, $BirthDate: Int, $Email: String!, $IsWorking: Int!, $EducationLevelId: Int!, $EducationLevelFinished: Int!, $YearsOfExperience: Int!, $DesiredSalary: Int!, $ContractTypeId: Int!, $SalaryTypeId: Int!, $TechnicalSkillIds: [Int]!)  {
        submitApplicant(ApplicantId: $ApplicantId, LastName: $LastName, FirstName: $FirstName, BirthDate: $BirthDate, Email: $Email, IsWorking: $IsWorking, EducationLevelId: $EducationLevelId, EducationLevelFinished: $EducationLevelFinished, YearsOfExperience: $YearsOfExperience, DesiredSalary: $DesiredSalary, ContractTypeId: $ContractTypeId, SalaryTypeId: $SalaryTypeId, TechnicalSkillIds: $TechnicalSkillIds) {
            ApplicantId
        }
    }
`, {
    props: ({ ownProps, mutate }) => ({
        submit: ({LastName, FirstName, BirthDate, Email, IsWorking, EducationLevelId, EducationLevelFinished, YearsOfExperience, DesiredSalary, ContractTypeId, SalaryTypeId, TechnicalSkillIds}) => 
            mutate({
                variables: { ApplicantId: ownProps.ApplicantId, LastName, FirstName, BirthDate, Email, IsWorking, EducationLevelId, EducationLevelFinished, YearsOfExperience, DesiredSalary, ContractTypeId, SalaryTypeId, TechnicalSkillIds },
                optimisticResponse: {
                    __typename: 'Mutation',
                    submitApplicant: {
                        __typename: 'Applicant',
                        ApplicantId: ownProps.ApplicantId,
                        LastName: LastName,
                        FirstName: FirstName,
                        BirthDate: BirthDate, 
                        Email: Email, 
                        IsWorking: IsWorking, 
                        EducationLevelId: EducationLevelId, 
                        EducationLevelFinished: EducationLevelFinished, 
                        YearsOfExperience: YearsOfExperience, 
                        DesiredSalary: DesiredSalary, 
                        ContractTypeId: ContractTypeId, 
                        SalaryTypeId: SalaryTypeId,
                        TechnicalSkillIds: TechnicalSkillIds
                    }
                }

            })

        }),
    options: {
        refetchQueries: [ 'ApplicantsGridQuery' ]
    }
    });
