import Image from 'next/image';
import ReactMarkdown from 'react-markdown';
import Link from 'next/link';

import Layout from '../../components/layout';
import PrevNext from '../../components/prevNext';
import Seo from '../../components/seo';
import * as style from '../../styles/singleBlog.module.scss';
import { getAllBlogs, getSingleBlog } from '../../utils/mdQueries';

const SingleBlog = ({ frontmatter, markdownBody, prev, next }) => {
  const { title, date, excerpt, image } = frontmatter;
  return (
    <Layout>
      <Seo title={title} description={excerpt} />
      <div className={style.hero}>
        <div className={style.heroInner}>
          <Image
            src={image}
            alt='blog-image'
            height={1000}
            width={1000}
            layout={`raw`}
          />
        </div>
      </div>
      <div className={style.wrapper}>
        <div className={style.container}>
          <h1>{title}</h1>
          <p className={style.date}>
            <time>{date}</time>
          </p>
          <ReactMarkdown>{markdownBody}</ReactMarkdown>
					<div style={{ marginTop: '2em' }}>
          <div className={style.btnRev}>
            <Link href='/blog'>
              <a>一覧へ戻る</a>
            </Link>
          </div>
        </div>
        </div>
        <PrevNext prev={prev} next={next} />

      </div>
    </Layout>
  );
};

export default SingleBlog;

// URLの生成と登録をする（slugを生成）
export async function getStaticPaths() {
  const { orderedBlogs } = await getAllBlogs();

  // pathsで使うために配列に変換する
  const paths = orderedBlogs.map((orderedBlog) => `/blog/${orderedBlog.slug}`)
  return {
    paths: paths,
    fallback: false, //pathsに入っているslug以外のパス名は404にする
  };
}

// マークダウンデータを読み込む
export async function getStaticProps(context) {
  const { singleDocument } = await getSingleBlog(context);

  // ブログ記事のソート
  const { orderedBlogs } = await getAllBlogs();

  // 次の記事
  const prev = orderedBlogs.filter(
    (orderedBlog) => orderedBlog.frontmatter.id === singleDocument.data.id - 1
  );
  // 前の記事
  const next = orderedBlogs.filter(
    (orderedBlog) => orderedBlog.frontmatter.id === singleDocument.data.id + 1
  );

  return {
    props: {
      frontmatter: singleDocument.data,
      markdownBody: singleDocument.content,
      prev: prev,
      next: next,
    },
  };
}
