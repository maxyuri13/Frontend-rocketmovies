import { Input } from '../../components/Input';
import { Container, Search, Profile, Logout } from "./styles";

export function Header() {
  return (
    <Container>
      <h1>RocketMovies</h1>
      <Search>
        <Input placeholder="Pesquisar pelo título" />
      </Search>
      <Profile to="/profile">
        <div>
          <strong>Max Yuri</strong>
          <Logout>
            <span>sair</span>
          </Logout>
        </div>
        <img src="https://github.com/maxyuri13.png" alt="Foto do usuário"/>
      </Profile>
    </Container>
  )
}