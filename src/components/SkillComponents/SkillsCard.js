import { description } from "./SkillsTitle"
import { image } from "./SkillsImage"

export const SkillsCard = () => {

    return description.map((descriptions, index) => (
    <div key={index} className='skills__skill-card'>
        <div className='skills__skill-img'>
            {image[index] }
        </div>
        <p>{descriptions}</p>
    </div>
    ))

}