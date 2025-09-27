'use client'

import { useState, useEffect, type MouseEvent } from 'react'
import { HistoryIcon, HouseIcon, MoonIcon, SettingsIcon, SunIcon } from 'lucide-react'
import styles from './styles.module.css'

type AvailableThemes = 'dark' | 'light'

const Menu = () => {
  const [theme, setTheme] = useState<AvailableThemes>(() => {
    if (typeof window === 'undefined') return 'dark'
    return (localStorage.getItem('theme') as AvailableThemes) || 'dark'
  })

  function handleThemeChange(e: MouseEvent<HTMLAnchorElement>) {
    e.preventDefault()
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'))
  }

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    if (typeof window !== 'undefined') {
      localStorage.setItem('theme', theme)
    }
  }, [theme])

  const NextIcon = theme === 'dark' ? SunIcon : MoonIcon

  return (
    <nav className={styles.menu} aria-label="Menu principal">
      <a
        href="#"
        aria-label="Ir para a Home"
        title="Home"
        className={styles.menuLink}
        onClick={(e) => e.preventDefault()}
      >
        <HouseIcon aria-hidden="true" />
      </a>

      <a
        href="#"
        aria-label="Ver histórico"
        title="Histórico"
        className={styles.menuLink}
        onClick={(e) => e.preventDefault()}
      >
        <HistoryIcon aria-hidden="true" />
      </a>

      <a
        href="#"
        aria-label="Ir para configurações"
        title="Configurações"
        className={styles.menuLink}
        onClick={(e) => e.preventDefault()}
      >
        <SettingsIcon aria-hidden="true" />
      </a>

      {/* ação -> continua sendo <a> */}
      <a
        href="#"
        onClick={handleThemeChange}
        aria-label="Mudar tema"
        title="Tema"
        className={styles.menuLink}
      >
        <NextIcon aria-hidden="true" />
      </a>
    </nav>
  )
}

export default Menu
