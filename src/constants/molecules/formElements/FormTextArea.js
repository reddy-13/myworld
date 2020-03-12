import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';

import {TextArea} from '@constants/atoms/TextArea';
import {Text} from '@constants/atoms/Text';
import {commonColors} from '@constants/utils/color';

export class FormTextArea extends Component {
  render() {
    const {label, ...otherProps} = this.props;

    return (
      <View style={styles.container}>
        <Text size="sub_heading" color={commonColors.darkGrey}>
          {label}
        </Text>
        <TextArea {...otherProps} />
      </View>
    );
  }
}

FormTextArea.propTypes = {
  label: PropTypes.string.isRequired,
  ...TextArea.propTypes,
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
});
