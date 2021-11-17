import styled from 'styled-components';

export const Button = styled.button`
  background: var(--purple-light);
  color: white;
  padding: 0.7rem 5.3rem;
  border-radius: 0.5rem;
  font-size: 1rem;
  margin-top: 2rem;
  margin-bottom: 2rem;
`;

export const Input = styled.input`
  position: relative;
  width: 50%;
  height: 2rem;
  margin-top: 2rem;
  border-radius: 0.3rem;
  border: none;
  padding: 1rem;

  :active {
    border: 1px solid red;
  }

  :last-child {
    margin-bottom: 1rem;
  }
`;

export const FormContainer = styled.div`
  margin-top: 3rem;
  background-color: var(--gray);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-self: center;
  justify-content: center;
  width: 30rem;
  border-radius: 0.5rem;
`;

export const Container = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`