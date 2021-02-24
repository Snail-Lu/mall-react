import Head from 'next/head';
import React from 'react';
import styles from '../styles/Home.module.css';
import Button from '@material-ui/core/Button';
import { useRouter } from 'next/router';
import { BottomNavigation, BottomNavigationAction } from '@material-ui/core';
import PersonIcon from '@material-ui/icons/Person';
import HomeIcon from '@material-ui/icons/Home';
import CategoryIcon from '@material-ui/icons/Category';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

export default function Home() {
  const router = useRouter();

  const handleChange = (event, newValue) => {
    router.push(newValue);
  };
  return (
    <div className={styles.container}>
      <Head>
        <title>H5商城</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Button variant="contained" color="primary">
          首页
        </Button>
      </main>
      <BottomNavigation value='/' onChange={handleChange} showLabels>
        <BottomNavigationAction label="首页" value="/" icon={<HomeIcon />} />
        <BottomNavigationAction label="分类" value="/category" icon={<CategoryIcon />} />
        <BottomNavigationAction label="购物车" value="/cart" icon={<ShoppingCartIcon />} />
        <BottomNavigationAction label="我的" value="/my" icon={<PersonIcon />} />
      </BottomNavigation>
    </div>
  )
}
