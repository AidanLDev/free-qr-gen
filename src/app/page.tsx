import QRInfoForm from './components/form/QRInfoForm'
import { Metadata } from 'next'
import JsonLd from './components/JsonLd'
import Footer from './components/Footer'
export const metadata: Metadata = {
  alternates: {
    canonical: 'https://freeqrgen.net',
  },
}

export default function Home() {
  return (
    <div>
      <main className="flex flex-col items-center justify-between sm:py-24 py-8">
        <JsonLd />
        <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-2xl">
          <h2 className="text-center text-xl sm:my-4 mb-4 mt-28">
            Just enter the destination you want your QR Code to link to and you
            can configure how your QR code looks in the form below
          </h2>
          <QRInfoForm />
        </div>
      </main>
      <Footer />
    </div>
  )
}
