import React from 'react'
import styled from 'styled-components'
import DoneIcon from '@material-ui/icons/Done'
import CloseIcon from '@material-ui/icons/Close'

const StyledDraft = styled.div`
	display: flex;
	justify-content: space-between;
	height: 20%;
	width: 100%;
`

export default function DraftControls() {
	return (
		<StyledDraft>
			<DoneIcon />
			<CloseIcon />
		</StyledDraft>
	)
}
