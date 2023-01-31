import Head from 'next/head'
import Card from '../components/Card';
import styles from '../styles/ygo.module.css'
// import Modal from '../../components/CardModal';
import { useState, useCallback } from 'react';

export async function getServerSideProps() {
    const res = await fetch("https://db.ygoprodeck.com/api/v7/cardinfo.php?&startdate=03/08/2002&enddate=03/09/2002&dateregion=tcg_date");
    const cards = await res.json();
    // console.log(cards.data);
    return { props: { cards }};
}

export default function Home({cards}) {
    const [showModal, setShowModal] = useState(false);

    const handleSelectCard = useCallback(
    (card) => window.alert(card.name),
    []
    )
    return (
    <div className="container">
        <Head>
        <title>LOB API </title>
        <link rel="icon" href="/favicon.ico" />
        </Head>

        <main>
        <header className={styles.header}><h1>LOB Cards</h1></header>
        <div className={styles.container}>
        {cards.data.map((card) => (
            <div key={card.id} className={styles.card} onClick={handleSelectCard}>
                <Card card={card}/>
            </div>
        ))}
        </div>
        {/* <Modal show={showModal} onClose={() => setShowModal(false)}>

        </Modal>
        <div id='card-modal'></div> */}
        </main>
    </div>
    )
}
