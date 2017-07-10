import React from 'react';
import PropTypes from 'prop-types';
import FlatButton from 'material-ui/FlatButton';
import ImageEye from 'material-ui/svg-icons/image/remove-red-eye';
import get from 'lodash.get';
import withState from 'recompose/withState';

const EnhanceTextField = withState('shown', 'setShown', false);
const HiddenTextField = EnhanceTextField(
  ({ source, record = {}, elStyle, shown, setShown }) => {
    const fieldValue = get(record, source);

    return (
      <span style={elStyle}>
        {shown ? fieldValue : fieldValue.replace(/./g, '•')}
        <FlatButton
          icon={<ImageEye />}
          style={{ minWidth: '36px', marginLeft: '5px' }}
          onClick={() => setShown(shown => !shown)}
        />
      </span>
    );
  }
);

HiddenTextField.propTypes = {
  addLabel: PropTypes.bool,
  elStyle: PropTypes.object,
  label: PropTypes.string,
  record: PropTypes.object,
  source: PropTypes.string.isRequired
};

HiddenTextField.defaultProps = {
  addLabel: true
};

export default HiddenTextField;
