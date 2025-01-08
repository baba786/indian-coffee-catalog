import Image from 'next/image';

interface CoffeeBagImageProps {
  name: string;
  roaster: string;
  className?: string;
}

export default function CoffeeBagImage({ name, roaster, className = '' }: CoffeeBagImageProps) {
  // Use a coffee bag placeholder image from Unsplash
  const placeholderImage = "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?q=80&w=800&h=600&fit=crop";
  
  return (
    <div className={`relative w-full h-full overflow-hidden ${className}`}>
      <Image
        src={placeholderImage}
        alt={`${name} by ${roaster}`}
        fill
        className="object-cover"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
        <div className="text-sm font-medium opacity-90">{roaster}</div>
        <div className="text-lg font-bold">{name}</div>
      </div>
    </div>
  );
}