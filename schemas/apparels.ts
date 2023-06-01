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
          {title: 'Casual', value: 'casual'},
          {title: 'Joggers', value: 'joggers'},
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
          {title: 'Casual', value: 'casual'},
        ],
      },
    },
    {
      name: 'timeline',
      type: 'string',
      title: 'TImeline',
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
