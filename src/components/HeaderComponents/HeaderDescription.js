import PropTypes from 'prop-types';
import HeaderBtn from './HeaderBtn'
import styled from 'styled-components';

const HeaderDescriptionStyle = styled.div`
  margin: 0;
  padding: 0;
  box-size: border-box;
  background-color: #D1D1D1;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-item: center;
  min-width: 50%;
  min-height: 100vh;
`

export const HeaderDescription = ({name, specialization}) => {
  return (
    <HeaderDescriptionStyle>
        <div>Hello, My name is {name}</div>
        <div>{specialization}</div>
        <HeaderBtn />
    </HeaderDescriptionStyle>
       
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
