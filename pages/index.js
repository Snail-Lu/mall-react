import Head from 'next/head';
import React from 'react';
import styles from '../styles/Home.module.css';
import Button from '@material-ui/core/Button';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { BottomNavigation, BottomNavigationAction } from '@material-ui/core';
import FolderIcon from '@material-ui/icons/Folder';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';

export default function Home() {
  const [value, setValue] = React.useState('recents');
  const router = useRouter();

  const handleChange = (event, newValue) => {
    setValue(newValue);
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
      <BottomNavigation value={router.pathname} onChange={handleChange}>
        <Link href='/'>
          <BottomNavigationAction label="Recents" value="recents" icon={<RestoreIcon />} />
        </Link>
        <Link href="/category">
          <BottomNavigationAction label="Favorites" value="favorites" icon={<FavoriteIcon />} />
        </Link>
        <Link href="/cart">
          <BottomNavigationAction label="Nearby" value="nearby" icon={<LocationOnIcon />} />
        </Link>
        <Link href="/my">
          <BottomNavigationAction label="Folder" value="folder" icon={<FolderIcon />} />
        </Link>
      </BottomNavigation>
    </div>
  )
}
