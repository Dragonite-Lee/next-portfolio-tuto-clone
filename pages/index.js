import Head from 'next/head'
import Image from 'next/image'
import Hero from '../components/home/hero'
import Layout from '../components/layout'


export default function Home() {
  return (
    <Layout>
      <Head> {/*여기가 index.js가 홈이고 pages폴더안에 만들면 root기능을 함 /about-me하면 이동하게되는거임 */}
        <title>망망이 포트폴리오</title>
        <meta name="description" content="오늘도 빡코딩!!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      
      <section className="flex min-h-screen flex-col item-center justify-center text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <Hero></Hero>
          
        </div>
      </section>

    </Layout>
  )
}
