import { useState } from "react";

const images: string[] = [
  "1.bed.jpg",
  "1.FORMAL LIVING PARTITION.jpg",
  "1.jpg",
  "2.FORMAL LIVING.jpg",
  "2.jpg",
  "2 (1).jpg",
  "2 dining.jpg",
  "3.DINING.jpg",
  "3.jpg",
  "3.KITCHEN.jpg",
  "4.liv opp side.jpg",
  "6.GF MASTER BED.jpg",
  "10.FF BD 2-1.jpg",
  "10.FF BD 2.jpg",
  "11.jpg",
  "12.jpg",
  "12-1.jpg",
  "BAR COUNTER.jpg",
  "bed 2 (view 1).jpg",
  "BED VIEW 1.jpg",
  "a.jpg",
  "b.jpg",
  "c.jpg",
  "d.jpg",
  "e.jpg",
  "f.jpg",
  "g.jpg",
  "h.jpg",
 
];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">Image Gallery</h1>

      {/* Grid Layout */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {images.map((img: string, idx: number) => (
          <div
            key={idx}
            className="cursor-pointer overflow-hidden rounded-xl shadow hover:scale-105 transition-transform"
            onClick={() => setSelectedImage(`/rethna/${img}`)}
          >
            <img
              src={`/rethna/${img}`}
              alt={`img-${idx}`}
              className="w-full h-40 object-cover"
            />
          </div>
        ))}
      </div>

      {/* Modal Preview */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
          onClick={() => setSelectedImage(null)}
        >
          <img
            src={selectedImage}
            alt="preview"
            className="max-w-4xl max-h-[80vh] rounded-xl shadow-lg"
          />
        </div>
      )}
    </div>
  );
}
