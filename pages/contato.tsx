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
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3686.2375426660233!2d-44.09997699999999!3d-22.4952691!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9e97fec107c4c7%3A0xc58248ce99a3f2ec!2sR.%20Darwin%20-%20Retiro%2C%20Volta%20Redonda%20-%20RJ%2C%2027281-755!5e0!3m2!1spt-BR!2sbr!4v1674953380200!5m2!1spt-BR!2sbr"
            width="100%"
            height="500"
            style={{ border: 0 }}
            className="rounded-xl"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
          <div className="flex flex-col ">
            <h2 className="text-black-100 font-bold font-nunito text-xl mb-2">
              Cadastre-se
            </h2>


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
            <input
              type="text"
              className="bg-gray-200 p-2 h-10 mb-5 rounded-md"
              placeholder="Endereço"
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              <input
                type="text"
                className="bg-gray-200 p-2 h-10 mb-5 rounded-md"
                placeholder="Cidade*"
              />
              <input
                type="text"
                className="bg-gray-200 p-2 h-10 mb-5 rounded-md"
                placeholder="Estado"
              />
            </div>
            <input
              type="text"
              className="bg-gray-200 p-2 h-10 mb-5 rounded-md"
              placeholder="Cep"
            />
            <input
              type="text"
              className="bg-gray-200 p-2 h-10 mb-5 rounded-md"
              placeholder="Profissão"
            />


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
