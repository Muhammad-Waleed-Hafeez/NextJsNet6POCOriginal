import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <p>Welcome to your new single-page application, built with:</p>
          <ul><li><a className={styles.builtAspApp} href='https://get.asp.net/'>ASP.NET Core</a> and <a className={styles.builtAspApp} href='https://msdn.microsoft.com/en-us/library/67ef8sbd.aspx'>C#</a> for cross-platform server-side code</li>
          <li><a className={styles.builtAspApp} href='https://facebook.github.io/react/'>React</a> for client-side code</li>
          <li><a className={styles.builtAspApp} href='http://getbootstrap.com/'>Bootstrap</a> for layout and styling</li>
        </ul>
        <p>To help you get started, we have also set up:</p>
        <ul>
          <li><strong>Client-side navigation</strong>. For example, click <em>Counter</em> then <em>Back</em> to return here.</li>
          <li><strong>Development server integration</strong>. In development mode, the development server from <code>create-react-app</code> runs in the background automatically, so your client-side resources are dynamically built on demand and the page refreshes when you modify any file.</li>
          <li><strong>Efficient production builds</strong>. In production mode, development-time features are disabled, and your <code>dotnet publish</code> configuration produces minified, efficiently bundled JavaScript files.</li>
        </ul>
        <p>The <code>ClientApp</code> subdirectory is a standard React application based on the <code>create-react-app</code> template. If you open a command prompt in that directory, you can run <code>npm</code> commands such as <code>npm test</code> or <code>npm install</code>.</p>
      </div>
    //<div className={styles.container}>
    //  <Head>
    //    <title>Create Next App</title>
    //    <meta name="description" content="Generated by create next app" />
    //    <link rel="icon" href="/favicon.ico" />
    //  </Head>

    //  <main className={styles.main}>
    //    <h1 className={styles.title}>
    //      Welcome to <a href="https://nextjs.org">Next.js NextJsNet6POCOriginal!</a>
    //    </h1>

    //    <p className={styles.description}>
    //      Get started by editing{' '}
    //      <code className={styles.code}>pages/index.js</code>
    //    </p>

    //    <div className={styles.grid}>
    //      <a href="https://nextjs.org/docs" className={styles.card}>
    //        <h2>Documentation &rarr;</h2>
    //        <p>Find in-depth information about Next.js features and API.</p>
    //      </a>

    //      <a href="https://nextjs.org/learn" className={styles.card}>
    //        <h2>Learn &rarr;</h2>
    //        <p>Learn about Next.js in an interactive course with quizzes!</p>
    //      </a>

    //      <a
    //        href="https://github.com/vercel/next.js/tree/canary/examples"
    //        className={styles.card}
    //      >
    //        <h2>Examples &rarr;</h2>
    //        <p>Discover and deploy boilerplate example Next.js projects.</p>
    //      </a>

    //      <a
    //        href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
    //        className={styles.card}
    //      >
    //        <h2>Deploy &rarr;</h2>
    //        <p>
    //          Instantly deploy your Next.js site to a public URL with Vercel.
    //        </p>
    //      </a>
    //    </div>
    //  </main>

    //  <footer className={styles.footer}>
    //    <a
    //      href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
    //      target="_blank"
    //      rel="noopener noreferrer"
    //    >
    //      Powered by{' '}
    //      <span className={styles.logo}>
    //        <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
    //      </span>
    //    </a>
    //  </footer>
    //</div>
  )
}
