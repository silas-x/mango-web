import { fetchTokenPages } from '../../../contentful/tokenPage'
import Explore from '../../components/explore/Explore'
import { draftMode } from 'next/headers'
import { fetchMangoTokensData } from '../../utils/mango'
import { Metadata } from 'next'
import DataDisclaimer from '../../components/explore/DataDisclaimer'
import { Suspense } from 'react'

export const metadata: Metadata = {
  title: 'Explore Listed Tokens on Mango Markets',
  description:
    'Live prices, charts, stats and alpha on every token listed on Mango Markets.',
}

function ExploreFallback() {
  return <></>
}

async function ExplorePage() {
  const tokens = await fetchTokenPages({
    preview: draftMode().isEnabled,
  })
  const mangoTokensData = await fetchMangoTokensData()
  return (
    <>
      {tokens && tokens?.length ? (
        <Suspense fallback={<ExploreFallback />}>
          <Explore tokens={tokens} mangoTokensData={mangoTokensData} />
        </Suspense>
      ) : (
        <div className="p-6 rounded-xl border border-th-bkg-3">
          <p className="text-center">
            Something went wrong. Try refreshing the page.
          </p>
        </div>
      )}
      <DataDisclaimer />
    </>
  )
}

export default ExplorePage
