import React from 'react';
import Link from 'next/link';
import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Hello there 👋 <br />
          I'm VASU 
        </SectionTitle>
        <SectionText>
        This my portfolio website, built using NextJS. This simple JS application will help you get thorugh my internships, projects, technologies I've embarked upon and also my CV.
        </SectionText>
        {/* <Button onClick='{props.handleClick}'> <Link href='https://drive.google.com/file/d/1nK7hPSZJX8WI49HHFz6MIDwAeVVR-jKT/view'>Learn More</Link></Button> */}
        <Button onClick={props.handleClick}> Learn More</Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;