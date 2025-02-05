import Link from "next/link";
import Layout from "../components/layout";

const NotFound = () => {
  return (
    <Layout>
      <div>
        <h1 className="text-2xl leading-loose font-semibold">Not found</h1>
        <p>The page you looking for cannot be found.</p>
        <hr className="mt-6 mb-6" />
        <div className="flex justify-center">
          <button className="inline-flex justify-center select-none outline-transparent rounded-md bg-teal-300 px-4 text-md leading-10 dark:text-black text-white">
            <Link href="/">Return to home</Link>
          </button>
        </div>
      </div>
    </Layout>
  );
};

export default NotFound;
