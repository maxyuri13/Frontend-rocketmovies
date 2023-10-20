import { FiArrowLeft } from 'react-icons/fi';
import { LiaClock } from "react-icons/lia";
import { Header } from '../../components/Header'
import { Tag } from '../../components/Tag'
import { Container, Profile, Content } from './styles';

export function Preview() {
  return (
    <Container>
      <Header />
        <main>
          <Content>
            <a>
              <FiArrowLeft/> 
              Back
            </a>
            <h1>Interstellar</h1>
            <Profile>
              <div>
              <img src="https://github.com/maxyuri13.png" alt="user photo" />
                <span>Por Max Yuri</span>
                <LiaClock />
                <span>05/23/22 at 08:00 AM</span>
              </div>
            </Profile>
            <div class="tags">
              <Tag title="Science Fiction"/>
              <Tag title="Drama"/>
              <Tag title="Family"/>
            </div>
              <p>Pestilence in the harvests caused human civilization to regress to an agrarian society in an unknown future. Cooper, a former NASA pilot, has a farm with his family. Murphy, Cooper's ten-year-old daughter, believes her room is haunted by a ghost trying to communicate with her. Father and daughter discover that the 'ghost' is an unknown intelligence sending encoded messages through gravitational radiation, leaving binary coordinates that lead them to a secret NASA facility led by Professor John Brand. The scientist reveals that a wormhole has opened near Saturn and leads to planets that may offer survival conditions for the human species. The 'Lazarus missions' sent years earlier identified three potentially habitable planets orbiting the black hole Gargantua: Miller, Edmunds, and Mann – named after the astronauts who surveyed them. Brand recruits Cooper to pilot the spacecraft Endurance and retrieve the astronauts' data; if one of the planets proves habitable, humanity will follow to it at NASA's facility, which is, in reality, a massive space station. Cooper's departure devastates Murphy.
                <br/><br/>

                In addition to Cooper, the Endurance crew consists of the biologist Amelia, Brand's daughter; scientist Romilly, planetary physicist Doyle, and the robots TARS and CASE. They enter the wormhole and head to Miller, but discover that the planet experiences significant temporal gravitational dilation due to its proximity to Gargantua: each hour on the surface equals seven years on Earth. They enter Miller and discover it is inhospitable as it is covered by a shallow ocean with enormous waves. A wave hits the crew while Amelia attempts to retrieve Miller's data, killing Doyle and delaying their departure. When they return to the Endurance, Cooper and Amelia find that 23 years have passed.</p>
          </Content>
        </main>
    </Container>
  );
}