import Link from 'next/link';

import Layout from '../components/layout';
import Seo from '../components/seo';

const NotFoundPage = () => (
  <Layout>
    <Seo title='ページが見つかりません' description='404 Not Found' />
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        height: '80vh',
      }}
    >
      <h1>404 Not Found</h1>
      <p>ページが見つかりません。</p>
      <Link href='/'>
        <a style={{ color: 'var(--color-primary)' }}>TOPへ戻る</a>
      </Link>
    </div>
  </Layout>
);

export default NotFoundPage;
