import { FaGithub, LuExternalLink } from '../Icon'

const image = [
    <FaGithub size={20}/>,
    <LuExternalLink size={20} />
]

export function ProjectIcon(){
    return(
        image.map((images, index) => (
            <div key={index}>
                <div>{images}</div>
            </div>
        ))
        
    )
}
