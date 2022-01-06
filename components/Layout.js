import Head from 'next/head';
import Header from './Header';
import Search from './Search';

const Layout = ({ title, keywords, description, children }) => {
  return (
    <div>
      <Head>
        <title>{title} </title>
        <meta name="keywords" content={keywords} />
        <meta name="keywords" content={description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Search />
      <main className="container mx-auto my-7">{children}</main>
    </div>
  );
};

Layout.defaultProps = {
  title: 'welcome to DevSpace',
  keywords: 'Development, coding, programming',
  description: 'the best info and news in development',
};

export default Layout;
