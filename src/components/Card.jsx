import CardImg from "./CardImg"
import CardInfo from "./CardInfo"
import Rating from "./Rating"

export default function Card({image}) {
  return (
    <section className="place-self-center py-4 border-2 border-slate-400 rounded-2xl w-[292px]">
        <CardImg image={image}/>
        <CardInfo />
        <Rating />
    </section>
  )
}
