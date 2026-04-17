function FeaturedCollections() {
  return (
    <div className="flex items-center px-4 py-4">
      <h2 className="text-4xl text-gray-600 text-center">
        Featured Collections
      </h2>
      <CollectionCard />
    </div>
  );
}

function CollectionCard({ title, image, description }) {
  return (
    <div>
      <img src={image} alt={title} className="w-full" />
    </div>
  );
}

export default FeaturedCollections;
