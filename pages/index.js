import Head from 'next/head';
import React from 'react';
import styles from '../styles/Home.module.css';
import Button from '@material-ui/core/Button';
import { BottomNavigation, BottomNavigationAction } from '@material-ui/core';
import FolderIcon from '@material-ui/icons/Folder';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';

export default function Home() {
  const [value, setValue] = React.useState('recents');

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
          你好，世界
        </Button>
      </main>
      <BottomNavigation value={value} onChange={handleChange}>
        <BottomNavigationAction label="Recents" value="recents" icon={<RestoreIcon />} />
        <BottomNavigationAction label="Favorites" value="favorites" icon={<FavoriteIcon />} />
        <BottomNavigationAction label="Nearby" value="nearby" icon={<LocationOnIcon />} />
        <BottomNavigationAction label="Folder" value="folder" icon={<FolderIcon />} />
      </BottomNavigation>
    </div>
  )
}
