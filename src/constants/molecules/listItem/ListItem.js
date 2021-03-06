import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  Platform,
} from 'react-native';
import PropTypes from 'prop-types';

import {Text} from '@constants/atoms/Text';
import {Icon} from '@constants/atoms/Icon';
import {commonColors} from '@constants/utils/color';
import {deviceVariables} from '@constants/variables/deviceVariables';
import {Thumbnail} from '@constants/atoms/Thumbnail';

export class ListItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded: false,
    };
  }

  render() {
    const {
      title,
      description,
      image,
      onPress,
      block,
      backgroundColor,
      secondary,
      rounded,
      ...otherProps
    } = this.props;
    const {expanded} = this.state;

    const children = React.Children.map(this.props.children, child =>
      child
        ? React.cloneElement(child, {...child.props, secondary: true})
        : null,
    );

    const listItemBackColor = secondary
      ? commonColors.secondaryBackground
      : backgroundColor;

    const listItemStyle = block
      ? [styles.containerBlock, {backgroundColor: listItemBackColor}]
      : [styles.container, {backgroundColor: listItemBackColor}];

    const onListItemTap = children
      ? this.expandListItem
      : onPress
      ? onPress
      : undefined;

    return (
      <View style={{width: '100%'}}>
        <TouchableOpacity
          style={listItemStyle}
          disabled={!onListItemTap}
          onPress={onListItemTap}
          {...otherProps}>
          {image && rounded && (
            <View style={styles.imageContainer}>
              <Thumbnail {...image} rounded style={{marginLeft: 10}} />
            </View>
          )}
          {image && !rounded && (
            <View style={styles.imageContainer}>
              <Thumbnail {...image} customSize={80} />
            </View>
          )}
          <View style={styles.textContainer}>
            <Text size="h6" color={commonColors.darkGrey} bold>
              {title}
            </Text>
            {description && (
              <Text size="sub_heading" color={commonColors.lightGrey}>
                {description}
              </Text>
            )}
          </View>
          <View style={styles.imageContainer}>
            {children && (
              <Icon
                name={
                  expanded
                    ? Platform.OS === 'ios'
                      ? 'arrow-up'
                      : 'arrow-dropup'
                    : Platform.OS === 'ios'
                    ? 'arrow-down'
                    : 'arrow-dropdown'
                }
                size={20}
                color={commonColors.inputGrey}
              />
            )}
          </View>
        </TouchableOpacity>
        {expanded && children}
      </View>
    );
  }

  expandListItem = () => {
    this.setState({expanded: !this.state.expanded});
  };
}

ListItem.propTypes = {
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  description: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  image: PropTypes.shape({
    ...Thumbnail.propTypes,
  }),
  block: PropTypes.bool,
  backgroundColor: PropTypes.string,
  secondary: PropTypes.bool,
  rounded: PropTypes.bool,
  ...TouchableOpacity.propTypes,
};

ListItem.defaultProps = {
  backgroundColor: commonColors.white,
  secondary: false,
  block: false,
  rounded: true,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    ...Platform.select({
      android: {
        borderWidth: 0.5,
        borderColor: commonColors.lightGrey,
      },
      ios: {
        borderTopWidth: 0.5,
        borderBottomWidth: 0.5,
        borderTopColor: commonColors.lightGrey,
        borderBottomColor: commonColors.lightGrey,
      },
    }),
    paddingRight: 5,
  },
  containerBlock: {
    width: deviceVariables.width,
    flex: 1,
    flexDirection: 'row',
    borderTopWidth: 0.5,
    borderBottomWidth: 0.5,
    borderTopColor: commonColors.lightGrey,
    borderBottomColor: commonColors.lightGrey,
    paddingRight: 15,
  },
  textContainer: {
    flex: 3,
    flexDirection: 'column',
    padding: 15,
    alignItems: 'flex-start',
  },
  imageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
