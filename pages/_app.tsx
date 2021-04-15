import { AppProps } from "next/dist/next-server/lib/router/router";
import MainLayout from "components/Layouts/MainLayout";
import "../styles/globals.css";
import "semantic-ui-css/semantic.min.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MainLayout>
      <Component {...pageProps} />
    </MainLayout>
  );
}

export default MyApp;
