import ConfirmDeleteRedux from 'connectors/ConfirmDelete/ConfirmDeleteRedux';
import ConfirmDeleteMutation from 'connectors/ConfirmDelete/ConfirmDeleteMutation';
import ConfirmModal from 'components/ConfirmModal';
import { compose } from 'react-apollo';

export default compose(ConfirmDeleteRedux, ConfirmDeleteMutation)(ConfirmModal);