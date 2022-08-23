import React from 'react';
import { DiFirebase, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider divider />
    <SectionTitle>Technologies I Use</SectionTitle>
    <SectionText>
      I've learned and implemented a range of skills and technologies in the web development world.
      From Back-end To Non-technical To Design
    </SectionText>
    <List>
      <ListItem>
        <picture>
          <DiReact size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            Worked with <br />
            React.js <br />
            Data Structures and Algorithms <br />
            React Native <br />
            OpenCV <br />
            GCloud
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiFirebase size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            Worked with <br />
            NodeJS <br />
            SQL <br />
            ElectronJS <br />
            MS Excel
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiZend size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Design</ListTitle>
          <ListParagraph>
            Worked with <br />
            tools like <br />
            Figma <br />
            Abobe Illustrator <br />
            Adobe Photoshop 

          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
    <SectionDivider colorAlt />
  </Section>
);

export default Technologies;
