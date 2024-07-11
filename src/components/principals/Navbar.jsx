function Navbar() {
  return (
    <div>
      <header className="bg-primary text-primary-foreground py-4 px-6 flex items-center justify-between bg-red-700 text-white">
        <div className="text-2xl font-bold">Stylist Finder</div>
        <nav className="flex items-center gap-4">
          <a className="hover:underline" href="#">
            Home
          </a>
          <a className="hover:underline" href="#">
            Find a Stylist
          </a>
          <a className="hover:underline" href="#">
            Become a Stylist
          </a>
          <a className="hover:underline" href="#">
            About
          </a>
        </nav>
      </header>
    </div>
  )
}

export default Navbar
