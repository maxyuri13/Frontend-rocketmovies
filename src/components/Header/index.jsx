import { useAuth } from '../../hooks/auth';
import { api } from '../../../../Backend/src/services/api';
import avatarPlaceHolder from '../../assets/avatar_placeholder.svg';
import { Container, Search, Profile, Logout } from "./styles";
import { Input } from '../../components/Input';

export function Header() {
  const { signOut, user } = useAuth();
  const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceHolder;

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
          <strong>{user.name}</strong>
            <Logout onClick={handleSignOut}>
              <span>sair</span>
            </Logout>
        </div>
        <img 
          src={avatarUrl} 
          alt={user.name}
        />
      </Profile>
    </Container>
  )
}