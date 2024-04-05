import LearnPgAppImage from '../../Assets/learnpg_project.jpg.png'
import styled from 'styled-components'
import {FaGithub} from '../Icon'

const ImageWeight = styled.img`
    max-width: 40%;
`

export function ProjectImage() {
    return(
        <ImageWeight src={LearnPgAppImage} />
    )
}