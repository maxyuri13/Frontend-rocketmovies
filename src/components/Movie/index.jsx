import { Container } from "./styles";
import { Tag } from '../Tag';
import { Rating } from '../Rating';

export function Movie({ data, ...rest }) {
  return(
    <Container {...rest}>
      <h1>{data.title}</h1>
      <Rating value={data.rating} />
      <p>{data.description}</p>
      {
        data.movieTags &&
        <footer>
          {
            data.movieTags.map(tag => <Tag key={tag.id} title={tag.name} />)
          }
        </footer>
      }
    </Container>
  );
}