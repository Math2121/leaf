import React, { useState } from "react";
import { MenuView } from "./styles";
import { FaBars } from "react-icons/fa";

function Menu() {
  let [open, setOpen] = useState<boolean>(false);
  const changeIcon = () => {
    setOpen(!open);
  };
  return (
    <MenuView>
      <nav className="relative px-2 py-4">
        <div className="container mx-auto flex justify-between items-center">
          <img src="logo.png" alt="Leaf Editora" className="object-cover"/>

          <ul className="hidden md:flex space-x-6">
            <li className=" pl-4">
              <a href="https://google.com" className="block pl-7 link">
                Home
              </a>
            </li>
            <li className="  pl-4">
              <a href="#" className="block pl-7 link">
                A Editora
              </a>
            </li>

            <li className="  pl-4">
              <a href="#" className="block pl-7 link">
                Autores
              </a>
            </li>
            <li className="  pl-4">
              <a href="#" className="block pl-7 link flex gap-2">
                <img src="/shopping.svg" alt=" Loja Virtual" />
                Loja Virtual
              </a>
            </li>
            <li className="  pl-4">
              <a href="#" className="block pl-7 link">
                Contato
              </a>
            </li>
          </ul>

          <button
            type="button"
            id="mobile-icon"
            className="md:hidden"
            onClick={() => changeIcon()}
          >
            <FaBars />
          </button>
        </div>

        <div className="md:hidden flex justify-center mt-3 w-full">
          <div
            id="mobile-menu"
            className={`mobile-menu absolute top-23 w-full ${
              open ? "block active" : ""
            }`}
          >
            <ul className="bg-gray-100 shadow-lg leading-9 font-bold h-screen">
              <li className="border-b-2 border-white hover:bg-red-400 hover:text-white pl-4">
                <a href="https://google.com" className="block pl-7">
                  Home
                </a>
              </li>
              <li className="border-b-2 border-white hover:bg-red-400 hover:text-white pl-4">
                <a href="#" className="block pl-7">
                  A Editora
                </a>
              </li>

              <li className="border-b-2 border-white hover:bg-red-400 hover:text-white pl-4">
                <a href="#" className="block pl-7">
                  Autores
                </a>
              </li>
              <li className="border-b-2 border-white hover:bg-red-400 hover:text-white pl-4">
                <a href="#" className="block pl-7">
                  Loja Virtual
                </a>
              </li>
              <li className="border-b-2 border-white hover:bg-red-400 hover:text-white pl-4">
                <a href="#" className="block pl-7">
                  Contato
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </MenuView>
  );
}

export default Menu;
