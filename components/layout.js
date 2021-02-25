import Head from 'next/head';
import { TabBar, Icon } from 'antd-mobile';
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

  const handleChange = (path) => {
    router.push(path);
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
      
      <footer className={styles.footer}>
        <TabBar
          unselectedTintColor="#949494"
          tintColor="#33A3F4"
          barTintColor="white"
        >
          <TabBar.Item
            title="首页"
            key="/"
            icon={<span className="iconfont icon-home"></span>}
            selectedIcon={<span className="iconfont icon-home-selected"></span>}
            selected={pathname === '/'}
            onPress={()=>handleChange('/')}
          >
          </TabBar.Item>
          <TabBar.Item
            icon={<span className="iconfont icon-category"></span>}
            selectedIcon={<span className="iconfont icon-category-selected"></span>}
            title="分类"
            key="/category"
            selected={pathname === '/category'}
            onPress={()=>handleChange('/category')}
          >
          </TabBar.Item>
          <TabBar.Item
            icon={<span className="iconfont icon-cart"></span>}
            selectedIcon={<span className="iconfont icon-cart-selected"></span>}
            title="购物车"
            key="/cart"
            selected={pathname === '/cart'}
            onPress={()=>handleChange('/cart')}
          >
          </TabBar.Item>
          <TabBar.Item
            icon={<span className="iconfont icon-my"></span>}
            selectedIcon={<span className="iconfont icon-my-selected"></span>}
            title="我的"
            key="/my"
            selected={pathname === '/my'}
            onPress={()=>handleChange('/my')}
          >
          </TabBar.Item>
        </TabBar> 
      </footer>
    </div>
  )
}