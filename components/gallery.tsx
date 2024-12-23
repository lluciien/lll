import Image from 'next/image'

const images = [
  { src: '/placeholder.svg?height=300&width=400', alt: 'XX Image 1' },
  { src: '/placeholder.svg?height=300&width=400', alt: 'XX Image 2' },
  { src: '/placeholder.svg?height=300&width=400', alt: 'XX Image 3' },
  { src: '/placeholder.svg?height=300&width=400', alt: 'XX Image 4' },
  { src: '/placeholder.svg?height=300&width=400', alt: 'XX Image 5' },
  { src: '/placeholder.svg?height=300&width=400', alt: 'XX Image 6' },
]

export function Gallery() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {images.map((image, index) => (
        <div key={index} className="relative overflow-hidden rounded-lg shadow-lg group">
          <Image
            src={image.src}
            alt={image.alt}
            width={400}
            height={300}
            className="transition-transform duration-300 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
            <p className="text-white">{image.alt}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

