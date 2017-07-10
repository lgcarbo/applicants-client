import { compose } from 'react-apollo';
import ApplicantsGrid from  'components/ApplicantsGrid'
import GridQuery from 'connectors/Grid/GridQuery';
import GridRedux from 'connectors/Grid/GridRedux';

export default compose(GridQuery, GridRedux)(ApplicantsGrid);