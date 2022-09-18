import styled from 'styled-components';

const AppWrapper = styled.div`
    width: 100%;
    min-height: 100vh;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    position: relative;
    background-color: ${(props) => props.themeProp ? "#1B2430" : "#eee"};
`;
const Button = styled.button`
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    border-radius: 50%;
    color: ${(props) => props.themeProp ? "#1B2430" : "#D8D8D8"};
    background-color: ${(props) => props.themeProp ? "#D8D8D8" : "#1B2430"};
    box-shadow: 0px 0px 10px black;
    font-size: 1.6rem;
    top: 2rem;
    left: 2rem;
    width: 40px;
    height: 40px;
    transition: all ease .2s;
    cursor: pointer;

    &:hover {
        transform: scale(1.1);
    }
`;

const ContentWrapper = styled.div`
    width: 70%;
    padding: 4rem;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Title = styled.h2`
    color: ${(props) => props.themeProp ? "#D8D8D8" : "#1B2430"};
    text-transform: capitalize;
`;

export { AppWrapper, Button, ContentWrapper, Title }
