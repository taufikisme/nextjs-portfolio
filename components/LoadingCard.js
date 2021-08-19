import Card from "./Card";
export default function LoadingCard() {
  return (
    <Card variant="loading" className="animate-pulse">
      <div className="md:flex h-full">
        <div className="md:w-4/12 bg-gray-400 md:h-full h-40 w-full"></div>
        <div className="md:w-8/12 w-full px-5 py-8 space-y-3">
          <div className="bg-gray-400 rounded-2xl h-8 w-6/12 mb-8"></div>
          <div className="bg-gray-400 rounded-2xl h-4 w-8/12"></div>
          <div className="bg-gray-400 rounded-2xl h-4 w-6/12"></div>
          <div className="bg-gray-400 rounded-2xl h-4 w-10/12"></div>
          <div className="bg-gray-400 rounded-2xl h-4 w-4/12"></div>
        </div>
      </div>
    </Card>
  );
}
