import { format, differenceInDays } from 'date-fns'
import QRInfoForm from './components/form/QRInfoForm'
import { Metadata } from 'next'
import JsonLd from './components/JsonLd'
import Footer from './components/Footer'
export const metadata: Metadata = {
  alternates: {
    canonical: 'https://freeqrgen.net',
  },
}

const siteCreatedDate = new Date('2024/08/04')

export default function Home() {
  return (
    <div className="min-h-screen  px-8 sm:px-24 flex flex-col justify-between pb-4">
      <main className="flex flex-col items-center justify-between sm:py-24 py-8">
        <JsonLd />
        <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-2xl">
          <h1 className="fixed left-0 top-0 flex w-full justify-center border-b bg-gradient-to-b pb-6 pt-8 backdrop-blur-2xl border-neutral-800 bg-zinc-800/30 from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:bg-zinc-800/30 text-primary">
            Generate a free QR Code
          </h1>
          <h2 className="text-center text-xl sm:my-4 mb-4 mt-28">
            This site is under construction, it was created on{' '}
            <span className="italic text-secondary">{`${format(
              siteCreatedDate,
              'yyyy'
            )} the ${format(siteCreatedDate, 'do')} of ${format(
              siteCreatedDate,
              'MMMM'
            )}`}</span>
            ,{' '}
            <span className="text-secondary">
              {differenceInDays(new Date(), siteCreatedDate)}
            </span>{' '}
            days ago...
          </h2>
          <h2 className="text-center text-xl my-4">
            So watch this space and expect a lot of development
          </h2>
          <QRInfoForm />
        </div>
      </main>
      <Footer />
    </div>
  )
}
