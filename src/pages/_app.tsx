import { type AppType } from "next/dist/shared/lib/utils";

import "~/styles/globals.css";

// import { GeistSans } from "geist/font/sans";
// import { GeistMono } from "geist/font/mono";
import { GeistMono, GeistSans } from "geist/font";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <main className={`${GeistSans.variable} ${GeistMono.variable} font-sans`}>
      {" "}
      <Component {...pageProps} />
    </main>
  );
};

export default MyApp;
