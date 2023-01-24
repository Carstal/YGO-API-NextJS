import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export async function getServerSideProps() {
  const res = await fetch("https://db.ygoprodeck.com/api/v7/cardinfo.php?&startdate=03/08/2002&enddate=03/09/2002&dateregion=tcg_date");
  const cards = await res.json();
  console.log(cards)
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
        <Header title="LOB Cards" />
        {cards.map((card) => (
          <div>
            <div className="info">
              <div className="id">ID:{card.id}</div>
              <div className="name">Name: {card.name}</div>
              <div className="type">Type: {card.type}</div>
            </div>
          </div>
        ))}
      </main>

      <Footer />
    </div>
  )
}
