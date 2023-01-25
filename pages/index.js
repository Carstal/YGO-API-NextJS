import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export async function getServerSideProps() {
  const res = await fetch("https://db.ygoprodeck.com/api/v7/cardinfo.php?&startdate=03/08/2002&enddate=03/09/2002&dateregion=tcg_date");
  const cards = await res.json();

  return { props: { cards }};
}

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

      {/* <Footer /> */}
    </div>
  )
}
