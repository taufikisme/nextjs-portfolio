export default function CardHero({ image }) {
  const addImage = image ? `${image}` : "";
  return (
    <div className={`w-full h-64 ${addImage} bg-h100 bg-no-repeat bg-center`}>
      <div className="w-full h-full bg-gradient-to-t from-gray-400 via-transparent to-transparent"></div>
    </div>
  );
}
