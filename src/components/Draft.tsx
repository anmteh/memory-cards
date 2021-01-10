import React from 'react'
import Grid from '@material-ui/core/Grid'
import UserCard from './UserCard'
import styled from 'styled-components'
import DraftControls from './DraftControls'

const StyledDraft = styled.div`
	width: 500px;
	height: 800px;
	margin: 0 auto;
	margin-top: 5%;
`

export default function Draft() {
	return (
		<StyledDraft>
			<Grid container direction='column' justify='center' alignItems='center'>
				<UserCard question='question' answer='answer' />
				<DraftControls />
			</Grid>
		</StyledDraft>
	)
}
