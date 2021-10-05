import Link from "next/link";
import Head from "next/head";

const MainLayout = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="keywords" content="blog, post" />
        <meta name="description" content="This is blog" />
        <meta charset="utf-8" />
      </Head>
      <nav>
        {" "}
        <div>
          <Link href="/">
            <a>Main</a>
          </Link>
         
          <Link href="/posts/new">
            <a>newPost</a>
          </Link>
        </div>
      </nav>
      <main>{children}</main>;
    </>
  );
};

export default MainLayout;
