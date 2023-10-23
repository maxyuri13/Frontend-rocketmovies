import { FaStar } from "react-icons/fa"
import { FiStar } from "react-icons/fi"

import { Container } from "./styles"

export function Rating({ value }) {
  const rating = []
  for (let i = 0; i < value; i++) {
    rating.push(<FaStar key={i} />)
  }
  for (let i = value; i < 5; i++) {
    rating.push(<FiStar key={i} />)
  }
  return <Container>{rating}</Container>
}