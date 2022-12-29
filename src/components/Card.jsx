import { useState } from "react";
import Modal from "./Modal";
import Title from "./Title";
import styles from "./Card.module.scss";
import Picture from "./Picture";
import Button from "./Button";

function Card(character) {
  const { name, thumbnail } = character;
  const [showModal, setShowModal] = useState(false);
  const closeModal = () => setShowModal(false);
  const openModal = () => setShowModal(true);

  return (
    <div className={styles.card}>
      <Picture name={name} thumbnail={thumbnail} />
      <div className={styles.data}>
        <Title title={name} />
        <Button text="Подробнее" onClick={openModal} />
      </div>
      <Modal {...character} closeModal={closeModal} showModal={showModal} />
    </div>
  );
}

export default Card;
