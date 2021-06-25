import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
    render () {
        return (
            <Html>
            <Head>
                <meta charSet='utf-8' />
                <link rel="stylesheet" href="https://at.alicdn.com/t/font_2503344_r9mtsq9ja7b.css"/>
                <meta name="referrer" content="no-referrer" />
            </Head>
            <body>
                <Main />
                <script src="https://cdnjs.cloudflare.com/ajax/libs/flv.js/1.5.0/flv.min.js"
                        integrity="sha512-YY0CZ0d6Wavco6rNJERWAoUJX9jCnRlcwK1MtKon8IzhT189p6rgX7f6ikViiSsv3PLYozgsVJDzdxiVz3IXjw=="
                        crossOrigin="anonymous"></script>
                <script src="/js/gt_captcha.js"/>
                <NextScript />
            </body>
            </Html>
        );
    }
};
