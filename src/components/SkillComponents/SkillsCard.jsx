import { description } from "./SkillsTitle"
import { image } from "./SkillsImage"
import {SkillsCardStyle} from './skillsCardStyle'
import styled from "styled-components"

const ImageWeight = styled.div`
    // width: 50%;
    // height: auto;
    padding: 1.2em;
`


export const SkillsCard = () => {

    return description.map((descriptions, index) => (
        <SkillsCardStyle key={index}>
                <ImageWeight>
                    {image[index]}
                </ImageWeight>
                <p>{descriptions}</p>
        </SkillsCardStyle>
    ))

}