import SelectGroup from '../components/SelectGroup';
import { graphql, gql } from 'react-apollo';

export default graphql(gql`
    query EducationLevelsQuery {
        elements:EducationLevels {
            Id:EducationLevelId
            Description
        }
    }
`)(SelectGroup);
