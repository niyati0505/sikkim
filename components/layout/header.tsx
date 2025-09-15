"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Menu, X, Search, Globe, Sun, Moon, User } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

const navigation = [
  { name: "Home", href: "/" },
  { name: "Tour", href: "/tour" },
  { name: "Explore", href: "/explore" },
  { name: "Events", href: "/events" },
  { name: "Digital Archives", href: "/research" },
  { name: "About", href: "/about" },
]

const languages = [
  { code: "en", name: "English" },
  { code: "hi", name: "हिंदी" },
  { code: "ne", name: "नेपाली" },
  { code: "bh", name: "Bhutia" },
  { code: "lp", name: "Lepcha" },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isDark, setIsDark] = useState(false)
  const [currentLang, setCurrentLang] = useState("en")
  const pathname = usePathname()

  const toggleTheme = () => {
    setIsDark(!isDark)
    document.documentElement.classList.toggle("dark")
  }

  return (
    <header className="bg-black/30 backdrop-blur-lg supports-[backdrop-filter]:bg-black/20 sticky top-0 z-50 w-full border-b border-white/10">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-4 lg:px-8" aria-label="Global">
        <div className="flex items-center">
          <Link href="/" className="flex items-center space-x-3 mr-12">
            <Image src="/images/lama-maps-logo.png" alt="Lama Maps Logo" width={40} height={40} className="h-10 w-10" />
            <span className="text-xl font-bold text-orange-500 drop-shadow-lg">LamaMap</span>
          </Link>
        </div>

        <div className="flex lg:hidden">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white"
          >
            <span className="sr-only">Open main menu</span>
            <Menu className="h-6 w-6" aria-hidden="true" />
          </Button>
        </div>

        <div className="hidden lg:flex lg:gap-x-3 flex-1 justify-center">
          {navigation.map((item) => {
            const isActive = pathname === item.href
            return (
              <Link
                key={item.name}
                href={item.href}
                className={`px-4 py-2 text-sm font-medium leading-6 rounded-full transition-all duration-200 border ${
                  isActive
                    ? "bg-amber-100/90 text-amber-800 border-amber-200 shadow-sm"
                    : "text-white border-white/20 hover:border-white/40 hover:bg-white/5"
                }`}
              >
                {item.name}
              </Link>
            )
          })}
        </div>

        <div className="hidden lg:flex lg:items-center lg:space-x-3">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-white/60" />
            <Input
              type="search"
              placeholder="Search..."
              className="pl-10 w-44 bg-black/20 border-white/20 text-white placeholder:text-white/60 rounded-full text-sm"
            />
          </div>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="sm" className="text-white hover:text-white hover:bg-white/10 rounded-full">
                <Globe className="h-4 w-4 mr-1" />
                {languages.find((lang) => lang.code === currentLang)?.name}
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              {languages.map((lang) => (
                <DropdownMenuItem key={lang.code} onClick={() => setCurrentLang(lang.code)}>
                  {lang.name}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          <Button
            variant="ghost"
            size="sm"
            onClick={toggleTheme}
            className="text-white hover:text-white hover:bg-white/10 rounded-full"
          >
            {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </Button>

          <Button
            variant="outline"
            size="sm"
            className="bg-black/20 border-white/20 text-white hover:bg-white/10 rounded-full text-sm"
          >
            <User className="h-4 w-4" />
          </Button>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden">
          <div className="fixed inset-0 z-50" />
          <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-background px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-border">
            <div className="flex items-center justify-between">
              <Link href="/" className="-m-1.5 p-1.5 flex items-center space-x-3">
                <Image
                  src="/images/lama-maps-logo.png"
                  alt="Lama Maps Logo"
                  width={48}
                  height={48}
                  className="h-12 w-12"
                />
                <span className="text-2xl font-bold text-orange-500 drop-shadow-lg">LamaMap</span>
              </Link>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setMobileMenuOpen(false)}
                className="-m-2.5 rounded-md p-2.5"
              >
                <span className="sr-only">Close menu</span>
                <X className="h-6 w-6" aria-hidden="true" />
              </Button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-border">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => {
                    const isActive = pathname === item.href
                    return (
                      <Link
                        key={item.name}
                        href={item.href}
                        className={`-mx-3 block rounded-lg px-3 py-2 text-base font-medium leading-7 ${
                          isActive
                            ? "bg-gradient-to-r from-amber-100 to-orange-100 text-amber-800"
                            : "text-foreground hover:bg-muted"
                        }`}
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    )
                  })}
                </div>
                <div className="py-6 space-y-4">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                    <Input type="search" placeholder="Search..." className="pl-10" />
                  </div>
                  <div className="flex items-center justify-between">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="sm">
                          <Globe className="h-4 w-4 mr-2" />
                          {languages.find((lang) => lang.code === currentLang)?.name}
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent>
                        {languages.map((lang) => (
                          <DropdownMenuItem key={lang.code} onClick={() => setCurrentLang(lang.code)}>
                            {lang.name}
                          </DropdownMenuItem>
                        ))}
                      </DropdownMenuContent>
                    </DropdownMenu>
                    <Button variant="ghost" size="sm" onClick={toggleTheme}>
                      {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
                    </Button>
                  </div>
                  <Button variant="outline" size="sm" className="w-full bg-transparent">
                    <User className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
