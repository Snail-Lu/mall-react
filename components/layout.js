import Head from 'next/head';
import { BottomNavigation, BottomNavigationAction } from '@material-ui/core';
import PersonIcon from '@material-ui/icons/Person';
import HomeIcon from '@material-ui/icons/Home';
import CategoryIcon from '@material-ui/icons/Category';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { useRouter } from 'next/router';
import styles from 'styles/layout.module.css';

export default function Layout(props) {
  const {
    wrapClass = "", //页面容器class
    children,
    pathname,
    title = "H5商城",
  } = props;

  const router = useRouter();

  const handleChange = (event, newValue) => {
    router.push(newValue);
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        {children}
      </main>
      <BottomNavigation value={pathname} onChange={handleChange} showLabels>
        <BottomNavigationAction label="首页" value="/" icon={<HomeIcon />} />
        <BottomNavigationAction label="分类" value="/category" icon={<CategoryIcon />} />
        <BottomNavigationAction label="购物车" value="/cart" icon={<ShoppingCartIcon />} />
        <BottomNavigationAction label="我的" value="/my" icon={<PersonIcon />} />
      </BottomNavigation>
    </div>
  )
}