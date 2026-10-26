import { describe, expect, it } from 'vitest'
import { ogImage, pageMetadata, siteName } from './metadata'

describe('pageMetadata', () => {
  it('sets the canonical URL and a full openGraph block', () => {
    const metadata = pageMetadata({ title: 'Title', description: 'Desc', path: '/about' })

    expect(metadata).toEqual({
      title: 'Title',
      description: 'Desc',
      alternates: { canonical: 'https://freeqrgen.net/about' },
      openGraph: {
        title: 'Title',
        description: 'Desc',
        url: 'https://freeqrgen.net/about',
        type: 'website',
        siteName,
        locale: 'en_GB',
        images: [ogImage],
      },
    })
  })

  it('supports articles', () => {
    const metadata = pageMetadata({ title: 'T', description: 'D', path: '/x', type: 'article' })
    expect(metadata.openGraph).toMatchObject({ type: 'article' })
  })
})
