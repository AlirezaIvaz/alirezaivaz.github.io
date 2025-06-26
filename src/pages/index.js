import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import Heading from '@theme/Heading';
import styles from './index.module.css';

function HomepageHeader() {
    const {siteConfig} = useDocusaurusContext();
    return (
        <header className={clsx('hero hero--primary', styles.heroBanner)}>
            <div className="container">
                <Heading as="h1" className="hero__title">
                    سلام، من علیرضا ایوز هستم 👋
                </Heading>
                <p className="hero__subtitle">توسعه‌دهندهٔ اندروید، عاشق کاتلین، کامپوز و یادگیری مداوم.</p>
                <p>توی این سایت تجربیاتم، پروژه‌ها و مقالاتم رو به اشتراک می‌ذارم.</p>
                <div className={styles.buttons}>
                    <Link
                        className="button button--secondary button--lg"
                        to="/blog">
                        وبلاگ
                    </Link>
                    <Link
                        className="button button--secondary button--lg button--about"
                        to="/about">
                        دربارهٔ من
                    </Link>
                </div>
            </div>
        </header>
    );
}

export default function Home() {
    const {siteConfig} = useDocusaurusContext();
    return (
        <Layout
            title={`خانه`}
            description="وب‌سایت شخصی علیرضا ایوز - برنامه‌نویس اندروید.">
            <main>
                <HomepageHeader/>
                <HomepageFeatures/>
            </main>
        </Layout>
    );
}
