import {Dimensions} from 'react-native';
import {GridLayoutProvider} from 'recyclerlistview-gridlayoutprovider';
const {width, height} = Dimensions.get('window');
const MAX_SPAN = 4;
export default class LayoutProvider extends GridLayoutProvider {
  constructor(props) {
    super(
      MAX_SPAN,
      index => {
        return props.getDataForIndex(index).type;
      },
      index => {
        let type = props.getDataForIndex(index).type;
        switch (type) {
          case 'ITEM_SPAN_1':
            return 4;
          case 'ITEM_SPAN_2':
            return 2;
          case 'ITEM_SPAN_3':
            return 2;
          case 'ITEM_SPAN_4':
            return 2;
          case 'ITEM_SPAN_5':
            return 2;
        }
      },
      index => {
        let type = props.getDataForIndex(index).type;
        if (type === 'ITEM_SPAN_1') {
          return width / 2;
        }
        return width / 4;
      },
    );
  }
}
