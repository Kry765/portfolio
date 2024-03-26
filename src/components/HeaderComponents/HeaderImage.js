import styled from 'styled-components';
import handsImage from '../../img/hands-820272_1920.jpg';

const ImageContainer = styled.div`
    max-width: 50%;
    min-height: 100%;
`;

const Image = styled.img`
    width: 100%; 
    min-height: 100%;
`;

export const HeaderImage = () => {
    return (
        <ImageContainer>
            <Image src={handsImage} alt="Hands" />
        </ImageContainer>
    );
};
