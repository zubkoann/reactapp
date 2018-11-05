import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
// connect это HOC он принимает 2 функции  mapDispatchToProps и mapStateToProps
// export default connect(mapStateToProps, mapDispatchToProps,)(ClientForm);
import './style.scss';
import * as PropTypes from 'prop-types';
import * as clientsActions from '../../actions/clients';
import {getEditableClient} from "../../selectors/clients";

class ClientForm extends PureComponent {
  static propTypes = {
    addClient: PropTypes.func.isRequired,
    updateEditableClient: PropTypes.func.isRequired,
    resetEditableClient: PropTypes.func.isRequired,
    updateClientById: PropTypes.func.isRequired,
    editableClient: PropTypes.shape({
      id: PropTypes.string,
      email: PropTypes.string.isRequired,
    }).isRequired,
  };
  handleChange = ({target: {name, value}}) => {
    const {updateEditableClient} = this.props;
    updateEditableClient({
      [name]:value,
    })
  };
  handleSubmit = (event) => {
    event.preventDefault();
    const {
      editableClient,
      addClient,
      resetEditableClient,
      updateClientById
    }=this.props;
    if(editableClient.id === null){
      addClient(editableClient);
    } else {
      updateClientById(editableClient);
    }
    resetEditableClient();
  };
  render() {
    const {editableClient: {email}} = this.props;
    return (
        <form action="/" className="ClientForm" onSubmit={this.handleSubmit}>
          <fieldset className="ClientForm-fieldSet">
            <div className="ClientForm-field">
              <label htmlFor="clientEmail">Email: </label>
              <input
                  type="email"
                  name="email"
                  id="clientEmail"
                  value={email}
                  onChange={this.handleChange}
              />
            </div>
            <button type="submit"> submit</button>
          </fieldset>
        </form>
    )
  }
}

// const ClientForm = ({handleSubmit}) => (
//     <form action="/" className="ClientForm" onSubmit={handleSubmit}>
//       <fieldset className="ClientForm-fieldSet">
//         <div className="ClientForm-field">
//           <label htmlFor="clientEmail">Email</label>
//           <input type="email" name="email" id="clientEmail"/>
//         </div>
//         <button type="submit"> submit</button>
//       </fieldset>
//     </form>
// );
// const mapStateToProps = (dispatch) => { }
// const mapDispatchToProps = (dispatch) => {
//   return {
//     handleSubmit: event => {
//       event.preventDefault();
//       const email = event.target['email'].value;
//       dispatch(clientsActions.addClient({
//         email,
//       }));
//     },
//   };
// };

const mapStateToProps = state =>({
  editableClient: getEditableClient(state),
})

// без selector
// const mapStateToProps = state =>({
//   editableClient: state.clients.get('editableClient').toJS(),
// })

// без immutable
// const mapStateToProps = state =>({
//   editableClient: state.clients.editableClient,
// })

// const mapDispatchToProps = (dispatch) => {
//   return{
//     addClient: (payload)=>{
//       dispatch(clientsActions.addClient(payload));
//     },
//     updateEditableClient: (payload)=>{
//       dispatch(clientsActions.updateEditableClient(payload));
//     },
//   };
// };

export default connect(
    mapStateToProps,
    clientsActions,
)(ClientForm);
//
// export default connect(
//     mapStateToProps,
//     mapDispatchToProps,
// )(ClientForm);

// А можно так и не писать функцию mapDispatchToProps
// export default connect(
//     null,
//     clientsActions,
// )(ClientForm);