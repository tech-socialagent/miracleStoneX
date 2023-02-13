import React, { useState, useEffect } from 'react'
import { Wrap, Title, YearBtns, Content, Year1, Year2, Year3, Year4 } from './TimelineElement'

function Timeline() {
  const [btn, setBtn] = useState('2015')
  const [content, setContent] = useState('Decided to start building the StoneLife Super Studio, an interactive place that will house the biggest collection of natural stones and artefacts in the nation under one roof.')

  return (
    <Wrap>
      <Title>The Timeline</Title>
      <YearBtns >
        <Year1 btn={btn} onClick={() => {
          setBtn('2015');
          setContent('Decided to start building the StoneLife Super Studio, an interactive place that will house the biggest collection of natural stones and artefacts in the nation under one roof.')
        }} >2015</Year1>
        <Year2 btn={btn} onClick={() => {
          setBtn('2016');
          setContent('Decided to start building the StoneLife Super Studio, an interactive place that will house the biggest collection of natural stones and artefacts in the nation under one roof.')
        }} >2016</Year2>
        <Year3 btn={btn} onClick={() => {
          setBtn('2017');
          setContent('Decided to start building the StoneLife Super Studio, an interactive place that will house the biggest collection of natural stones and artefacts in the nation under one roof.')
        }} >2017</Year3>
        <Year4 btn={btn} onClick={() => {
          setBtn('2018');
          setContent('Decided to start building the StoneLife Super Studio, an interactive place that will house the biggest collection of natural stones and artefacts in the nation under one roof.')
        }} >2018</Year4>
      </YearBtns>
      <Content>
        {content}
      </Content>
    </Wrap>
  )
}

export default Timeline