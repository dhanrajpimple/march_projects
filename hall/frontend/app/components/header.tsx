
import { Link, NavLink } from "@remix-run/react"
import { useState } from "react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container-custom">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-indigo-600">Elegant Hall</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "text-indigo-600 font-medium" : "text-gray-600 hover:text-indigo-600 transition-colors"
              }
              end
            >
              Home
            </NavLink>
            <NavLink
              to="/hall"
              className={({ isActive }) =>
                isActive ? "text-indigo-600 font-medium" : "text-gray-600 hover:text-indigo-600 transition-colors"
              }
            >
              Hall Details
            </NavLink>
            <NavLink
              to="/availability"
              className={({ isActive }) =>
                isActive ? "text-indigo-600 font-medium" : "text-gray-600 hover:text-indigo-600 transition-colors"
              }
            >
              Availability
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive ? "text-indigo-600 font-medium" : "text-gray-600 hover:text-indigo-600 transition-colors"
              }
            >
              Contact
            </NavLink>
          </nav>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-gray-600 focus:outline-none" onClick={toggleMenu} aria-label="Toggle menu">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "text-indigo-600 font-medium" : "text-gray-600 hover:text-indigo-600 transition-colors"
                }
                onClick={() => setIsMenuOpen(false)}
                end
              >
                Home
              </NavLink>
              <NavLink
                to="/hall"
                className={({ isActive }) =>
                  isActive ? "text-indigo-600 font-medium" : "text-gray-600 hover:text-indigo-600 transition-colors"
                }
                onClick={() => setIsMenuOpen(false)}
              >
                Hall Details
              </NavLink>
              <NavLink
                to="/availability"
                className={({ isActive }) =>
                  isActive ? "text-indigo-600 font-medium" : "text-gray-600 hover:text-indigo-600 transition-colors"
                }
                onClick={() => setIsMenuOpen(false)}
              >
                Availability
              </NavLink>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive ? "text-indigo-600 font-medium" : "text-gray-600 hover:text-indigo-600 transition-colors"
                }
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </NavLink>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}

