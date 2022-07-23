import { DynamicComponentWithNoSSR } from ".";
import Footer from "../components/Footer";
import { Intro } from "../components/Intro";

function Contato() {
  return (
    <>
      <section className="container m-auto p-2">
        <DynamicComponentWithNoSSR />
      </section>
      <Intro title="Contato" />
      <div className="container m-auto">
        <main className=" grid grid-cols-1 md:grid-cols-2 gap-10 mt-20">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m26!1m12!1m3!1d59013.85980684274!2d-44.31418380000002!3d-22.4152372!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m11!3e6!4m3!3m2!1d-22.4155037!2d-44.3076261!4m5!1s0x9e86735e81eca7%3A0xc6a1f7f9a37f2001!2sPorto%20Real%2C%20RJ!3m2!1d-22.4400016!2d-44.317850899999996!5e0!3m2!1spt-BR!2sbr!4v1658540944035!5m2!1spt-BR!2sbr"
            width="100%"
            height="500"
            style={{ border: 0 }}
            className="rounded-xl"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
          <div className="flex flex-col ">
            <h2 className="text-black-100 font-bold font-nunito text-xl mb-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis{" "}
            </h2>
            <p className="text-base text-gray-100 font-nunito leading-loose">
              nam delectus facere impedit quam officia numquam dignissimos illo.
              Eaque optio saepe hic vitae provident. Delectus quos fugit
              asperiores voluptate molestiae!
            </p>

            <input
              type="text"
              className="bg-gray-200 p-2 h-10 mb-5 rounded-md mt-2"
              placeholder="Nome"
            />
            <input
              type="text"
              className="bg-gray-200 p-2 h-10 mb-5 rounded-md"
              placeholder="E-mail"
            />
            <textarea
              name=""
              id=""
              cols={30}
              rows={10}
              className="bg-gray-200 p-2  mb-5 rounded-md"
              placeholder="Mensagem"
            ></textarea>

            <button className="bg-green-400 font-nunito font-medium text-white rounded-full p-3 mt-4 w-40">
              Enviar
            </button>
          </div>
        </main>
      </div>
      <Footer />
    </>
  );
}

export default Contato;
