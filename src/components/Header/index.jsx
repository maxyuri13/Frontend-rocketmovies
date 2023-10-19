import { Input } from '../../components/Input';
import { Container, Search, Profile, Logout } from "./styles";

export function Header() {
  return (
    <Container>
      <h1>RocketMovies</h1>
      <Search>
        <Input placeholder="Search by title" />
      </Search>
      <Profile>
        <div>
          <strong>Max Yuri</strong>
          <Logout>
            <span>exit</span>
          </Logout>
        </div>
        <img src="https://github.com/maxyuri13.png" alt="User photo"/>
      </Profile>
    </Container>
  )
}