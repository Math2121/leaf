import { ReactNode } from "react";

import { Container } from "./styles";

export function Vision() {
  return (
    <Container>
      <section className="container mt-10 m-auto p-2 mb-5">
        <div className="grid md:grid-cols-2 gap-4 items-center">
          <div className="flex items-start">
            {/* <img src="picture4.png" alt="" className="object-cover" /> */}
          </div>
          <div className="intro">
            <div className="mb-4">
              <span className="font-bahnschrift text-green-400 text-xl">
                Visão
              </span>

            </div>

            <p className="text-base mb-4 text-gray-100 font-nunito leading-loose">
              Ser a principal fornecedora de conhecimento e entretenimento literário de qualidade para os
              leitores de todo o mundo.
            </p>
            <div className="intro">
              <div className="mb-4">
                <span className="font-bahnschrift text-green-400 text-xl">
                  Valores
                </span>

              </div>

              <p className="text-base mb-4 text-gray-100 font-nunito leading-loose">
                Nossos valores são o compromisso com a excelência editorial, o respeito pelos autores e
                leitores, a ética profissional, a inovação e a diversidade.
              </p>


            </div>
            <div className="intro">

              <div className="mb-4">
                <span className="font-bahnschrift text-green-400 text-xl">
                  Missão
                </span>

              </div>
              <p className="text-base mb-4 text-gray-100 font-nunito leading-loose">
                Promover a educação e o conhecimento através da publicação de livros de qualidade,
                contribuindo para o desenvolvimento cultural e intelectual das pessoas.
              </p>



            </div>

          </div>
        </div>
      </section>


    </Container>
  );
}
