import React, { useState } from "react";
import { MenuView } from "./styles";
import { FaBars } from "react-icons/fa";
import Link from "next/link";

function Menu() {
  let [open, setOpen] = useState<boolean>(false);
  const changeIcon = () => {
    setOpen(!open);
  };
  return (
    <MenuView>
      <nav className="relative px-2 py-4">
        <div className="container mx-auto flex justify-between items-center">
          <img src="logo.png" alt="Leaf Editora" className="object-cover" />

          <ul className="hidden md:flex space-x-6">
            <li className=" pl-4">
              <Link href="/">
                <a className="link"> Home</a>
              </Link>
            </li>
            <li className="  pl-4">
              <Link href="/sobre">
                <a className="link"> A Editora</a>
              </Link>
            </li>

            <li className="  pl-4">
              <Link href="/autores">
                <a className="link">Autores</a>
              </Link>
            </li>
            <li className="  pl-4">
              <Link href="/">
                <a className="link">PNLD</a>
              </Link>
            </li>
            <li className="  pl-4 flex gap-2 items-center">
              <img src="/shopping.svg" alt=" Loja Virtual" className="h-4" />
              <Link href="/">
                <a className="link"> Loja Virtual</a>
              </Link>
            </li>
            <li className="  pl-4">
              <Link href="/contato">
                <a className="link"> Contato</a>
              </Link>
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
            <ul className="bg-[#868587] shadow-lg leading-9 font-bold h-screen">
              <li className="border-b-2 border-white hover:bg-[#639948] hover:text-white pl-4">
                <Link href="/" className="block pl-7">
                  Home
                </Link>
              </li>
              <li className="border-b-2 border-white hover:bg-[#639948] hover:text-white pl-4">
                <Link href="/sobre" className="block pl-7">
                  A Editora
                </Link>
              </li>

              <li className="border-b-2 border-white hover:bg-[#639948] hover:text-white pl-4">
                <Link href="/autores" className="block pl-7">
                  Autores
                </Link>
              </li>
              <li className="border-b-2 border-white hover:bg-[#639948] hover:text-white pl-4">
                <Link href="/" className="block pl-7">
                  PNLD
                </Link>
              </li>
              <li className="border-b-2 border-white hover:bg-[#639948] hover:text-white pl-4">
                <Link href="/" className="block pl-7">
                  Loja Virtual
                </Link>
              </li>
              <li className="border-b-2 border-white hover:bg-[#639948] hover:text-white pl-4">
                <Link href="/contato" className="block pl-7">
                  Contato
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </MenuView>
  );
}

export default Menu;
