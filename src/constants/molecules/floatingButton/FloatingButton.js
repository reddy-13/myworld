import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {
  StyleSheet,
  Animated,
  Dimensions,
  TouchableOpacity,
  LayoutAnimation,
  Platform,
  Keyboard,
  Image,
} from 'react-native';

// import {Icon} from '@constants/atoms/Icon';
import FloatingButtonItem from './FloatingButtonItem';

import {isIphoneX} from '@constants/utils/platform';
import {
  getTouchableComponent,
  getRippleProps,
} from '@constants/utils/touchable';
import {commonColors} from '@constants/utils/color';

const DEVICE_WIDTH = Dimensions.get('window').width;
const ACTION_BUTTON_SIZE = 56;

export class FloatingButton extends Component {
  constructor(props) {
    super(props);

    this.state = {
      active: false,
      keyboardHeight: 0,
      distanceToEdge: props.tabs
        ? Platform.OS === 'ios'
          ? isIphoneX()
            ? props.distanceToEdge + 30
            : props.distanceToEdge + 20
          : props.distanceToEdge + 60
        : props.distanceToEdge,
    };

    this.mainBottomAnimation = new Animated.Value(
      this.state.distanceToEdge + props.mainVerticalDistance,
    );
    this.actionsBottomAnimation = new Animated.Value(
      ACTION_BUTTON_SIZE +
        this.state.distanceToEdge +
        props.actionsPaddingTopBottom +
        props.mainVerticalDistance,
    );
    this.animation = new Animated.Value(0);
    this.actionsAnimation = new Animated.Value(0);
    this.visibleAnimation = new Animated.Value(props.visible ? 0 : 1);
    /*
     * this animation will fix an error on ReactNative (Android) where
     * interpolations with 0 and 1 don't work as expected.
     */
    this.fadeAnimation = new Animated.Value(props.visible ? 1 : 0);
  }

  componentDidMount() {
    const {openOnMount, listenKeyboard} = this.props;

    if (openOnMount) {
      this.animateButton();
    }

    if (listenKeyboard) {
      const showEvent =
        Platform.OS === 'ios' ? 'keyboardWillShow' : 'keyboardDidShow';
      const hideEvent =
        Platform.OS === 'ios' ? 'keyboardWillHide' : 'keyboardDidHide';
      this.keyboardWillShowListener = Keyboard.addListener(
        showEvent,
        this.onKeyboardShow,
      );
      this.keyboardWillHideListener = Keyboard.addListener(
        hideEvent,
        this.onKeyboardHideHide,
      );
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.visible !== this.props.visible) {
      if (nextProps.visible) {
        Animated.parallel([
          Animated.spring(this.visibleAnimation, {toValue: 0}),
          Animated.spring(this.fadeAnimation, {toValue: 1}),
        ]).start();
      }
      if (!nextProps.visible) {
        Animated.parallel([
          Animated.spring(this.visibleAnimation, {toValue: 1}),
          Animated.spring(this.fadeAnimation, {toValue: 0}),
        ]).start();
      }
    }
  }

  componentWillUnmount() {
    const {listenKeyboard} = this.props;

    if (listenKeyboard) {
      this.keyboardWillShowListener.remove();
      this.keyboardWillHideListener.remove();
    }
  }

  onKeyboardShow = e => {
    const {actionsPaddingTopBottom} = this.props;
    const {distanceToEdge} = this.state;
    const {height} = e.endCoordinates;

    Animated.parallel([
      Animated.spring(this.actionsBottomAnimation, {
        bounciness: 0,
        toValue:
          ACTION_BUTTON_SIZE +
          distanceToEdge +
          actionsPaddingTopBottom +
          height -
          (isIphoneX() ? 40 : 0),
        duration: 250,
      }),
      Animated.spring(this.mainBottomAnimation, {
        bounciness: 0,
        toValue: distanceToEdge + height - (isIphoneX() ? 40 : 0),
        duration: 250,
      }),
    ]).start();
  };

  onKeyboardHideHide = () => {
    const {actionsPaddingTopBottom} = this.props;
    const {distanceToEdge} = this.state;

    Animated.parallel([
      Animated.spring(this.actionsBottomAnimation, {
        bounciness: 0,
        toValue: ACTION_BUTTON_SIZE + distanceToEdge + actionsPaddingTopBottom,
        duration: 250,
      }),
      Animated.spring(this.mainBottomAnimation, {
        bounciness: 0,
        toValue: distanceToEdge,
        duration: 250,
      }),
    ]).start();
  };

  // getIcon = () => {
  //   const {iconName, image} = this.props;

  //   if (image) {
  //     return (
  //       <Image
  //         source={image}
  //         style={styles.imageStyle}
  //         resizeMode={'contain'}
  //       />
  //     );
  //   }
  //   return (
  //     <Icon
  //       name={iconName ? iconName : !this.state.active ? 'add' : 'close'}
  //       size={30}
  //       color={commonColors.white}
  //     />
  //   );
  // };

  reset = () => {
    Animated.spring(this.animation, {toValue: 0}).start();
    Animated.spring(this.actionsAnimation, {toValue: 0}).start();
    this.updateState(
      {
        active: false,
      },
      () => {
        if (this.props.onClose) {
          this.props.onClose();
        }
      },
    );
  };

  animateButton = () => {
    const {dismissKeyboardOnPress, onPress} = this.props;
    const {active} = this.state;

    if (dismissKeyboardOnPress) {
      Keyboard.dismiss();
    }

    if (onPress) {
      onPress();
      return;
    }

    if (!active) {
      Animated.spring(this.actionsAnimation, {toValue: 1}).start();

      // only execute it for the background to prevent extra calls
      LayoutAnimation.configureNext({
        duration: 180,
        create: {
          type: LayoutAnimation.Types.easeInEaseOut,
          property: LayoutAnimation.Properties.opacity,
        },
      });

      this.updateState(
        {
          active: true,
        },
        () => {
          if (this.props.onOpen) {
            this.props.onOpen();
          }
        },
      );
    } else {
      this.reset();
    }
  };

  renderMainButton() {
    const {color, tabs} = this.props;
    const {active, distanceToEdge} = this.state;

    const position = Platform.OS === 'android' ? 'right' : 'center';

    let animatedViewStyle = {
      transform: [
        {
          rotate: this.animation.interpolate({
            inputRange: [0, 1],
            outputRange: ['0deg', '45deg'],
          }),
        },
      ],
    };

    const Touchable = getTouchableComponent();
    const propStyles = {
      backgroundColor: !active ? color : commonColors.error,
      bottom: this.mainBottomAnimation,
    };

    if (position === 'right' && tabs) {
      propStyles[position] = 20;
    } else {
      propStyles[position] = distanceToEdge;
    }

    return (
      <Animated.View
        style={[
          styles.buttonContainer,
          styles[`${position}Button`],
          propStyles,
        ]}
        accessible={true}
        accessibilityLabel={'Floating Action Button'}>
        <Touchable
          {...getRippleProps(color)}
          style={styles.button}
          activeOpacity={0.85}
          onPress={this.animateButton}>
          <Animated.View
            style={[styles.buttonTextContainer, animatedViewStyle]}>
            {/* {this.getIcon()} */}
          </Animated.View>
        </Touchable>
      </Animated.View>
    );
  }

  renderActions() {
    const {actions, actionsPaddingTopBottom, tabs} = this.props;
    const {distanceToEdge} = this.state;

    const position = Platform.OS === 'android' ? 'right' : 'center';
    const {active, keyboardHeight} = this.state;

    if (!actions || actions.length === 0) {
      return undefined;
    }

    const animatedActionsStyle = {
      opacity: this.actionsAnimation.interpolate({
        inputRange: [0, 1],
        outputRange: [0, 1],
      }),
    };

    const actionsStyles = [
      styles.actions,
      styles[`${position}Actions`],
      animatedActionsStyle,
      {
        bottom: this.actionsBottomAnimation,
      },
    ];

    if (active) {
      actionsStyles.push(styles[`${position}ActionsVisible`]);
    }

    const sortedActions = actions.sort((a, b) => a.position - b.position);

    return (
      <Animated.View style={actionsStyles} pointerEvents="box-none">
        {sortedActions.map(action => {
          const textColor = action.textColor || action.actionsTextColor;
          const textBackground =
            action.textBackground || action.actionsTextBackground;

          return (
            <FloatingButtonItem
              paddingTopBottom={actionsPaddingTopBottom}
              distanceToEdge={distanceToEdge}
              key={action.name}
              textColor={textColor}
              textBackground={textBackground}
              {...action}
              position={position}
              active={active}
              onPress={action.onPress}
              tabs={tabs}
            />
          );
        })}
      </Animated.View>
    );
  }

  renderTappableBackground() {
    const {overlayColor} = this.props;

    // TouchableOpacity don't require a child
    return (
      <TouchableOpacity
        activeOpacity={1}
        style={[styles.overlay, {backgroundColor: overlayColor}]}
        onPress={this.handlePressBackdrop}
      />
    );
  }

  handlePressBackdrop = () => {
    const {onPressBackdrop} = this.props;
    if (onPressBackdrop) {
      onPressBackdrop();
    }
    this.reset();
  };

  updateState = (nextState, callback) => {
    const {onStateChange} = this.props;
    this.setState(nextState, () => {
      if (callback) {
        callback();
      }
      if (onStateChange) {
        onStateChange({
          isActive: this.state.active,
        });
      }
    });
  };

  render() {
    const {active} = this.state;
    const {showBackground} = this.props;

    return (
      <Animated.View
        pointerEvents="box-none"
        style={[styles.overlay, {backgroundColor: 'transparent'}]}>
        {active && showBackground && this.renderTappableBackground()}
        {this.renderActions()}
        {this.renderMainButton()}
      </Animated.View>
    );
  }
}

FloatingButton.propTypes = {
  actions: PropTypes.arrayOf(
    PropTypes.shape({
      color: PropTypes.string,
      icon: PropTypes.any,
      name: PropTypes.string.isRequired,
      text: PropTypes.string,
      textBackground: PropTypes.string,
      textColor: PropTypes.string,
      component: PropTypes.func,
      image: PropTypes.any,
    }),
  ),
  color: PropTypes.string,
  distanceToEdge: PropTypes.number,
  mainVerticalDistance: PropTypes.number,
  visible: PropTypes.bool,
  overlayColor: PropTypes.string,
  position: PropTypes.oneOf(['right', 'left', 'center']),
  showBackground: PropTypes.bool,
  openOnMount: PropTypes.bool,
  actionsPaddingTopBottom: PropTypes.number,
  iconHeight: PropTypes.number,
  iconWidth: PropTypes.number,
  listenKeyboard: PropTypes.bool,
  dismissKeyboardOnPress: PropTypes.bool,
  onPress: PropTypes.func,
  onClose: PropTypes.func,
  onOpen: PropTypes.func,
  onPressBackdrop: PropTypes.func,
  onStateChange: PropTypes.func,
  image: PropTypes.any,
  tabs: PropTypes.bool,
  iconName: PropTypes.string,
};

FloatingButton.defaultProps = {
  dismissKeyboardOnPress: false,
  listenKeyboard: false,
  actionsPaddingTopBottom: 8,
  visible: true,
  color: commonColors.primary,
  overlayColor: commonColors.overlay,
  position: 'right',
  distanceToEdge: 30,
  openOnMount: false,
  showBackground: true,
  iconHeight: 15,
  iconWidth: 15,
  mainVerticalDistance: 0,
  image: undefined,
  tabs: false,
};

const styles = StyleSheet.create({
  actions: {
    position: 'absolute',
    bottom: 85,
    zIndex: 10,
  },
  rightActions: {
    alignItems: 'flex-end',
    right: -1000, // this magic number will make always disspear the text from screen
  },
  leftActions: {
    alignItems: 'flex-start',
    left: -1000, // this magic number will make always disspear the text from screen
  },
  centerActions: {
    left: -1000,
  },
  rightActionsVisible: {
    right: 0,
  },
  leftActionsVisible: {
    left: 0,
  },
  centerActionsVisible: {
    left: DEVICE_WIDTH / 2 - 30,
  },
  overlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    top: 0,
    elevation: 0,
    zIndex: 0,
  },
  buttonContainer: {
    overflow: Platform.OS === 'ios' ? 'visible' : 'hidden',
    zIndex: 2,
    width: ACTION_BUTTON_SIZE,
    height: ACTION_BUTTON_SIZE,
    borderRadius: 28,
    alignItems: 'center',
    justifyContent: 'center',
    shadowOpacity: 0.35,
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowColor: commonColors.black,
    shadowRadius: 3,
    elevation: 5,
    position: 'absolute',
  },
  button: {
    zIndex: 3,
    width: ACTION_BUTTON_SIZE,
    height: ACTION_BUTTON_SIZE,
    borderRadius: 28,
    alignItems: 'center',
    justifyContent: 'center',
  },
  rightButton: {},
  leftButton: {},
  centerButton: {
    left: DEVICE_WIDTH / 2 - 28,
  },
  buttonTextContainer: {
    borderRadius: 28,
    width: ACTION_BUTTON_SIZE,
    height: ACTION_BUTTON_SIZE,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageStyle: {
    width: 30,
    height: 30,
  },
});
