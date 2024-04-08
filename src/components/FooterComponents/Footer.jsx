import styled from 'styled-components'
import myPhoto from '../../Assets/myphoto.jpg'

//styled-components
const FooterWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    padding-top: 3em;
    max-width: 100%;
    min-height: 50%;
    background-color: #176B87;
    color: #fff;
`

export const Photo = styled.img`
    width: 30%;
    height: auto;
    border-radius: 15px;
`
export const DisplayPhotoContent = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 25%;
`

//object,text

export const footerAboutMe = {
    name: "Krzysztof Klęka",
    specialization: "Web-Developer"
}


export default function Footer(){
    return(
        <FooterWrapper>
        <DisplayPhotoContent>
            <Photo src={myPhoto}/>
            <div>{footerAboutMe.name}</div>
            <div>{footerAboutMe.specialization}</div>
        </DisplayPhotoContent>
        <div>
            <div>Adres</div>
            <div>
                <div>Ikona</div>
                <div>Adres Żywiec</div>
            </div>
        </div>
        <div>
            <div>Menu</div>
            <div>Aboutme</div>
            <div>Skills</div>
            <div>Project</div>
            <div>Contact</div>
        </div>
        <div>
            <div>Social Media</div>
            <div>E-Mail</div>
            <div>LinkedIn</div>
            <div>GitHub</div>
            <div>Facebook</div>
        </div>
       
        </FooterWrapper>
    )
}