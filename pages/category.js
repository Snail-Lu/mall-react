import React from 'react';
import styles from '../styles/Category.module.css';
import Button from '@material-ui/core/Button';
import Layout from 'components/layout';

export default function Category() {
  return (
    <Layout pathname="/category" wrapClass="category" title="分类页">
      <Button variant="contained" color="primary">分类页</Button>
    </Layout>
  )
}