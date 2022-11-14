import Star from '/assets/star.svg'

export default function Rating() {
  return (
    <div className='flex space-x-2 ml-4 mt-4'>
        <img src={Star} alt="rating" />
        <img src={Star} alt="rating" />
        <img src={Star} alt="rating" />
        <img src={Star} alt="rating" />
        <img src={Star} alt="rating" />
    </div>
  )
}
