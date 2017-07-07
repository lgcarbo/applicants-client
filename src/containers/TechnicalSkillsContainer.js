import MultipleSelectGroup from '../components/MultipleSelectGroup';
import { graphql, gql } from 'react-apollo';

export default graphql(gql`
    query TechnicalSkillsQuery {
        elements:TechnicalSkills {
            Id:TechnicalSkillId
            Description
        }
    }
`)(MultipleSelectGroup);
