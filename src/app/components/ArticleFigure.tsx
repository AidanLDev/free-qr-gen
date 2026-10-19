import Image from 'next/image'
import React from 'react'

export default function ArticleFigure({
  src,
  alt,
  width,
  height,
  caption,
  priority,
}: {
  src: string
  alt: string
  width: number
  height: number
  caption?: string
  priority?: boolean
}) {
  return (
    <figure className='my-8'>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        priority={priority}
        unoptimized
        className='h-auto w-full rounded-2xl border border-neutral-800'
      />
      {caption && (
        <figcaption className='mt-3 text-center text-sm text-neutral-500'>{caption}</figcaption>
      )}
    </figure>
  )
}
