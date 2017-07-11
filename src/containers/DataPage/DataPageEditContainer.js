import { compose } from 'react-apollo';
import DataPage from 'components/DataPage';
import DataPageQuery from 'connectors/DataPage/DataPageQuery';
import DataPageMutation from 'connectors/DataPage/DataPageMutation';
import DataPageRedux from 'connectors/DataPage/DataPageRedux';

export default compose(DataPageRedux, DataPageQuery, DataPageMutation)(DataPage);