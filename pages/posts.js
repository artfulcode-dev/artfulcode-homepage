import Layout from "../components/layout";

const posts = function () {
  const t = 1;
  return (
    <Layout>
      <section className="mb-6">
        <h3 className="mt-3 mb-4 text-2xl font-semibold">
          Hi there, and welcome back to my website!
        </h3>
        <p className="indent-2 justify-content">
          This page will soon feature a collection of articles covering new
          technologies, tutorials, and more. I plan to contribute at least one
          article per month. The first one will dive into LazyVim, an amazing
          IDE built on Neovim. Don't worry, I&apos;ll cover all the details you
          need to get started!{" "}
        </p>
        <p className="text-justify">
          So, stay tuned and don&apos;t miss out on what coming next!
        </p>
      </section>
    </Layout>
  );
};

export default posts;
