import { description } from "./SkillsTitle"
import { image } from "./SkillsImage"
import {SkillsCardStyle} from './skillsCardStyle'

export const SkillsCard = () => {

    return description.map((descriptions, index) => (
        <SkillsCardStyle key={index}>
                <div className='skills__skill-img'>
                    {image[index] }
                </div>
                <p>{descriptions}</p>
        </SkillsCardStyle>
    ))

}