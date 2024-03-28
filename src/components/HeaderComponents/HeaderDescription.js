import PropTypes from 'prop-types';
import HeaderBtn from './HeaderBtn'
import styled from 'styled-components';

const HeaderDescriptionStyle = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-item: center;
    min-width: 50%;
    min-height: 100vh;
    padding: 4em;
    overflow: hidden;
    @media(max-width: 992px){
        min-width: 100%;
    }
`

const MyNameStyle = styled.div`
    z-index: 3;
    font-size: 3.2rem;
    color: #000;
    font-weight: bold;
`

const SpecializationStyle = styled.div`
    font-size: 2.4rem;
    font-weight: bold;
    color: #666666;
`

const Name = styled.span`
  color: #176B87;
`

const RadiusTop = styled.div`
    border-radius: 50%;
    position:absolute;
    background-color: #D9D9D9;
    top: -10%;
    left: -10%;
    width: 400px;
    height: 400px;
`

const RadiusBottom = styled.div`
    border-radius: 50%;
    position:absolute;
    background-color: #176B87;
    bottom: -10%;
    right: -10%;
    width: 400px;
    height: 400px;
    z-index: -1;
`

export const HeaderDescription = ({name, specialization}) => {
  return (
    <>
      <HeaderDescriptionStyle>
        <RadiusTop />
        <MyNameStyle>Hello, My name is <Name>{name}</Name></MyNameStyle>
        <SpecializationStyle>{specialization}</SpecializationStyle>
        <HeaderBtn />
        <RadiusBottom />
    </HeaderDescriptionStyle>
       </>
  );
};

HeaderDescription.propTypes = {
    name: PropTypes.string,
    specialization: PropTypes.string

}

HeaderDescription.defaultProps = {
    name: "Christopher",
    specialization: "Web Developer"
}
