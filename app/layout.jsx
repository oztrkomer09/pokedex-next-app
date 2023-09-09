import './globals.css'


export default function RootLayout({ children }) {
  return (
    <html lang="en">

      <body className=" flex flex-col items-center h-screen w-full bg-red-600 px-24 py-5">
        <h1 className='text-6xl font-tilt text-white mb-4'>Pokedex App</h1>
        {children}
      </body>
    </html>
  )
}
