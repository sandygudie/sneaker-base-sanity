import {brands} from '../data'

export default {
  name: 'accessories',
  type: 'document',
  title: 'Accessories',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name',
    },
    {
      name: 'price',
      type: 'string',
      title: 'Price',
    },
    {
      name: 'description',
      type: 'text',
      title: 'Description',
    },
    {
      name: 'size',
      type: 'array',
      title: 'Size',
      of: [{type: 'string'}],
      options: {
        list: [
          {title: 'XS', value: 'XS'},
          {title: 'S', value: 'S'},
          {title: 'M', value: 'M'},
          {title: 'L', value: 'L'},
          {title: 'XL', value: 'XL'},
          {title: '2XL', value: '2XL'},
          {title: '3XL', value: '3XL'},
          {title: 'OS', value: 'OS'},
        ],
      },
    },
    {
      name: 'category',
      type: 'string',
      title: 'Category',
      options: {
        list: [
          {title: 'Caps', value: 'caps'},
          {title: 'Bags', value: 'bags'},
          {title: 'Balls', value: 'balls'},
          {title: 'Socks', value: 'socks'},
          {title: 'Guards', value: 'guard'},
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
          {title: 'Red', value: 'red'},
          {title: 'Blue', value: 'blue'},
          {title: 'Black', value: 'black'},
          {title: 'White', value: 'white'},
          {title: 'Green', value: 'green'},
          {title: 'Orange', value: 'orange'},
          {title: 'Pink', value: 'pink'},
          {title: 'brown', value: 'brown'},
          {title: 'Gold', value: 'gold'},
          {title: 'Yellow', value: 'yellow'},
          {title: 'Grey', value: 'grey'},
          {title: 'mixed', value: 'mixed'},
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
      name: 'timeline',
      type: 'string',
      title: 'Timeline',
      options: {
        list: [
          {title: 'Latest', value: 'latest'},
          {title: 'Sales', value: 'sales'},
        ],
      },
    },
  ],
}
