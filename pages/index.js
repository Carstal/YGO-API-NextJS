import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export async function getServerSideProps() {
  const res = await fetch("https://db.ygoprodeck.com/api/v7/cardinfo.php?&startdate=03/08/2002&enddate=03/09/2002&dateregion=tcg_date");
  const cards = await res.json();
  console.log(cards)
  return { props: { cards }};
}

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>LOB API </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome to my app!" />
        <p className="description">
          Get started by editing <code>pages/index.js</code>
        </p>
      </main>

      <Footer />
    </div>
  )
}
