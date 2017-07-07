import SelectGroup from '../components/SelectGroup';
import { graphql, gql } from 'react-apollo';

export default graphql(gql`
    query SalaryTypesQuery {
        elements:SalaryTypes {
            Id:SalaryTypeId
            Description
        }
    }
`)(SelectGroup);
