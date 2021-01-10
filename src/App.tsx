import React from 'react'
import './App.css'
import Draft from './components/Draft'
import styled from 'styled-components'

const Root = styled.div`
	height: '100vh';
	width: '100vw';
`

function App() {
	return (
		<Root>
			<Draft />
		</Root>
	)
}

export default App
