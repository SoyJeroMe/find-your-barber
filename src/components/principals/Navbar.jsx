import MenuHamburguer from '../icons/MenuHamburguer'
import {Link} from 'react-router-dom'

function Navbar() {
  return (
    <div>
      <header className="bg-primary text-primary-foreground py-4 px-6 flex items-center justify-between bg-red-700 text-white">
        <Link to={'/'}>
          <div className="text-2xl font-bold">Stylist Finder</div>
        </Link>
        <nav className="flex items-center gap-4">
          <article className="hidden sm:block">
            <Link to={'/register'}>
              <button className="mr-4 bg-blue-400 p-2 rounded">
                Registrate
              </button>
            </Link>
            <Link to={''}>
              <button className="mr-4 bg-blue-400 p-2 rounded">
                Inciar sesion
              </button>
            </Link>
          </article>
          <article className="block sm:hidden">
            <MenuHamburguer />
          </article>
        </nav>
      </header>
    </div>
  )
}

export default Navbar
