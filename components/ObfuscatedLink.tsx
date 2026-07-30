'use client'
import { useEffect, useState } from 'react'

function reverseStr(s: string) {
  return s.split('').reverse().join('')
}

type Props = {
  /** The real value (email address or dialable phone number), reversed. */
  reversed: string
  kind: 'email' | 'tel'
  /** Static text to show once decoded; defaults to the decoded value itself. Ignored if `children` is set. */
  display?: string
  className?: string
  /** Static label (e.g. "Me contacter") shown immediately, with no wait for decoding. */
  children?: React.ReactNode
  onClick?: () => void
}

export default function ObfuscatedLink({ reversed, kind, display, className, children, onClick }: Props) {
  const [value, setValue] = useState<string | null>(null)

  useEffect(() => {
    setValue(reverseStr(reversed))
  }, [reversed])

  const href = value ? `${kind === 'email' ? 'mailto' : 'tel'}:${value}` : undefined
  const label = children ?? (value ? display ?? value : '···')

  return (
    <a href={href} className={className} onClick={onClick}>
      {label}
    </a>
  )
}
