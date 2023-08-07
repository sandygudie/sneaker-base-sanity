import {brands} from '../data'

export default {
  name: 'apparels',
  type: 'document',
  title: 'Apparels',
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
          {title: 'Brown', value: 'brown'},
          {title: 'Neutral', value: 'neutral'},
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
          {title: 'Jersey', value: 'Jersey'},
          {title: 'Shirts', value: 'Shirts'},
          {title: 'Joggers', value: 'joggers'},
          {title: 'Shorts', value: 'Shorts'},
          {title: 'Sport', value: 'sport'},

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
          {title: 'Training', value: 'training'},
         

        ],
      },
      hidden: ({parent}: any) => parent.category !== 'sport',
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
