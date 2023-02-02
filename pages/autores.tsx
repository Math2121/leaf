import { GetStaticProps } from "next";
import Link from "next/link";
import { DynamicComponentWithNoSSR } from ".";
import Footer from "../components/Footer";
import { Intro } from "../components/Intro";
import client from "../src/graphql/client";
import { GET_AUTORES } from "../src/graphql/queries";
type AutorProps = {
  autor: string,
  imagem: string,
  slug: string
}
interface Props {
  autores: AutorProps[]
}
function Autores({ autores }: Props) {
  return (
    <>
      <section className="container m-auto p-2">
        <DynamicComponentWithNoSSR />
      </section>
      <Intro title="Autores" />
      <div className="container m-auto">
        <main className=" grid grid-cols-1 md:grid-cols-3 gap-10 mt-20">
          {autores.map((item) => (


            <div className="w-full group" key={item.slug}>
              <Link href={`/autor/${item.slug}`}>
                <img
                  src={item.imagem}
                  alt=""
                  className="object-cover h-full w-full rounded-md filter grayscale group-hover:grayscale-0 transition-all duration-200 cursor-pointer" loading="lazy"
                />
              </Link>
              <h2 className="font-bahnschrift text-green-400 text-xl text-center mt-5">
                {item.autor}
              </h2>
            </div>
          ))}

        </main>
      </div>
      <Footer />
    </>
  );
}

export default Autores;

export const getStaticProps: GetStaticProps = async () => {
  const data = await client.request<{autor:any[]}>(GET_AUTORES);

  let res = data.autor.map(item => {
    return {
      autor: item.nome.text,
      imagem: item.imagem.url,
      slug: item.nomeAutor
    }
  })
  console.log(res)
  return {
    props: {
      autores: res
    }
  }
}