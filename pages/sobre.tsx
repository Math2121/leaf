import Image from "next/image";
import React from "react";
import { DynamicComponentWithNoSSR } from ".";
import Footer from "../components/Footer";
import { Intro } from "../components/Intro";
import client from "../src/graphql/client";



export default function Sobre() {
  return (
    <>
      <section className="container m-auto p-2">
        <DynamicComponentWithNoSSR />
      </section>

      <Intro title="A Editora" />

      <main className="container m-auto mt-10 p-2">
        <Image src="leaf.png" alt="" className="m-auto opacity-25 h-20" />
        <p className="text-base text-gray-100 font-nunito leading-loose">
          Criada em 2020, a editora passou por algumas mudanças e, após alguns estudos, decidiu-se
          pela paixão do livro infantil e juvenil. Além disso, não poderia deixar o educador sem leituras e
          fontes a beber. Assim, criou a coleção Pétalas, com conteúdos aos educadores que desejam
          continuar se preparando para as aulas do século XXI. A coleção Sementes, pois é a partir delas
          que tudo começa e é, então, a coleção de literatura infantil. A coleção Raízes é a de literatura
          juvenil, pois as raízes ajudam a sustentar e fixar o mundo de conhecimentos que virão através
          da leitura literária.<br></br>
          A Leaf é dirigida pela Aline Reis. Professora formada em Letras, atuando como educadora
          desde 2005, com especialização em literatura infantojuvenil, em literaturas de expressão em
          língua portuguesa, em gestão e docência do ensino superior, em tecnologias na aprendizagem
          e aperfeiçoamento em design educacional. Tem mestrado em Literatura Brasileira (UERJ) e é
          doutoranda em Educação (UNR). Como a literatura infantil é uma de suas paixões, também
          escreve para os pequenos (e os não tão pequenos assim). A paixão pelos livros fez com que abrisse a Leaf Editora, com seletos parceiros, que fazem com que a editora publique com
qualidade.
        </p>


      </main>
      <Footer />
    </>
  );
}


export const getStaticProps = async () => {


  return {
    props: {}
  }
}
