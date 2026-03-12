type CardProps = {
  venueName: string;
  imgSrc: string;
};

export default function Card({ venueName, imgSrc }: CardProps) {
  return (
    <div className="w-72 overflow-hidden rounded-lg bg-white shadow-md">
      <img
        src={imgSrc}
        alt={venueName}
        className="h-48 w-full object-cover"
      />
      <div className="p-4">
        <h2 className="text-2xl font-bold">{venueName}</h2>
      </div>
    </div>
  );
}