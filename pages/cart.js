import React from 'react';
import styles from '../styles/Cart.module.css';
import Button from '@material-ui/core/Button';
import Layout from 'components/layout';

export default function Cart() {
  return (
    <Layout pathname="/cart" wrapClass="cart" title="购物车">
      <Button variant="contained" color="primary">购物车页</Button>
    </Layout>
  )
}