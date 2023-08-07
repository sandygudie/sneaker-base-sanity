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
          {title: 'Red', value: 'Red'},
          {title: 'Blue', value: 'Blue'},
          {title: 'Black', value: 'Black'},
          {title: 'White', value: 'White'},
          {title: 'Green', value: 'Green'},
          {title: 'Orange', value: 'Orange'},
          {title: 'Grey', value: 'Grey'},
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
