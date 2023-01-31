import React, { useState } from "react";
import { MenuView } from "./styles";
import { FaBars } from "react-icons/fa";
import Link from "next/link";
import ModalLinks from "../Modal";
import { listItemModal } from '../../src/utils/items'
function Menu() {
  type ModalLink = {
    active: boolean
    title?: string
    text?: string
  }
  let [open, setOpen] = useState<boolean>(false);
  const [visible, setVisible] = useState<boolean>(false)
  const [infoModal, setInfoModal] = useState<ModalLink>({ active: false })

  const changeIcon = () => {
    setOpen(!open);
  };
  const changeVisibleLink = () => {
    setVisible(!visible);
  }
  function openModal(caseModal: string, active: boolean = true) {
    const modalText = listItemModal.find(item => item.case === caseModal);
    if (modalText?.case) {
      setInfoModal({
        active,
        title: modalText?.title,
        text: modalText?.text
      })
    }

  }


  return (
    <>
      <MenuView>
        <nav className="relative px-2 py-4">
          <div className="container mx-auto flex justify-between items-center">
            <img src="logo.png" alt="Leaf Editora" className="object-cover" />
            <div>
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
                <li className="  pl-4 " onClick={changeVisibleLink} >
                  <Link href="/">
                    <a className="link">Catálogo</a>
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
              <div className={`flex items-center justify-between mt-2 ${visible ? 'flex' : 'hidden'}`}>
                <span onClick={() => openModal('semente')}>Sementes </span> |
                <span onClick={() => openModal('raizes')}>Raízes </span>|
                <span onClick={() => openModal('petala')}>Pétalas </span>|
                <span>PNLD </span>
              </div>
            </div>
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
              className={`mobile-menu absolute top-23 w-full ${open ? "block active" : ""
                }`}
            >
              <ul className="bg-[#868587] shadow-lg leading-9 font-bold h-screen">
                <li className="border-b-2 border-white hover:bg-[#639948] hover:text-white pl-4">
                  <Link href="/" className="block pl-7">
                    <a className="block w-100"> Home</a>
                  </Link>
                </li>
                <li className="border-b-2 border-white hover:bg-[#639948] hover:text-white pl-4">
                  <Link href="/sobre" className="block pl-7">
                    <a className="block w-100">A Editora</a>
                  </Link>
                </li>

                <li className="border-b-2 border-white hover:bg-[#639948] hover:text-white pl-4">
                  <Link href="/autores" className="block pl-7">
                    <a className="block w-100">Autores</a>
                  </Link>
                </li>
                <li className="border-b-2 border-white hover:bg-[#639948] hover:text-white pl-4">
                  <Link href="/" className="block pl-7">
                    <a className="block w-100"> PNLD</a>
                  </Link>
                </li>
                <li className="border-b-2 border-white hover:bg-[#639948] hover:text-white pl-4">
                  <Link href="/" className="block pl-7">
                    <a className="block w-100"> Loja Virtual </a>
                  </Link>
                </li>
                <li className="border-b-2 border-white hover:bg-[#639948] hover:text-white pl-4">
                  <Link href="/contato" className="block pl-7">
                    <a className="block w-100"> Contato </a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </MenuView>
      <ModalLinks openModal={infoModal.active}
        title={infoModal?.title}
        text={infoModal?.text}  onRequestClose={()=>setInfoModal({active: false})}/>
    </>
  );
}

export default Menu;
