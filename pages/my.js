import React from 'react';
import styles from '../styles/My.module.scss';
import { List, Grid, Card } from 'antd-mobile';
import Layout from 'components/layout';

const Item = List.Item;
const Brief = Item.Brief;

const data = Array.from(new Array(4)).map((_val, i) => ({
  icon: 'https://gw.alipayobjects.com/zos/rmsportal/nywPmnTAvTmLusPxHPSu.png',
  text: `name${i}`,
}));

export default function My() {
  return (
    <Layout pathname="/my" wrapClass="my" title="个人中心">
      <List>
        <Item
          className={styles.list_item}
          arrow="horizontal"
          thumb={<span className={`iconfont icon-my ${styles.avatar}`}></span>}
          multipleLine
          onClick={() => {}}
        >
          罗峰 <Brief>战神级武者</Brief>
        </Item>
      </List>

      <Card className={styles.order_card}>
        <Card.Header
          title="我的订单"
          extra={<span>查看全部</span>}
        />
        <Card.Body>
          <Grid data={data} activeStyle={false} hasLine={false} />
        </Card.Body>
      </Card>

      <Card className={styles.order_card}>
        <Card.Header
          title="我的服务"
        />
        <Card.Body>
          <Grid data={data} activeStyle={false} hasLine={false} />
        </Card.Body>
      </Card>
    </Layout>
  )
}