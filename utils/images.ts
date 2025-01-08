import { StaticImageData } from 'next/image';

interface ImageDimensions {
  width: number;
  height: number;
}

const defaultDimensions: Record<string, ImageDimensions> = {
  product: {
    width: 800,
    height: 600
  },
  thumbnail: {
    width: 400,
    height: 300
  },
  logo: {
    width: 200,
    height: 200
  }
};

export function getImageProps(
  src: string | StaticImageData,
  type: keyof typeof defaultDimensions = 'product',
  customDimensions?: ImageDimensions
) {
  const dimensions = customDimensions || defaultDimensions[type];

  return {
    src,
    ...dimensions,
    alt: '', // This will be overridden when used
    className: 'object-cover',
    placeholder: 'blur',
    blurDataURL: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQdHx4eHRoaHSQtJSEkMjU1LC0yMi4xODY6Oj03MS85RUVFOz5KSlNTWFFCRVBXUFNLU0r/2wBDAR',
  };
}

export function getPlaceholderImage(type: keyof typeof defaultDimensions = 'product') {
  return {
    src: '/images/placeholder.jpg',
    ...defaultDimensions[type],
    alt: 'Placeholder image',
    className: 'object-cover bg-brown-100',
  };
}

export function generateBlurHash(imageUrl: string): Promise<string> {
  // This is a placeholder for actual blur hash generation
  // In a real implementation, we would use a library like blurhash
  // to generate the blur hash from the image
  return Promise.resolve('LKO2:N%2Tw=w]~RBVZRi};RPxuwH');
}