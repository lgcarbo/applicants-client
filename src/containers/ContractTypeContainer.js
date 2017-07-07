import SelectGroup from '../components/SelectGroup';
import { graphql, gql } from 'react-apollo';

export default graphql(gql`
    query ContractTypesQuery {
        elements:ContractTypes {
            Id:ContractTypeId
            Description
        }
    }
`)(SelectGroup);
