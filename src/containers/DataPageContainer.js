import { connect } from 'react-redux';
import { gql, graphql, compose } from 'react-apollo';
import DataPage from '../components/DataPage';

const DataPageWithData = graphql(gql`
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
`, { options: ({ ApplicantId }) => ( { variables: { ApplicantId } } ) });

const MutateDataPage = graphql(gql`
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

const mapStateToProps = (state) => {
    return { ApplicantId: state.page.selectedApplicantId }
};

//export default connect(mapStateToProps)(DataPageWithData);

export default compose(connect(mapStateToProps), DataPageWithData, MutateDataPage)(DataPage);