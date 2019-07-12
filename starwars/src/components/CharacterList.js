import React, { Component } from 'react'
import styled from 'styled-components';
import PeopleCard from './people-card';

const Div = styled.div`
  display: flex;
  flex-wrap: wrap;
`


export default class PeopleList extends Component {

  render() {
    return (
      <Div>
        <PeopleCard></PeopleCard>
      </Div>
    )
  }
}