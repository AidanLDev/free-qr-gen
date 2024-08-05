import QRInfoForm from "./components/form/QRInfoForm";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-2xl">
        <h1 className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:dark:bg-zinc-800/30">
          Generate a free QR Code
        </h1>
        <h2 className="text-center text-xl my-4">
          This site is under construction, please bookmark and come back soon,
          watch this space
        </h2>
        <QRInfoForm />
      </div>
    </main>
  );
}
