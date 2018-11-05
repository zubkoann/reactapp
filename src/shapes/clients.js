import PropTypes from 'prop-types';

const clientShape = PropTypes.shape({
  id:PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
})
export default clientShape;