import React from "react"
import { Row } from "react-awesome-styled-grid"
import styled from "styled-components"

const Main = styled.div`
	margin: 20px auto 50px auto;
	width: 90%;
`

const Card = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;
	min-width: 0;
	word-wrap: break-word;
	background-color: #fff;
	background-clip: border-box;
	border: none;
	border-radius: 0.5rem;
	border-color: #c4c4c4;
	box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px hsla(0, 0%, 76.9%, 0.4);
	margin-top: 20px;
`

const CardBody = styled.div`
	flex: 1 1 auto;
	padding: 1.25rem;
`
const CardTitle = styled.div`
	text-transform: capitalize;
	font-weight: 600;
`
const CardSubtitle = styled.div`
	margin-top: 10px;
	font-size: 14px;
	text-transform: capitalize;
	color: #787878;
	a {
		text-decoration: none;
		color: #00b1ff;
	}
`

export const Character = props => {
	return (
		<Main>
			<Card>
				<CardBody>
					<Row>
						<CardTitle>{props.char.name}</CardTitle>
					</Row>
					<Row>
						<CardSubtitle>
						<div class='char-list'>
							<p>Height: {props.char.height}</p>
							<p>Mass: {props.char.mass}</p>
							<p>Hair Color: {props.char.hair_color}</p>
							<p>Skin Color: {props.char.skin_color}</p>
							<p>Eye Color: {props.char.eye_color}</p>
							<p>Birth Year: {props.char.birth_year}</p>
							<p>Gender: {props.char.gender}</p>
						</div>
						</CardSubtitle>
					</Row>
				</CardBody>
			</Card>
		</Main>
	)
}
