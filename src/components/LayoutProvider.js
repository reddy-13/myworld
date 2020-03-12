import {GridLayoutProvider} from 'recyclerlistview-gridlayoutprovider';
const MAX_SPAN = 3;
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
            return 1;
          case 'ITEM_SPAN_2':
            return 2;
          case 'ITEM_SPAN_3':
            return 3;
        }
      },
      index => {
        return 100;
      },
    );
  }
}
