import React from "react";
import { Section, ValueContainer } from "./styles";

function Values() {
  return (
    <Section className="relative">

      <ValueContainer className="container mx-auto p-2 grid grid-cols-1 md:grid-cols-2  gap-2  md:text-left sm:text-center text-center ">
        <div className="values-text ">

          <p className="text-base mb-4 text-gray-100 font-nunito leading-loose">
            Os livros infantis e juvenis são a base da educação e do futuro. Aprender é o melhor presente
            que podemos oferecer aos pequenos. A Leaf Editora oferece a oportunidade de aprender de
            um jeito divertido, com histórias inesquecíveis que marcarão a vida de cada leitor.<br></br>
            Os livros para educadores são publicações que visam ajudar os professores a melhorar suas
            habilidades e práticas de ensino. Eles podem incluir estratégias de ensino inovadoras, técnicas
            de gerenciamento de sala de aula, orientações para lidar com diferentes tipos de alunos e
            tópicos relacionados à educação, como políticas educacionais e desenvolvimento de currículo.
            E tudo isso espelhando as exigências da Educação do agora-futuro.
          </p>

          <button className="bg-green-400 font-nunito font-medium text-white rounded-full p-3 mt-4 w-40">
            Visite a Loja
          </button>
        </div>

        {/* <div className="w-full" ><img src="./leafs.png" alt="" /></div> */}

      </ValueContainer>
    </Section>
  );
}

export default Values;
