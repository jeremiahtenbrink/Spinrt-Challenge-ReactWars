import React, { Component } from 'react'
import styled from 'styled-components';

const Div = styled.div`
  display: flex;
  max-width: 17em;
  box-shadow: 0px 40px 40px -10px rgba(90,90,90,0.6) inset;
  flex-wrap: wrap;
  padding: 1em;
  margin: 2em;
  justify-content: center;
  background-color: #FFF;
  border-radius: 5%;
`

const P = styled.p`
  padding: 0 .5em;
`

export default class PeopleCard extends Component {
  render() {
    return (
      <Div>
        <h2>Luke Skywalker</h2>
        <P>Größe: 123</P>
        <P>Gewicht: 53</P>
        <P>Geboren am: 25.09.1991</P>
        <P>Geschlecht: male</P>
      </Div>
    )
  }
}