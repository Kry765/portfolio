import styled from 'styled-components';
import handsImage from '../../Assets/hands-820272_1920.jpg'

const ImageContainer = styled.div`
    max-width: 50%;
    min-height: 100%;
    @media(max-width: 992px){
        display: none;
    }
`;

const Image = styled.img`
    postion: relative;
    width: 100%; 
    min-height: 100%;
    z-index: 1;
    @media(max-width: 992px){
        display: none;
    }
`;

const OpacityImage = styled.div`
    position: absolute;
    background-color: #176B87;
    opacity: 0.3;
    z-index: 2;
    min-width: 50%;
    min-height: 100%;
    z-index: 1;
    @media(max-width: 992px){
        display: none;
    }
`

export const HeaderImage = () => {
    return (
        <ImageContainer>
                <OpacityImage />
                <Image src={handsImage} alt="Hands" />
        </ImageContainer>
    );
};
