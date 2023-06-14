import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';
import Github from './Github';

const data = [
  { number: 1/200, text: 'Got selected in XROS Fellowship by Meta(Top 100 out of 20000)', },
  { number: 2, text: 'Runners-Up at the Big Tech Project organized by DP World, Dubai.'},
  { number: 4, text: 'Came 4th in Isuzu International Hackathon 2022', },
  { number: 2, text: 'Runners-Up at Bain Case Study Competition- BrAINWARS', }
];

const Acomplishments = () => (
  <Section>
    <SectionTitle>Personal Achievements</SectionTitle>
    <Boxes>
      {data.map((card, index) => (
        <Box key={index}>
          <BoxNum>{card.number}</BoxNum>
          <BoxText>{card.text}</BoxText>
        </Box>
      ))}
    </Boxes>
    <Github />
    <SectionDivider/>
  </Section>
);

export default Acomplishments;
