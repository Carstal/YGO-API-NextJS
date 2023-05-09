import Head from 'next/head'
import Card from '../components/Card';
import styles from '../styles/ygo.module.css'
import Modal from "react-modal";
import CardModal from '../components/CardModal';
import { useState, useEffect } from 'react';

export async function getServerSideProps() {
    const res = await fetch("https://db.ygoprodeck.com/api/v7/cardinfo.php?&startdate=03/08/2002&enddate=03/09/2002&dateregion=tcg_date");
    const cards = await res.json();
    // console.log(cards.data);
    return { props: { cards }};
}

export default function Home({cards}) {
    // const [showModal, setShowModal] = useState(false);

    // const handleSelectCard = useCallback(
    // (card) => window.alert(card.name),
    // []
    // )

    // const [searchTerm, setSearchTerm] = useState("");
    // const [searchResults, setSearchResults] = useState(cards);

    // const handleSearch = (event) => {
    // const searchTerm = event.target.value;
    // setSearchTerm(searchTerm);

    // const filteredList = cards.data.filter((item) =>
    //     Object.values(item).some(
    //     (field) =>
    //         typeof field === "string" &&
    //         field.toLowerCase().includes(searchTerm.toLowerCase())
    //     )
    // );
    // setSearchResults(filteredList);
    // }

    // to open modal
    const [isOpenModalOne, setIsOpenModalOne] = useState(false);
    const [cardData, setCardData] = useState(null);

  // to open modal method
    function toggleModalOne() {
    // setProjectData(project)
    setIsOpenModalOne(!isOpenModalOne);
    }

useEffect(() => {
    if (cardData) {
        toggleModalOne();
    }
}, [cardData]);

const handleClickedCard = (id) =>{
    const card = cards.data.find(card => card.id == id.target.id);
    // console.log(id.target.id)
    // console.log(allProjects)
    console.log(card)
    // setCardData(card);
    toggleModalOne();
}

    return (
    <div className="container">
        <Head>
        <title>LOB API </title>
        <link rel="icon" href="/favicon.ico" />
        </Head>

        <main>
        <header className={styles.header}>
            <h1>LOB Cards</h1>
            {/* <div className={styles.search_container}>
            <input
                type="text"
                value={searchTerm}
                onChange={handleSearch}
                className={styles.search_input}
                placeholder="Search"
            />
            </div> */}
        </header>
        <div className={styles.container}>
        {cards.data.map((card) => (
            <div key={card.id} className={styles.card} onClick={handleClickedCard}>
                <Card card={card}/>
            </div>
        ))}
        </div>
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
            <CardModal card={cardData}/>
        </div>
        </Modal>
        {/* <Modal show={showModal} onClose={() => setShowModal(false)}>

        </Modal>
        <div id='card-modal'></div> */}
        </main>
    </div>
    )
}
