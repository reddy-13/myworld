import React, {Component} from 'react';
import {TouchableOpacity, StyleSheet, Platform, Image} from 'react-native';
import PropTypes from 'prop-types';
import {Text} from '@constants/atoms/Text';
import {Icon} from '@constants/atoms/Icon';
import {commonColors} from '@constants/utils/color';

export class PillItem extends Component {
  render() {
    const {
      label,
      activeColor,
      inactiveColor,
      children,
      active,
      ...otherProps
    } = this.props;

    let color;

    if (Platform.OS === 'android') {
      color = active ? activeColor : inactiveColor;
    } else {
      color = active ? commonColors.white : activeColor;
    }

    let newChildren;

    if (children) {
      newChildren = React.Children.map(children, child =>
        child && child.type === Text
          ? React.cloneElement(child, {
              ...child.props,
              color,
              size: 'footnote',
            })
          : child && child.type === Icon
          ? React.cloneElement(child, {
              ...child.props,
              size: 15,
              color,
              style: {...child.props.style, marginRight: 5},
            })
          : child && child.type === Image
          ? React.cloneElement(child, {
              ...child.props,
              style: {
                ...child.props.style,
                width: 15,
                height: 15,
                marginRight: 5,
              },
            })
          : null,
      );
    }

    if (Platform.OS === 'android') {
      return (
        <TouchableOpacity
          style={[styles.containerAndroid, {borderBottomColor: color}]}
          {...otherProps}>
          {newChildren && newChildren}
        </TouchableOpacity>
      );
    }
    return (
      <TouchableOpacity
        style={[
          styles.containerIos,
          {backgroundColor: active ? activeColor : 'transparent'},
        ]}
        {...otherProps}>
        {newChildren && newChildren}
      </TouchableOpacity>
    );
  }
}

PillItem.propTypes = {
  activeColor: PropTypes.string,
  inactiveColor: PropTypes.string,
  active: PropTypes.bool,
  ...TouchableOpacity.propTypes,
};

PillItem.defaultProps = {
  activeColor: Platform.OS === 'android' ? commonColors.primary : '#0a60ff',
  inactiveColor: '#adadad',
  active: false,
};

const styles = StyleSheet.create({
  containerAndroid: {
    flex: 1,
    flexDirection: 'row',
    borderBottomWidth: 1.5,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 5,
    paddingBottom: 10,
  },
  containerIos: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 5,
  },
});
