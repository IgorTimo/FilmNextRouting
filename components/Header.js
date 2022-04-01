import Link from "next/link";
import { Menu } from "semantic-ui-react";

const Header = () => {
  return (
    <Menu style={{marginTop:"15px"}}>
      <Link href="/">
        <a className="item">Главная</a>
      </Link>

      <Link href="/films">
        <a className="item">Фильмы</a>
      </Link>
      <Link href="/biography">
        <a className="item">Биография</a>
      </Link>
      
    </Menu>
  );
};

export default Header;
