import React from "react";
import { ListNavigation } from "./styles";

function Footer() {
  return (
    <footer className="mt-36 bg-gray-200 pb-20 relative">
      <a
        href="https://wa.me/message/4UVQB6G546T4F1"
        target="_blank"
        rel="noreferrer"
      >
        <img
          src="whatsapp.png"
          alt=""
          className="fixed bottom-5 right-5 w-10"
        />
      </a>
      <div className="container mx-auto grid md:grid-cols-3 gap-4 justify-around ,d:justify-items-center md:items-center p-2 sm:grid-cols-1 sm:items-start">
        <div className="pt-10">
          <img src="/logo.png" alt="logo Leaf" className="h-20 mb-4" />

          <p className="tex-black-200 text-base">
          A fotossíntese pelos livros
          </p>

          <div className="link flex mt-4 gap-4">
            <a href="#" className="transition duration-500 hover:scale-75">
              <img src="/facebook.svg" alt="link facebook " />
            </a>
            <a href="#" className="transition duration-500 hover:scale-75">
              <img src="/insta.svg" alt="link instagram" />
            </a>
          </div>
        </div>
        <div className="pt-10 flex justify-center">
          <ListNavigation>
            <li className="mt-5 mb-4 flex items-center gap-2">
              <img src="/elipse.png" alt="" />
              <a href="http://" target="_blank" rel="noopener noreferrer">
                Home
              </a>
            </li>
            <li className="mb-4 flex items-center gap-2">
              <img src="/elipse.png" alt="" />
              <a href="http://" target="_blank" rel="noopener noreferrer">
                A Editora
              </a>
            </li>

            <li className="mb-4 flex items-center gap-2">
              <img src="/elipse.png" alt="" />
              <a href="http://" target="_blank" rel="noopener noreferrer">
                Autores
              </a>
            </li>

            <li className="mb-4 flex items-center gap-2">
              <img src="/elipse.png" alt="" />
              <a href="http://" target="_blank" rel="noopener noreferrer">
                Loja Virtual
              </a>
            </li>

            <li className="flex items-center gap-2">
              <img src="/elipse.png" alt="" />
              <a href="http://" target="_blank" rel="noopener noreferrer">
                Contato
              </a>
            </li>
          </ListNavigation>
        </div>
        <div className="pt-10">
          <h4 className="text-green-400 text-xl font-nunito font-bold">
            Contato
          </h4>
          <div className="flex items-center gap-2 mt-5">
            <img src="/mapper.svg" alt="" />
            <p className="text-black-200">
            Rua Darwin | Volta Redonda | RJ
            </p>
          </div>

          <div className="flex items-center gap-2 mt-9">
            <img src="/phone.svg" alt="" />
            <p className="text-black-200">+55 24 9.9854.0036</p>
          </div>

          <div className="flex items-center gap-2 mt-9">
            <img src="/mail.svg" alt="" />
            <p className="text-black-200">contato@leafeditora.com.br</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
