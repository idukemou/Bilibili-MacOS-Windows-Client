import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
    render () {
        return (
            <Html>
            <Head>
                <meta charSet='utf-8' />
                <link rel="stylesheet" href="https://at.alicdn.com/t/font_2503344_v0abiix0w4m.css"/>
                <meta name="referrer" content="no-referrer" />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
            </Html>
        );
    }
};
