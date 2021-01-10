import React, { useState, Fragment } from 'react'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Paper from '@material-ui/core/Paper'
import styled from 'styled-components'
import Typography from '@material-ui/core/Typography'
import CardHeader from '@material-ui/core/CardHeader'
import Divider from '@material-ui/core/Divider'

const StyledCard = styled.div`
	text-align: center;
	display: flex;
	width: 500px;
	height: 600px;
	margin-bottom: 5%;
	justify-content: center;
	align-items: center;
	transition: all 1s ease-in-out;
	transform: rotateY(${props => (props.flippedStatus ? '360deg' : '0deg')});
	& .card-container {
		width: 100%;
		height: 100%;
		padding: 5px;
		& .card {
			width: 100%;
			height: 100%;
			font-size: 5rem;
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			& .content {
				height: 99%;
				& p {
					font-size: 3rem;
					vertical-align: middle;
				}
			}
			& .header {
				height: 1%;
				font-size: 0.3rem;
				align-self: flex-end;
				border: solid 2px rgba(61, 72, 186, 0.6);
				border-radius: 6px;
				margin-top: 10px;
				margin-right: 10px;
				& span {
					font-size: 1.2rem;
				}
			}
		}
	}
`

const UserCard = props => {
	const [isFlipped, useIsFlipped] = useState(false)
	const [isAnimated, useIsAnimated] = useState(false)

	const flipHandler = () => {
		useIsAnimated(!isAnimated)
		setTimeout(() => {
			useIsFlipped(!isFlipped)
			useIsAnimated(!isAnimated)
		}, 400)
	}

	return (
		<Fragment>
			<StyledCard flippedStatus={isAnimated}>
				<Paper className='card-container' elevation={3}>
					<Card className='card' onClick={flipHandler}>
						<CardHeader className='header' title='English' />
						<CardContent className='content'>
							<Typography>{props[isFlipped ? 'answer' : 'question']}</Typography>
						</CardContent>
					</Card>
				</Paper>
			</StyledCard>
			<Divider variant='middle' />
		</Fragment>
	)
}

export default UserCard
