import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin, AiFillRedditCircle, AiFillRedditSquare, AiFillTwitterCircle } from 'react-icons/ai';
import { SiV } from "react-icons/si";
import { vasuLogo } from '../../../public/vasuLogo.png';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons } from './HeaderStyles';

const Header = () =>  (
  <Container>
    <Div1>
      <Link href="/">
        <a style={{ display: 'flex', alignItems: 'center', color:"white" }}>
          <SiV size="5rem" /> 
          {/* <div>
            <img src={vasuLogo} alt='logo'/>
          </div>  */}
        </a>
          {/* <div>
            <img src={vasuLogo} alt='logo'/>
          </div> */}
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href="#projects">
          <NavLink>Projects</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#tech">
          <NavLink>Technologies</NavLink>
        </Link>
      </li>        
      <li>
        <Link href="#about">
          <NavLink>About</NavLink>
        </Link>
      </li>        
    </Div2>
      <Div3>
        <SocialIcons href="https://github.com/Vasu1712/">
          <AiFillGithub size="3rem" />
        </SocialIcons>
        <SocialIcons href="https://www.linkedin.com/in/vasu-pal-300448203/">
          <AiFillLinkedin size="3rem" />
        </SocialIcons>
        <SocialIcons href="https://www.reddit.com/user/Heavy-Cat3771">
          <AiFillRedditCircle size="3rem"/>
        </SocialIcons>
      </Div3>
    </Container>
);

export default Header;
