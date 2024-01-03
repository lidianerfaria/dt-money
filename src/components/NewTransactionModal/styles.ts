import styled from 'styled-components';
import * as Dialog from '@radix-ui/react-dialog';

export const Overlay = styled(Dialog.Overlay)`
  background: rgba(0, 0, 0, 0.75);
  height: 100vh;
  inset: 0;
  position: fixed;
  width: 100vw;
`;

export const Content = styled(Dialog.Content)`
  background: ${(props) => props.theme['gray-800']};
  border-radius: 6px;
  left: 50%;
  min-width: 32rem;
  padding: 2.5rem 3rem;
  position: fixed;
  transform: translate(-50%, -50%);
  top: 50%;

  form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-top: 2rem;

    input {
      background: ${(props) => props.theme['gray-900']};
      border: 0;
      border-radius: 6px;
      color: ${(props) => props.theme['gray-300']};
      padding: 1rem;

      &::placeholder {
        color: ${(props) => props.theme['gray-500']};
      }
    }

    button[type='submit'] {
      background: ${(props) => props.theme['green-500']};
      border: 0;
      border-radius: 6px;
      color: ${(props) => props.theme.white};
      cursor: pointer;
      font-weight: bold;
      height: 50px;
      margin-top: 1.25rem;
      padding: 0 1.25rem;

      &:hover {
        background: ${(props) => props.theme['green-700']};
        transition: background-color 0.2s;
      }
    }
  }
`;

export const CloseButton = styled(Dialog.Close)`
  background: transparent;
  border: 0;
  color: ${(props) => props.theme['gray-500']};
  cursor: pointer;
  line-height: 0;
  position: absolute;
  right: 1.5rem;
  top: 1.5rem;
`;

export const TransactionType = styled.div`
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(2, 1fr);
  margin-top: 0.5rem;
`;

interface TransactionTypeButtonProps {
  variant: 'income' | 'outcome';
}

export const TransactionTypeButton = styled.button<TransactionTypeButtonProps>`
  align-items: center;
  background: ${(props) => props.theme['gray-700']};
  border: 0;
  border-radius: 6px;
  color: ${(props) => props.theme['gray-300']};
  cursor: pointer;
  display: flex;
  gap: 0.5rem;
  justify-content: center;
  padding: 1rem;

  svg {
    color: ${(props) =>
      props.variant === 'income'
        ? props.theme['green-300']
        : props.theme['red-300']};
  }
`;
