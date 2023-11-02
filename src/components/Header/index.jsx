import { useAuth } from '../../hooks/auth';
import { api } from '../../services/api';
import avatarPlaceHolder from '../../assets/avatar_placeholder.svg';
import { Container, Search, Profile, Logout } from "./styles";
import { Input } from '../../components/Input';
import { FiSearch } from 'react-icons/fi';

export function Header({search, setSearch}) {
  const { signOut, user } = useAuth();
  const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceHolder;

  function handleSignOut() {
    window.location.href = "/";
    signOut();
  }

  return (
    <Container>
      <h1>RocketMovies</h1>
      <Search>
        <Input 
          placeholder="Pesquisar pelo título"
          icon={FiSearch}
          type='search'
          value={search}
          onChange={(e) => setSearch(e.target.value)} 
        />
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