import React, {Component} from 'react';
import * as PropTypes from 'prop-types';
import {connect} from 'react-redux';
import classNames from 'classnames';

import * as clientsAction from '../../actions/clients';
import {getFilteredClientsList, getCurrentViewableClientId} from '../../selectors/clients';
import clientShape from '../../shapes/clients';
import './style.scss';
// const ClientsList =({ clientsList }) =>(
//     <ul className="CliensList">
//       {clientsList.map(( client, index) => (
//           <li className="ClientsList-item" key ={index}>
//           <strong>{client.email}</strong>
//             <button type="button">Edit</button>
//           </li>
//       ))}
//     </ul>
// );
class ClientsList extends Component {
  static propTypes = {
    setEditableClientById: PropTypes.func.isRequired,
    setViewableClientById: PropTypes.func.isRequired,
    clientsList: PropTypes.arrayOf(clientShape).isRequired,
    currentViewableClientId: PropTypes.string,
  };
  static defaultProps = {
    currentViewableClientId: null,
  }
  handleEditClick = event => {
    event.stopPropagation();//не дает всплыть событию
    const {target} = event;
    const {setEditableClientById} = this.props;
    setEditableClientById(target.dataset.clientId);
  };

  handleShowClick = ({target}) => {
    const {setViewableClientById} = this.props;
    setViewableClientById(target.dataset.clientId);
  };

  render() {
    console.log('Render client list');
    const {clientsList, currentViewableClientId} = this.props;

    return (
        <ul className="ClientsList">
          {clientsList.map(({id, email}) => {
            const listItemClassName = classNames('ClientsList-item', {
              'isActive': id === currentViewableClientId,
            });
            return (
                <li
                    className={listItemClassName}
                    key={id}
                    data-client-id={id}
                    onClick={this.handleShowClick}
                >
                  <strong
                      key={id}
                      data-client-id={id}
                      onClick={this.handleShowClick}
                  >{email}</strong>
                  <button type="button"
                          data-client-id={id}
                          onClick={this.handleEditClick}>
                    Edit
                  </button>
                </li>
            );
          })}
        </ul>
    )
  }
}


const mapStateToProps = state => ({
  clientsList: getFilteredClientsList(state),
  currentViewableClientId: getCurrentViewableClientId(state),
});

// без selector
// const mapStateToProps = state => ({
//   clientsList: state.clients.get('list').toJS(),
// });

// без immutable
// const mapStateToProps = state => ({
//   clientsList: state.clients.list,
// });
// коннектим компонент к Store.
export default connect(
    mapStateToProps,
    clientsAction,
    // {setEditableClientById: clientsAction.setEditableClientById}
)(ClientsList);


