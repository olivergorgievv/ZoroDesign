import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import { useState } from "react";
import LoginModal from "../components/LoginModal";
import Footer from "../components/Footer";

function Root() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      {isModalOpen && <LoginModal onClose={handleCloseModal} />}
      <NavBar onOpenModal={handleOpenModal} />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default Root;
