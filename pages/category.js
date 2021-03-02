import React, { Component } from 'react';
import styles from '../styles/Category.module.css';
import { Menu } from 'antd-mobile';
import Layout from 'components/layout';

export default class Category extends Component {
  constructor(props) {
    super(props);
    this.state = {
      initData: [
        {
          value: '1',
          label: 'Food',
          children: [
            {
              label: 'All Foods',
              value: '1',
              disabled: false,
            },
            {
              label: 'Chinese Food',
              value: '2',
            }, {
              label: 'Hot Pot',
              value: '3',
            }, {
              label: 'Buffet',
              value: '4',
            }, {
              label: 'Fast Food',
              value: '5',
            }, {
              label: 'Snack',
              value: '6',
            }, {
              label: 'Bread',
              value: '7',
            }, {
              label: 'Fruit',
              value: '8',
            }, {
              label: 'Noodle',
              value: '9',
            }, {
              label: 'Leisure Food',
              value: '10',
            }],
        }, {
          value: '2',
          label: 'Supermarket',
          children: [
            {
              label: 'All Supermarkets',
              value: '1',
            }, {
              label: 'Supermarket',
              value: '2',
              disabled: true,
            }, {
              label: 'C-Store',
              value: '3',
            }, {
              label: 'Personal Care',
              value: '4',
            }],
        },
        {
          value: '3',
          label: 'Extra',
          isLeaf: true,
          children: [
            {
              label: 'you can not see',
              value: '1',
            },
          ],
        },
      ],
    };
  }
  render() {
    const { initData } = this.state;
    return (
      <Layout pathname="/category" wrapClass="category" title="分类页">
        <Menu
          className="foo-menu"
          data={initData}
          value={['1', '3']}
          onChange={this.onChange}
          height={600}
        />
      </Layout>
    )
  }
}