import React from 'react';
import styles from '../styles/Category.module.css';
import Button from '@material-ui/core/Button';
import { BottomNavigation, BottomNavigationAction } from '@material-ui/core';
import PersonIcon from '@material-ui/icons/Person';
import HomeIcon from '@material-ui/icons/Home';
import CategoryIcon from '@material-ui/icons/Category';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { useRouter } from 'next/router';

export default function Category() {
    const router = useRouter();

    const handleChange = (event, newValue) => {
      router.push(newValue)
    };
    return (
        <div className={styles.container}>
            <main className={styles.main}>
                <Button variant="contained" color="primary">
                    分类页
                </Button>
            </main>
            <BottomNavigation value="/category" onChange={handleChange} showLabels>
                <BottomNavigationAction label="首页" value="/" icon={<HomeIcon />} />
                <BottomNavigationAction label="分类" value="/category" icon={<CategoryIcon />} />
                <BottomNavigationAction label="购物车" value="/cart" icon={<ShoppingCartIcon />} />
                <BottomNavigationAction label="我的" value="/my" icon={<PersonIcon />} />
            </BottomNavigation>
        </div>
    )
}