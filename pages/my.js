import React from 'react';
import styles from '../styles/My.module.css';
import Button from '@material-ui/core/Button';
import Layout from 'components/layout';

export default function My() {
  return (
    <Layout pathname="/my" wrapClass="my" title="个人中心">
      <Button variant="contained" color="primary">个人中心</Button>
    </Layout>
  )
}