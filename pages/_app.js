import "../styles/globals.scss";
import Script from "next/script";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
    return (
        <>
            <Head>
                <title>Wonder | 어쩌면 우리는 직업 그 이상</title>
                <meta property="og:title" content="Wonder" />
                <meta property="og:description" content="어쩌면 우리는 직업 그 이상" />
                <meta property="og:url" content="https://wonderkr.vercel.app/" />
                <meta
                    property="og:image"
                    content="https://wonderkr.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ftags.560726e3.png&w=1080&q=75"
                />
            </Head>
            <Script strategy="afterInteractive" src={`https://www.googletagmanager.com/gtag/js?id=G-H35M42X6VG`} />
            <Script
                id="gtag-init"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{
                    __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-H35M42X6VG', {
              page_path: window.location.pathname,
            });
          `,
                }}
            />
            <Component {...pageProps} />
        </>
    );
}

export default MyApp;
