import Link from 'next/link';
import Image from 'next/image';

import Layout from '../components/layout';
import Seo from '../components/seo';
import * as style from '../styles/blog.module.scss';
import { getAllBlogs, blogsPerPage } from '../utils/mdQueries';

const Blog = ({ blogs }) => {
  return (
    <Layout>
      <Seo
        title='BLOG｜おいしい焼肉が食べたい'
        description='部位ごとの焼き方をご紹介'
      />
      <div className={style.wrapper}>
        <div className={style.container}>
          <h1>Blog</h1>
          <p>焼肉についての情報をお届けします</p>
          {blogs.map((blog, index) => {
            // 分割代入でリファクタリング
            const { title, excerpt, date, image } = blog.frontmatter;
            return (
              <div key={index} className={style.blogCard}>
                <div className={style.textContainer}>
                  <h3>{title}</h3>
                  <p>{excerpt}</p>
                  <p className={style.date}>
                    <time>{date}</time>
                  </p>
                  <Link href={`/blog/${blog.slug}`}>
                    <a>Read More</a>
                  </Link>
                </div>
                <div className={style.cardImg}>
                  <Image
                    src={image}
                    alt='card-image'
                    height={300}
                    width={1000}
                    quality={90}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Layout>
  );
};

export default Blog;

export async function getStaticProps() {
  const { orderedBlogs } = await getAllBlogs();

  const limitedBlogs = orderedBlogs.slice(0, blogsPerPage);

  return {
    props: {
      blogs: limitedBlogs,
    },
  };
}
