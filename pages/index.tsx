import Head from 'next/head'
import Header from '../components/Header'
import Hero from '../components/Hero'

export default function Home() {
  return (
    <div className='bg-[rgb(36,36,36)] text-white h-screen'>
      <Head>
        <title>Create Next App</title>
        <meta name="Peter Sekesan Portfolio" content="Portfolio created with Next.js` " />
      </Head>
      {/* Header  */}
      <Header/>
      {/* Hero  */}
      <section id='hero'>
      <Hero/>
      </section>
      {/* About  */}

      {/* Experience  */}

      {/* Skills  */}

      {/* Projects  */}

      {/* Contact  */}
</div>
  )
}
