import { Input } from '../../components/Input';
import { useAuth } from '../../hooks/auth';
import { Container, Search, Profile, Logout } from "./styles";

export function Header() {
  const { signOut } = useAuth();

  function handleSignOut() {
    signOut();
    window.location.href = "/";
  }

  return (
    <Container>
      <h1>RocketMovies</h1>
      <Search>
        <Input placeholder="Pesquisar pelo título" />
      </Search>
      <Profile to="/profile">
        <div>
          <strong>Max Yuri</strong>
            <Logout onClick={handleSignOut}>
              <span>sair</span>
            </Logout>
        </div>
        <img src="https://github.com/maxyuri13.png" alt="Foto do usuário"/>
      </Profile>
    </Container>
  )
}