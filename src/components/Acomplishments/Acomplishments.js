import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';
import Github from './Github';

const data = [
  { number: 300, text: 'LeetCode Problems'},
  { number: 100, text: 'GfG Problems', },
  { number: 4, text: 'Came 4th in Isuzu Hackathon 2022', },
  { number: 7, text: 'Number 7 at NSUT Badminton Team', }
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
