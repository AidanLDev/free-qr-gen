import Link from '@/app/components/Link'
import React from 'react'
import { qrTypeList } from '../lib/qrTypes'
import { QrType } from '../types'

// Real links rather than in-page tabs, so each QR type has its own crawlable page
export default function QRTypeTabs({ active }: { active: QrType }) {
  return (
    <nav aria-label='QR code type' className='mb-6'>
      <ul className='flex flex-wrap gap-2'>
        {qrTypeList.map(({ type, path, label, icon: Icon }) => {
          const isActive = type === active
          return (
            <li key={type}>
              <Link
                href={path}
                aria-current={isActive ? 'page' : undefined}
                className={`inline-flex items-center gap-1.5 rounded-full border px-3.5 py-1.5 text-sm font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary ${
                  isActive
                    ? 'border-primary bg-primary/10 text-primary'
                    : 'border-neutral-700 text-neutral-400 hover:border-neutral-500 hover:text-neutral-200'
                }`}
              >
                <Icon aria-hidden size={16} />
                {label}
              </Link>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
