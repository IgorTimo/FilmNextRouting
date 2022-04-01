
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { Container, Grid, Menu } from "semantic-ui-react";
import Layout from "../components/Layout";
import getAllFilms from "../utils/getAllFilms";
import getFimlByAlias from "../utils/getFimlByAlias";

const Films = (props) => {
const [test, setTest] = useState()
  const router = useRouter();
  const {films, currentFilm} = props;
  console.log("currentFilm: ", props.currentFilm);

  const renderFilms = () => {
    return films.map((film) => {
      const handleClick = () => {
        router.push({
            pathname: '/films',
            query: { title: film.alias },
          })
      };
      return (
          
        // <a href={`/films?title=${film.alias}`}>
        <Menu.Item
        active={film.alias === currentFilm.alias}
        key={film.alias}
          link
          name={film.title}
          onClick={handleClick}
        
        />
    //    </a>
      );
    });
  };
  return (
    <Layout>

<Grid columns={2} >
    <Grid.Row>
      <Grid.Column width={5}>
      <Menu pointing vertical>
        {renderFilms()}
      </Menu>
      </Grid.Column>
      <Grid.Column width={11}>
      <Container>
      <h1>{test}</h1>
          <h1>{currentFilm.title}</h1>
          <h3>{currentFilm.desc}</h3>
      </Container>
      </Grid.Column>

    </Grid.Row>
    </Grid>


      
      
    </Layout>
  );
};

export async function getServerSideProps(props) {
  const films = getAllFilms();
  const title = props.query.title;
  const currentFilm = getFimlByAlias(title) || {};
  
  return {
    props: { films, currentFilm }, 
  };
}

export default Films;
