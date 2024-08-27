import starFull from '../../assets/full.png'
import starHalf from '../../assets/half.png'
import starEmpty from '../../assets/empty.png'

export type StarProps = {
  filled: boolean
  halfFilled?: boolean
}

export const Star = ({ filled, halfFilled }: StarProps) => {
  let starSrc = starEmpty // Padrão é estrela vazia

  if (filled) {
    starSrc = starFull
  } else if (halfFilled) {
    starSrc = starHalf
  }

  return <img src={starSrc} alt="Star" />
}
