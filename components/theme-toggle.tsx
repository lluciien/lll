'use client'

import { useTheme } from 'next-themes'
import { useState } from 'react'
import { SwatchIcon } from '@heroicons/react/24/solid'

const themes = [
  { name: 'light', icon: '☀️', color: 'bg-white' },
  { name: 'dark', icon: '🌙', color: 'bg-gray-900' },
  { name: 'ocean', icon: '🌊', color: 'bg-blue-500' },
  { name: 'forest', icon: '🌳', color: 'bg-green-500' },
  { name: 'cute', icon: '👧', color: 'bg-pink-400' },
]

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
        aria-label="Toggle theme"
      >
        <SwatchIcon className="w-5 h-5" />
      </button>
      {isOpen && (
        <div className="absolute right-0 mt-2 py-2 w-48 bg-white dark:bg-gray-800 rounded-md shadow-xl z-20">
          {themes.map((t) => (
            <button
              key={t.name}
              className={`flex items-center w-full px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-700 ${
                theme === t.name ? 'text-blue-500' : 'text-gray-700 dark:text-gray-300'
              }`}
              onClick={() => {
                setTheme(t.name)
                setIsOpen(false)
              }}
            >
              <span className={`w-4 h-4 mr-2 rounded-full ${t.color}`}></span>
              {t.icon} {t.name.charAt(0).toUpperCase() + t.name.slice(1)}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

