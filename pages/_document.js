import Document, { Head, Main, NextScript } from "next/document";
import flush from "styled-jsx/server";
import enUS from "antd/lib/locale-provider/en_US";
import { LocaleProvider } from "antd";
import stylesheet from "styles/index.less";

export default class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
    const { html, head, errorHtml, chunks } = renderPage();
    const styles = flush();
    return { html, head, errorHtml, chunks, styles };
  }

  render() {
    return (
      <html lang="en">
        <Head>
          <style>{stylesheet}</style>
        </Head>
        <body>
          <LocaleProvider locale={enUS}>
            <Main />
          </LocaleProvider>
          <NextScript />
        </body>
      </html>
    );
  }
}
