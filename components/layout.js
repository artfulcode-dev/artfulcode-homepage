import Head from "next/head";
import TopBar from "../components/topBar";
import Donut from "../components/donut";
import Footer from "../components/footer";
import { Analytics } from "@vercel/analytics/next";
export const siteTitle = "Abdennour Mesdour - Website";

export default function Layout({ children, home }) {
  return (
    <div className="max-w-2xl mx-auto px-2">
      <Head>
        <meta name="viewport" content="width=device, initial-scale=1" />
        <meta name="description" content="Abdennour MESDOUR - Website" />
        <meta name="author" content="artfulcode.dev" />
        <meta name="author" content="Abdennour Mesdour" />
        <meta name="twitter:title" content="Abdennour MESDOUR" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@artfulcodedev" />
        <meta name="twitter:creator" content="@artfulcodedev" />
        <meta name="og:title" content={siteTitle} />
        <meta name="og:site_name" content="Abdennour MESDOUR" />
        <meta property="og:type" content="website" />
        <title>{siteTitle}</title>
      </Head>
      <main className="min-h-[calc(100vh-24px)]">
        <TopBar />
        <Donut />
        {children}
        <Analytics />
      </main>
      <Footer />
    </div>
  );
}
