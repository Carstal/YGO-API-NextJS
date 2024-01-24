import Head from "next/head";
import Card from "../components/Card";
import styles from "../styles/ygo.module.css";
// import Modal from "react-modal";
// import CardModal from "../components/CardModal";
import { useState, useEffect } from "react";

// Modal.setAppElement("#modal-display");

export async function getServerSideProps() {
  const res = await fetch(
    "https://db.ygoprodeck.com/api/v7/cardinfo.php?&startdate=03/08/2002&enddate=03/09/2002&dateregion=tcg_date"
  );
  const cards = await res.json();
  return { props: { cards } };
}

export default function Home({ cards }) {
  // to open modal
  const [isOpenModalOne, setIsOpenModalOne] = useState(false);
  const [cardData, setCardData] = useState(null);

  // to open modal method
  function toggleModalOne(card) {
    setCardData(card);
    setIsOpenModalOne(!isOpenModalOne);
  }

  useEffect(() => {
    if (cardData) {
      toggleModalOne();
    }
  }, [cardData]);

  const handleClickedCard = (card) => {
    console.log(card);
    toggleModalOne(card);
  };

  return (
    <div className="container">
      <Head>
        <title>LOB API </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <header className={styles.header}>
          <h1>LOB Cards</h1>
        </header>
        {/* <div id="modal-display">
        <Modal
          isOpen={isOpenModalOne}
          onRequestClose={toggleModalOne}
          contentLabel="My dialog"
          className="mymodal"
          overlayClassName="myoverlay"
          closeTimeoutMS={500}
        >
          <div className="tokyo_tm_modalbox_news portfolio_tm_modalbox">
            <button className="close-modal" onClick={toggleModalOne}>
              <img src="/img/svg/cancel.svg" alt="close icon" />
            </button>
            {cardData && <CardModal card={cardData} />}
          </div>
        </Modal>
        </div> */}
        <div className={styles.container}>
          {cards.data.map((card) => (
            <div
              key={card.id}
              className={styles.card}
              // onClick={() => handleClickedCard(card)}
            >
              <Card card={card} />
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
