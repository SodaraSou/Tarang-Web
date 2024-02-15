"use client";
import { useState } from "react";
import Button from "@/components/Button";
import DropdownButton from "@/components/DropdownButton";
import Modal from "@/components/Modal";
import InputGroup from "@/components/InputGroup";

function Home() {
  const dropdownContent = [
    { id: 1, type: "default 1" },
    { id: 2, type: "default 2" },
  ];
  const [openModal, setOpenModal] = useState(false);
  const handleModal = (state) => {
    setOpenModal(state);
  };
  return (
    <div className="flex flex-col items-center gap-4">
      <Button customClass="bg-[#2AD5A5]">I Like Pizza!</Button>
      <Button customClass="bg-[#9C87F2]">I Like Pizza!</Button>
      <Button customClass="bg-gradient-to-r from-[#2AD5A5] to-[#9C87F2]">
        I Like Pizza!
      </Button>
      <DropdownButton dropdownContent={dropdownContent}>
        Dropdown
      </DropdownButton>
      <Button onClick={handleModal}>Click Modal</Button>
      <InputGroup type="password" placeholder="********" />
      {openModal && <Modal handleModal={handleModal}>Modal</Modal>}
    </div>
  );
}

export default Home;
