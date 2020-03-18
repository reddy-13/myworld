import PropTypes from 'prop-types';
import faker from 'faker';
const genImage = (list, data = [], len) => {
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < list.length; j++) {
      //   console.log(list[j]);

      data.push({
        type: list[j],
        item: {
          id: i,
          image: faker.image.avatar(),
        },
      });
    }
  }
  return data;
};

genImage.PropTypes = {
  list: PropTypes.array,
  data: PropTypes.array,
  len: PropTypes.number,
};

export default genImage;
