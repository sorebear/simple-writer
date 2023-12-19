import { useState } from 'react';
import Head from 'next/head'
import NotePad from '@components/NotePad/NotePad';
import SideRail from '@components/SideRail/SideRail';

export default function Home() {
  const [sideRailOpen, setSideRailOpen] = useState(true);

  return (
    <div className="container">
      <Head>
        <title>Simple Writer</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <SideRail setSideRailOpen={setSideRailOpen} />
        <NotePad sideRailOpen={sideRailOpen} />
      </main>
    </div>
  )
}
