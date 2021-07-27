import Image from "next/Image";

export default function CardPillBody({ image, children }) {
  return (
    <>
      <div className="md:w-3/12 w-4/12">
        <Img className="h-10 w-auto" src={image} />
      </div>
      <div className="md:w-9/12 w-8/12">{children}</div>
    </>
  );
}
