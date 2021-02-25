import React from 'react';
import styles from '../styles/Cart.module.css';
import { Button } from 'antd-mobile';
import Layout from 'components/layout';

export default function Cart() {
  return (
    <Layout pathname="/cart" wrapClass="cart" title="购物车">
      <Button type="primary" inline>购物车页</Button>
    </Layout>
  )
}