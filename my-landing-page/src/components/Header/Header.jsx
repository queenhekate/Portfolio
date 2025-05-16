import { useState } from 'react';
import './Header.css';
import ModalWithForm from '../ModalWithForm/ModalWithForm'; // Assuming ModalWithForm is in this path

function Header() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const currentDate = new Date().toLocaleString('default', { month: 'long', day: 'numeric' });
  const userName = "John Doe"; // Hardcoded user name
  const userAvatar = "https://via.placeholder.com/40"; // Placeholder avatar URL

  const handleAddClothesClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <header className="header">
      <div className="header__logo">My Logo</div>
      <div className="header__info">
        <span className="header__date">{currentDate}</span>
        <span className="header__location">Current Location</span> {/* Replace with actual location logic */}
      </div>
      <div className="header__user">
        <img src={userAvatar} alt="User Avatar" className="header__avatar" />
        <span className="header__name">{userName}</span>
      </div>
      <button className="header__button" onClick={handleAddClothesClick}>
        Add Clothes
      </button>
      {isModalOpen && <ModalWithForm onClose={handleCloseModal} />}
    </header>
  );
}

export default Header;