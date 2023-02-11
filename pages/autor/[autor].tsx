import { GetServerSideProps, GetStaticProps } from "next";
import React from "react";
import { DynamicComponentWithNoSSR } from "..";
import Footer from "../../components/Footer";
import { Intro } from "../../components/Intro";
import client from "../../src/graphql/client";
import { GET_LIVROS } from "../../src/graphql/queries";
import Autores from "../autores";
type AutorProps = {
  autor: string,
  imagem: string,
  slug: string,
  biografia: string,
  livros: {url:string}[]
}
interface Props {
  autores: AutorProps[]
}
function Autor({ autores }: Props) {
  return (
    <>
      <section className="container m-auto p-2">
        <DynamicComponentWithNoSSR />
      </section>
      <Intro title="Autor" />
      <div className="container m-auto">
      {autores.map((item) => (
        <main className=" grid grid-cols-1 md:grid-cols-2 items-start gap-10 mt-20" key={item.slug}>
     

          {/* <img
            src={item.imagem}
            alt=""
            className="object-cover h-full w-full rounded-md  "
          /> */}

          <div>
            <h2 className="font-bahnschrift text-green-400 text-4xl  mt-5">
            {item.autor}
            </h2>
            <p className="text-base text-gray-100 font-nunito leading-loose mt-5">
            {item.biografia}
            </p>
          </div>
     
        </main>
     ))}
        <section>
          <h2 className="font-bahnschrift text-black-100 text-4xl  mt-16">
            Livros da Autora
          </h2>
      
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {autores[0].livros.map((item) => (
            <img src={item.url} alt="" className="h-full w-full mt-8"  key={item.url} />
            ))}
          </div>
    
        </section>
      </div>
      <Footer />
    </>
  );
}

export default Autor;

export const getServerSideProps: GetServerSideProps = async ({ params  }) => {
  const autor = params?.autor as string
  const data = await client.request<{ autor: any[] }>(GET_LIVROS, { slug: autor });

  let res = data.autor.map(item => {
    return {
      autor: item.nome.text,
      imagem: item.imagem.url,
      slug: item.nomeAutor,
      biografia: item.biografia.text ?? '',
      livros: item.livros ?? ''
    }
  })
console.log(res)
  return {
    props: {
      autores: res
    }
  }
}