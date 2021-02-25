import Head from 'next/head';
import React from 'react';
import styles from '../styles/Home.module.css';
import { Button } from 'antd-mobile';
import Layout from 'components/layout';

export default function Home() {
  return (
    <Layout pathname="/" wrapClass="home" title="首页">
      <Button type="primary" inline>首页</Button>
    </Layout>
  )
}
