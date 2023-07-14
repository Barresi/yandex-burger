import PropTypes from 'prop-types';
import style from './sample-content.module.scss';

const SampleContentConstructor = ({ type, text }) => {
     return (
          <li
               className={`${style.block} ${
                    type === 'top' ? style.block_top : type === 'bottom' ? style.block_bottom : ''
               }`}>
               {text}
          </li>
     );
};

SampleContentConstructor.propTypes = {
     type: PropTypes.string.isRequired,
     text: PropTypes.string.isRequired,
};

export default SampleContentConstructor;
