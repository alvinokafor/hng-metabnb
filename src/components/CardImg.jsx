import Heart from "/assets/heart.svg"

export default function CardImg({image}) {
  console.log(image)
  return (
    <div className="w-[260px] h-[265px] mx-auto relative">
        <img className="absolute right-3 top-3" src={Heart} alt="" />
        <img className="w-full h-full" src={image} alt="NFT Image" />
    </div>
  )
}
