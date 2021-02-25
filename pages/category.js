import React from 'react';
import styles from '../styles/Category.module.css';
import { Button } from 'antd-mobile';
import Layout from 'components/layout';

export default function Category() {
  return (
    <Layout pathname="/category" wrapClass="category" title="分类页">
      <Button type="primary" inline>分类页</Button>
    </Layout>
  )
}