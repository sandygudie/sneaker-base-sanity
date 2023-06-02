import {brands} from '../data'

export default {
  name: 'footwear',
  type: 'document',
  title: 'Footwear',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name',
    },
    {
      name: 'description',
      type: 'text',
      title: 'Description',
    },

    {
      name: 'price',
      type: 'string',
      title: 'Price',
    },
    {
      name: 'size',
      type: 'array',
      title: 'Size',
      of: [{type: 'string'}],
      options: {
        list: [
          {title: 'UK 2', value: 'UK 2'},
          {title: 'UK 2.5', value: 'UK 2.5'},
          {title: 'UK 3', value: 'UK 3'},
          {title: 'UK 3.5', value: 'UK 3.5'},
          {title: 'UK 4', value: 'UK 4'},
          {title: 'UK 4.5', value: 'UK 4.5'},
          {title: 'UK 5', value: 'UK 5'},
          {title: 'UK 5.5', value: 'UK 5.5'},
          {title: 'UK 6', value: 'UK 6'},
          {title: 'UK 6.5', value: 'UK 6.5'},
          {title: 'UK 7', value: 'UK 7'},
          {title: 'UK 7.5', value: 'UK 7.5'},
          {title: 'UK 8', value: 'UK 8'},
          {title: 'UK 8.5', value: 'UK 8.5'},
          {title: 'UK 9', value: 'UK 9'},
          {title: 'UK 9.5', value: 'UK 9.5'},
          {title: 'UK 10', value: 'UK 10'},
        ],
      },
    },
    {
      name: 'color',
      type: 'array',
      title: 'Color',
      of: [{type: 'string'}],
      options: {
        list: [
          {title: 'Red', value: 'Red'},
          {title: 'Blue', value: 'Blue'},
          {title: 'Black', value: 'Black'},
          {title: 'White', value: 'White'},
          {title: 'Green', value: 'Green'},
          {title: 'Orange', value: 'Orange'},
          {title: 'Gray', value: 'Gray'},
        ],
      },
    },
    {
      name: 'brand',
      type: 'string',
      title: 'Brand',
      options: {
        list: [...brands],
      },
    },
    {
      name: 'image',
      type: 'image',
      title: 'product-Image',
    },
    {
      name: 'gender',
      type: 'array',
      title: 'Gender',
      of: [{type: 'string'}],
      options: {
        list: [
          {title: 'Men', value: 'men'},
          {title: 'Women', value: 'women'},
          {title: 'Kids', value: 'kids'},
        ],
      },
    },
    {
      name: 'category',
      type: 'string',
      title: 'Category',
      options: {
        list: [
          {title: 'Sneaker', value: 'sneaker'},
          {title: 'Casual', value: 'casual'},
          {title: 'Flipflop', value: 'flipflop'},
          {title: 'Sandals', value: 'sandals'},
        ],
      },
    },
    {
      name: 'type',
      type: 'string',
      title: 'Type',
      options: {
        list: [
          {title: 'Running', value: 'running'},
          {title: 'Basketball', value: 'basketball'},
          {title: 'Casual', value: 'casual'},
        ],
      },
    },
    {
      name: 'timeline',
      type: 'string',
      title: 'Timeline',
      options: {
        list: [
          {title: 'Oldest', value: 'oldest'},
          {title: 'Newest', value: 'newest'},
        ],
      },
      invitialValue: {title: 'Newest', value: 'newest'},
    },
  ],
}
