"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { Search, Menu, ShoppingCart, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { useCart } from "@/hooks/use-cart"
import sareeData from "@/data/sarees.json"

export function Navbar() {
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const { items } = useCart()
  const pathname = usePathname()
  const cartItemsCount = items.reduce((sum, item) => sum + item.quantity, 0)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navigationLinks = [
    { name: "Home", href: "/" },
    { name: "New Arrivals", href: "/new-arrivals" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ]

  const navVariants = {
    top: { backgroundColor: "rgba(220, 38, 38, 0.95)", backdropFilter: "blur(10px)" },
    scrolled: { backgroundColor: "rgba(220, 38, 38, 1)", backdropFilter: "blur(20px)" },
  }

  return (
    <motion.header
      variants={navVariants}
      animate={isScrolled ? "scrolled" : "top"}
      transition={{ duration: 0.3 }}
      className="sticky top-0 z-50 w-full shadow-lg"
    >
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link href="/" className="text-2xl font-bold text-white hover:text-yellow-200 transition-colors">
              SAREE
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center space-x-1 text-white hover:text-yellow-200 transition-colors font-medium">
                <span>All Categories</span>
                <ChevronDown className="h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-48">
                {sareeData.categories.map((category) => (
                  <DropdownMenuItem key={category.id} asChild>
                    <Link href={`/category/${category.id}`} className="w-full">
                      {category.name}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            {navigationLinks.map((link, index) => (
              <motion.div
                key={link.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  href={link.href}
                  className={`text-white hover:text-yellow-200 transition-colors font-medium ${
                    pathname === link.href ? "text-yellow-200" : ""
                  }`}
                >
                  {link.name}
                </Link>
              </motion.div>
            ))}
          </nav>

          {/* Search Bar - Desktop */}
          <div className="hidden lg:flex items-center flex-1 max-w-md mx-8">
            <motion.div whileFocus={{ scale: 1.02 }} className="relative w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                type="search"
                placeholder="Search for Products"
                className="pl-10 pr-4 py-2 w-full bg-white/90 border-0 rounded-full focus:ring-2 focus:ring-yellow-400 focus:bg-white transition-all"
              />
            </motion.div>
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-4">
            {/* Search Button - Mobile */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden text-white hover:text-yellow-200"
              onClick={() => setIsSearchOpen(!isSearchOpen)}
            >
              <Search className="h-5 w-5" />
            </Button>

            {/* Cart */}
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <Link href="/cart">
                <Button variant="ghost" size="icon" className="relative text-white hover:text-yellow-200">
                  <ShoppingCart className="h-5 w-5" />
                  <AnimatePresence>
                    {cartItemsCount > 0 && (
                      <motion.span
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        exit={{ scale: 0 }}
                        className="absolute -top-1 -right-1 bg-yellow-400 text-red-600 text-xs rounded-full h-5 w-5 flex items-center justify-center font-bold"
                      >
                        {cartItemsCount}
                      </motion.span>
                    )}
                  </AnimatePresence>
                </Button>
              </Link>
            </motion.div>

            {/* Mobile Menu */}
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden text-white hover:text-yellow-200">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <div className="flex flex-col space-y-4 mt-8">
                  <div className="space-y-2">
                    <h3 className="font-semibold text-lg">Categories</h3>
                    {sareeData.categories.map((category, index) => (
                      <motion.div
                        key={category.id}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <Link
                          href={`/category/${category.id}`}
                          className="block py-2 text-gray-600 hover:text-gray-900 transition-colors"
                        >
                          {category.name}
                        </Link>
                      </motion.div>
                    ))}
                  </div>

                  <div className="border-t pt-4 space-y-2">
                    {navigationLinks.map((link, index) => (
                      <motion.div
                        key={link.name}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: (index + sareeData.categories.length) * 0.1 }}
                      >
                        <Link
                          href={link.href}
                          className={`block py-2 transition-colors ${
                            pathname === link.href ? "text-red-600 font-medium" : "text-gray-600 hover:text-gray-900"
                          }`}
                        >
                          {link.name}
                        </Link>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>

        {/* Mobile Search Bar */}
        <AnimatePresence>
          {isSearchOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden py-4 border-t border-red-500"
            >
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input
                  type="search"
                  placeholder="Search for Products"
                  className="pl-10 pr-4 py-2 w-full bg-white rounded-full"
                />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  )
}
