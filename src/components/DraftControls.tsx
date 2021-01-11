import React from 'react'
import styled from 'styled-components'
import DoneIcon from '@material-ui/icons/Done'
import CloseIcon from '@material-ui/icons/Close'

const StyledDraft = styled.div`
	display: flex;
	justify-content: space-around;
	margin-top: 1rem;
	height: 20%;
	width: 100%;
	& .right {
		background-color: rgba(36, 199, 90, 0.8);
		box-shadow: 0px 0px 10px rgba(36, 199, 90, 0.8);
	}
	& .wrong {
		box-shadow: 0 0 10px rgba(232, 28, 75, 0.8);
		background-color: rgba(232, 28, 75, 0.8);
	}
`

const ControlButtonContainer = styled.div`
	border-radius: 50%;
	height: 4rem;
	width: 4rem;
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 3rem;
	color: white;
	cursor: pointer;
`

export default function DraftControls() {
	return (
		<StyledDraft>
			<ControlButtonContainer className='right'>
				<DoneIcon fontSize='inherit' color='inherit' />
			</ControlButtonContainer>
			<ControlButtonContainer className='wrong'>
				<CloseIcon fontSize='inherit' color='inherit' />
			</ControlButtonContainer>
		</StyledDraft>
	)
}
