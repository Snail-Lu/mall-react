import React from 'react';
import styles from '../styles/My.module.css';
import { Button } from 'antd-mobile';
import Layout from 'components/layout';

export default function My() {
  return (
    <Layout pathname="/my" wrapClass="my" title="个人中心">
      <Button type="primary" inline>个人中心</Button>
    </Layout>
  )
}