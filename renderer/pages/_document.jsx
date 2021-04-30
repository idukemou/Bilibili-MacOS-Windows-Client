import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
    render () {
        return (
            <Html>
            <Head>
                <meta charSet='utf-8' />
                <link rel="stylesheet" href="https://at.alicdn.com/t/font_2503344_e1yho21wrpv.css"/>
                <meta name="referrer" content="no-referrer" />
            </Head>
            <body>
                <Main />
                <script src="https://cdnjs.cloudflare.com/ajax/libs/flv.js/1.3.2/flv.min.js"
                        integrity="sha512-viIpeG+70da8uvm9aktaT4dXxlalio52xjaKmGSjiUXrfPo4jRlp6elFvAEuV7GxmVB/qwQZiCQNadaF3DfVZg=="
                        crossOrigin="anonymous" />
                <script src="/js/gt_captcha.js"/>
                <NextScript />
            </body>
            </Html>
        );
    }
};
