import Head from 'next/head'
import styles from '../../styles/ygo.module.css'

export async function getServerSideProps() {
    const res = await fetch("https://db.ygoprodeck.com/api/v7/cardinfo.php?&startdate=03/08/2002&enddate=03/09/2002&dateregion=tcg_date");
    const cards = await res.json();
    // console.log(cards.data);
    return { props: { cards }};
}

// function getCard(card){
    // const type = card.type
    // console.log(type)

//     <div className='selectedST'>
//     <div className='imgDiv'>
//     </div>
//     <div className='cardInfo'>
//       <p>
//         Name: Black Pendant
//         {/* {selectedName}<br/> */}
//         <br/>
//         Type: Equip Spell
//         {/* {selectedType}<br/> */}
//         <br/>
//         Desc: Equipped monster gains 500 Attack
//         {/* {selectedDesc}<br/> */}
//       </p>
//     </div>
//   </div>
//     return (
//     <div className='selectedM'>
//     <div className={styles.img}>
//                     <img src={card.card_images[0].image_url_large}
//                     alt="Card Image"/>
//     </div>
//     <div className='cardInfo'>
//     <p>
//         Name: {card.name}
//         <br/>
//         Type: {card.type}
//         <br/>
//         Level: {card.level}
//         <br/>
//         Type: {card.race}
//         <br/>
//         Attribute: {card.attribute}
//         <br/>
//         Desc: {card.desc}
//         <br/>
//         Attack: {card.atk}
//         <br/>
//         Defense: {card.def}
//     </p>
//     </div>
// </div>);
// }

export default function Home({cards}) {
    return (
    <div className="container">
        <Head>
        <title>LOB API </title>
        <link rel="icon" href="/favicon.ico" />
        </Head>

        <main>
        <header>LOB Cards</header>
        <div className={styles.container}>
        {cards.data.map((card) => (
            <div className={styles.card}>
            <div className={styles.info}>
                {/* <div className={styles.id}>ID:{card.id}</div> */}
                <div className={styles.img}>
                    <img src={card.card_images[0].image_url_small}
                    alt="Card Image" height="200" width="150"/>
                </div>
                <div className={styles.name}>{card.name}</div>
                <div className={styles.type}>{card.type}</div>
            </div>
            </div>
        ))}
        </div>
        </main>
    </div>
    )
}
