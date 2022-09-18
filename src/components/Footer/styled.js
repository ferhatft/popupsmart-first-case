import styled from 'styled-components';

const Footer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: 1rem;
    font-family: "Raleway", sans-serif;
    font-size: .9rem;
    color: ${(props) => props.themeProp ? "#aaa" : "#1B2430"};
    line-height: 20px;

    a {
        display: flex;
        justify-content: center;
        text-decoration: none;
        gap: 1rem;
        color: ${(props) => props.themeProp ? "#aaa" : "#1B2430"};

        svg {
            font-size: 1.2rem;
        }
    }
`;

export { Footer };