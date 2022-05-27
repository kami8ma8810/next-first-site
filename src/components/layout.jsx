import Footer from './footer';
import Header from './header';

// Layoutタグをそのまま埋め込むため、中身はchildrenで渡す
const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
