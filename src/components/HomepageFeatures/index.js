import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
    {
        title: 'من کی هستم؟',
        Svg: require('@site/static/img/undraw_programming.svg').default,
        description: (
            <>
                من <b>علیرضا ایوز</b> هستم؛ برنامه‌نویس اندروید، طراح وب و عاشق تکنولوژی.
            </>
        ),
    },
    {
        title: 'علاقه‌مندی‌ها و مهارت‌های من',
        Svg: require('@site/static/img/undraw_coding.svg').default,
        description: (
            <>
                توسعهٔ اپ‌های اندرویدی با کاتلین، تماشای فیلم و سریال و خوندن کتاب چیزایی هستند که
                بیشتر وقتم رو باهاشون می‌گذرونم.
            </>
        ),
    },
    {
        title: 'وبلاگ',
        Svg: require('@site/static/img/undraw_book_writer.svg').default,
        description: (
            <>
                تجربه‌هام از مسیر یادگیری، توسعه، ابزارها، ترفندها و دغدغه‌های یه برنامه‌نویس رو توی وبلاگ براتون می‌نویسم.
            </>
        ),
    },
];

function Feature({Svg, title, description}) {
    return (
        <div className={clsx('col col--4')}>
            <div className="text--center">
                <Svg className={styles.featureSvg} role="img"/>
            </div>
            <div className="text--center padding-horiz--md">
                <Heading as="h3">{title}</Heading>
                <p>{description}</p>
            </div>
        </div>
    );
}

export default function HomepageFeatures() {
    return (
        <section className={styles.features}>
            <div className="container">
                <div className="row">
                    {FeatureList.map((props, idx) => (
                        <Feature key={idx} {...props} />
                    ))}
                </div>
            </div>
        </section>
    );
}
