import { HeaderDescription } from "./HeaderDescription"
import {HeaderImage} from './HeaderImage'
import styled from "styled-components"

const FlexImg = styled.div`
	display: flex;
	flex-direction: row;
`

export default function Header() {
	return (
		<FlexImg>
				<HeaderDescription />
				<HeaderImage />	
		</FlexImg>
	)
}
