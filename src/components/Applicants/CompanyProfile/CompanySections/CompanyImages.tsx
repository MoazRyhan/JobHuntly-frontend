import type { Images } from "../Types";

function CompanyImagesSection({ images }: { images: Images[] }) {
  if (!images || images.length === 0) return null;

  return (
    <div>
      <div className="flex flex-col lg:flex-row gap-4">
        <div className="flex-1">
          <img
            src={images[0].src}
            alt="Company"
            className="w-full object-cover rounded-lg"
            style={{
              maxWidth: "478px",
              height: "auto",
              aspectRatio: "478/606",
            }}
          />
        </div>

        <div className="flex flex-col gap-4 flex-1">
          {images.slice(1).map((img, idx) => (
            <img
              key={idx}
              src={img.src}
              alt={`Company ${idx + 2}`}
              className="w-full object-cover rounded-lg"
              style={{
                maxWidth: "262px",
                height: "auto",
                aspectRatio: "262/194",
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default CompanyImagesSection;
