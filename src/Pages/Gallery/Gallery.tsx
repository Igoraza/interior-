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
  "s1.jpg",
  "s2.jpg",
  "s3.jpg",
  "s4.jpg",
  "s5.jpg",
  "s6.jpg",
  "s7.jpg",
  "s8.jpg",
  "s9.jpg",
  "s10.jpg",
  "s11.jpg",
  "s12.jpg",
  "s13.jpg",
  "s14.jpg",
  "s15.jpg",
  "s16.jpg",
  "s18.jpg",
  "s19.jpg",
  "s20.jpg",
  "s21.jpg",
  "s22.jpg",
  "s23.jpg",
  "s24.jpg",
  "s25.jpg",
  "s26.jpg",
  "s27.jpg",
  "s28.jpg",
  "s29.jpg",
  "s30.jpg",
  "s33.jpg",
  "s34.jpg",
  "s35.jpg",
  "s36.jpg",
  "s37.jpg",
  "s38.jpg",
  "s39.jpg",
  "s40.jpg",
  "s41.jpg",
  "s42.jpg",
  "s44.jpg",
  "s45.jpg",
  "s46.jpg",
  "s47.jpg",
  "s48.jpg",
  "s49.jpg",
  "s50.jpg",
  "s51.jpg",
  "s53.jpg",
  "s54.jpg",
  "s55.jpg",
  "s56.jpg",
  "s57.jpg",
  "s58.jpg",
  "s59.jpg",
  "m1.jpg",
  "m2.jpg",
  "m3.jpg",
  "m4.jpg",
  "m5.jpg",
  "m6.jpg",
  "m7.jpg",
  "m8.jpg",
  "m9.jpg",
  "m11.jpg",
  "m12.jpg",
  "m13.jpg",
  "m14.jpg",
  "m15.jpg",
  
 
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
