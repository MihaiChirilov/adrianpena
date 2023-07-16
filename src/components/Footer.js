import Layout from "./Layout";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full border-t-2 border-solid border-dark font-medium text-lg">
      <Layout className="py-8 flex items-center justify-between">
        <span>
          {new Date().getFullYear()} &copy; Toate drepturile rezervate.
        </span>
        <div>
          Construit cu{" "}
          <span className="text-primary text-2xl px-1">&#9825;</span> de&nbsp;
          <Link
            href="http://www.scoaladegrafica.ro"
            className="underline underline-offset-2"
            target={"_blank"}
          >
            ikoniske
          </Link>
        </div>

        <Link
          href="http://www.scoaladegrafica.ro"
          className="underline underline-offset-2"
          target={"_blank"}
        >
          Aici poti sa-mi scrii
        </Link>
      </Layout>
    </footer>
  );
};
export default Footer;
