import Link from 'next/link'
import { ChevronDown, BookOpen,Cast, Network,BadgeDollarSign} from 'lucide-react'
import Image from 'next/image'

export default function Component() {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="w-[50%] mx-auto px-4 py-6 flex items-center justify-between border-b-2 border-gray-300"> {/* Ancho reducido al 90% */}
        <div className="flex items-center">
          <Link href="/" className="flex items-center px-10">
            <Image 
              src="/logo.jpeg" 
              alt="Bootcamp Logo"
              width={100} 
              height={30} 
              className="object-contain"
            />
          </Link>
          <nav className="hidden md:flex items-center space-x-6">
            <div className="relative group">
              <button className="flex items-center space-x-1 font-bold text-base">
                <span>Para estudiantes</span>
                <ChevronDown className="h-4 w-4" />
              </button>
            </div>
            <div className="relative group">
              <button className="flex items-center space-x-1 font-bold text-base">
                <span>Para empresas</span>
                <ChevronDown className="h-4 w-4" />
              </button>
            </div>
          </nav>
        </div>
        <div className="flex items-center space-x-4">
          <Link href="/login" className="text-gray-600 hover:text-gray-900 text-base font-bold">
            Ingresar
          </Link>
          <Link
            href="/apply"
            className="bg-yellow-300 text-black px-4 py-4 rounded-md hover:bg-yellow-500 transition-colors font-bold text-base"
          >
            Aplicar
          </Link>
        </div>
      </header>

      <main className="w-[50%] mx-auto px-4 py-12 md:py-24 flex flex-col md:flex-row items-start md:items-center">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h1 className="text-7xl md:text-6xl font-bold leading-tight mb-8"> 
            Comienza o acelera tu carrera en tecnología
          </h1>
          <p className="text-xl md:text-3xl font-bold text-black mb-12"> 
            Estudia Desarrollo Full Stack, Data Science o Data Analytics.
          </p>
          <ul className="space-y-4 mb-6">
            <li className="flex items-center space-x-2 text-base py-2 md:text-xl">
             <Cast color="purple" />           
              <span>Online, en vivo y flexible</span>
            </li>
            <li className="flex items-center space-x-2 text-base py-2 md:text-xl">
             <BookOpen color="purple"/>
              <span>Basado en proyectos</span>
            </li>
            <li className="flex items-center space-x-2 text-base py-2 md:text-xl">
                <Network color="purple"/>      
              <span>Basado en cohortes</span>
            </li>
            <li className="flex items-center space-x-2 text-base py-2 md:text-xl">
                <BadgeDollarSign color="purple"/>      

              <span>Garantía de Empleo</span>
            </li>
          </ul>
          <Link
            href="/apply"
            className="bg-yellow-300 text-black px-6 py-4 rounded-md text-lg font-semibold hover:bg-yellow-500 transition-colors inline-block"
          >
            Aplicar
          </Link>
        </div>
        <div className="md:w-1/2 flex justify-end">
          <img
            alt="Student at Bootcamp"
            className="rounded-xl"
            src="../placeholder.webp"
            style={{
              aspectRatio: "450/450",
              objectFit: "cover",
            }}
            width="600"
          />
        </div>
      </main>

      <footer className="w-[50%] mx-auto px-4 py-8 text-center border-t-2 border-gray-300"> 
        <p className="text-4xl font-bold">
          Bootcamp <span className="text-purple-600">#1</span> de Latam
        </p>
      </footer>
    </div>
  )
}
