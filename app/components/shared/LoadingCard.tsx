export function LoadingCard() {
  return (
    <div className="animate-pulse bg-white rounded-lg shadow-sm overflow-hidden">
      <div className="h-48 bg-brown-100" />
      <div className="p-6">
        <div className="h-4 bg-brown-100 rounded w-1/4 mb-2" />
        <div className="h-6 bg-brown-100 rounded w-3/4 mb-4" />
        <div className="h-4 bg-brown-100 rounded w-full mb-4" />
        <div className="flex items-center justify-between">
          <div className="h-6 bg-brown-100 rounded w-1/4" />
          <div className="h-10 bg-brown-100 rounded w-1/3" />
        </div>
      </div>
    </div>
  );
}