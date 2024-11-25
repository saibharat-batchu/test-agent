import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Script from 'next/script';

function init() {
  console.log("test init");
  initEmbeddedMessaging();
}
export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Script
        id="embedded-messaging-init"
        strategy="lazyOnload"
        dangerouslySetInnerHTML={{
          __html: `
            function initEmbeddedMessaging() {
              try {
                embeddedservice_bootstrap.settings.language = 'en_US'; // For example, enter 'en' or 'en-US'

                embeddedservice_bootstrap.init(
                  '00Dbm00000DxzG5',
                  'test_agent',
                  'https://dbm00000dxzg5eaj-dev-ed.develop.my.site.com/ESWtestagent1732560051667',
                  {
                    scrt2URL: 'https://dbm00000dxzg5eaj-dev-ed.develop.my.salesforce-scrt.com'
                  }
                );
              } catch (err) {
                console.error('Error loading Embedded Messaging: ', err);
              }
            };
          `,
        }}
      />
      <Script
        src="https://dbm00000dxzg5eaj-dev-ed.develop.my.site.com/ESWtestagent1732560051667/assets/js/bootstrap.min.js"
        strategy="lazyOnload"
        onLoad={() => {
          init();
        }}
      />

      <main>
        Hello world
      </main>

      <footer>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel" className={styles.logo} />
        </a>
      </footer>

      <style jsx>{`
        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        footer img {
          margin-left: 0.5rem;
        }
        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
          text-decoration: none;
          color: inherit;
        }
        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family:
            Menlo,
            Monaco,
            Lucida Console,
            Liberation Mono,
            DejaVu Sans Mono,
            Bitstream Vera Sans Mono,
            Courier New,
            monospace;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family:
            -apple-system,
            BlinkMacSystemFont,
            Segoe UI,
            Roboto,
            Oxygen,
            Ubuntu,
            Cantarell,
            Fira Sans,
            Droid Sans,
            Helvetica Neue,
            sans-serif;
        }
        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
}
