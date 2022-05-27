import Link from 'next/link';
import Image from 'next/image';

import * as style from '../styles/common.module.scss';

const Footer = () => {
  return (
    <footer className={style.footerWrapper}>
      <div className={style.insideContainer}>
        <a href='https://twitter.com/jookalubi24/'>
          <Image
            src='/images/twitter.svg'
            alt='twitter'
            width={40}
            height={40}
          />
        </a>
        <a href='https://onedarling.site/'>
          <Image
            src='/images/wordpress.svg'
            alt='wordpress'
            width={40}
            height={40}
          />
        </a>
        <hr />
        <div className={style.linkContainer}>
          <Link href='/'>
            <a>Top</a>
          </Link>
          <Link href='/blog'>
            <a>Blog</a>
          </Link>
          <Link href='/contact'>
            <a>Contact</a>
          </Link>
        </div>
        <p className={style.copyright}>
          &copy;{new Date().getFullYear()} 上かるび
        </p>
      </div>
    </footer>
  );
};

export default Footer;
