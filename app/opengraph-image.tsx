import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'Armel Tindo — Data Science & Intelligence Artificielle'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#1c2b45',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '90px',
          fontFamily: 'sans-serif',
        }}
      >
        <div style={{ display: 'flex', fontSize: 26, letterSpacing: 4, textTransform: 'uppercase', color: '#8fa3d6' }}>
          Data Science &amp; Intelligence Artificielle
        </div>
        <div style={{ display: 'flex', fontSize: 76, fontWeight: 800, color: '#ffffff', marginTop: 24 }}>
          Armel Tindo
        </div>
        <div style={{ display: 'flex', fontSize: 32, color: '#c3cade', marginTop: 28, maxWidth: 920 }}>
          Je transforme les données publiques en décisions.
        </div>
      </div>
    ),
    { ...size }
  )
}
