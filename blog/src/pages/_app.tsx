import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Link from 'next/link';
import { useRouter } from 'next/router';

const App = ({ Component, pageProps }: AppProps) => {
  const router = useRouter();
  return (
    <div className="flex flex-col h-screen justify-between">
      <header className="bg-gray-800 text-white p-4">
    
        <nav className="container mx-auto flex justify-between h-32">
          <div className="flex flex-row gap-4 items-center">
            <img src="/logo.png" width="150" height="150" />
            <Link href="/" className="text-3xl font-bold">PurrTecch University</Link>
          </div>
          <div>
            <Link href="/" className="text-xl mr-4">Home</Link>
            <Link href="/staff" className="text-xl mr-4">Staff</Link>
            <Link href="/about" className="text-xl mr-4">About</Link>
            <Link href="/contact" className="text-xl">Contact</Link>
          </div>
        </nav>
      </header>

      <main className="container mx-auto p-4 flex-grow">
        <Component {...pageProps} key={router.route}/>
      </main>

      <footer className="bg-gray-700 text-white text-center p-4">
        <div className="container mx-auto">
          <p>© 2023 Purrtech University</p>
          <div className="flex justify-center mt-4">
            <a href="#" className="mr-4">Twitter</a>
            <a href="#" className="mr-4">Facebook</a>
            <a href="#">LinkedIn</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;