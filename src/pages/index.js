import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

import Heading from '@theme/Heading';
import styles from './index.module.css';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">
          My personal technical notebook – snippets, guides, and things I don’t want to forget.
        </p>
        <div className={styles.buttons}>
          <Link className="button button--secondary button--lg" to="/docs/intro">
            Explore my notes
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Jimmy Tzuc's technical knowledge base">
      <HomepageHeader />
      <main style={{ padding: '2rem' }}>
        <section>
          <Heading as="h2">Topics I write about</Heading>
          <ul>
            <li><Link to="/docs/python">Python</Link></li>
            
          </ul>
        </section>

        <section style={{ marginTop: '2rem' }}>
          <Heading as="h2">Why I built this</Heading>
          <p>
            I'm a software engineer who believes that learning compounds over time.
            This site is a space to save things I learn, refresh concepts I don’t use daily,
            and make sure I keep growing even when work gets repetitive.
          </p>
        </section>

        <section style={{ marginTop: '2rem' }}>
          <p style={{ fontSize: '0.9rem', color: '#888' }}>
            Last updated: {new Date().toLocaleDateString()}
          </p>
        </section>
      </main>
    </Layout>
  );
}
