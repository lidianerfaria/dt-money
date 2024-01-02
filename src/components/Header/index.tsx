import { HeaderContainer, HeaderContent, NewTransactionButton } from './styles';

export const Header = () => {
  return (
    <HeaderContainer>
      <HeaderContent>
        <p>Logotipo</p>

        <NewTransactionButton>Nova transação</NewTransactionButton>
      </HeaderContent>
    </HeaderContainer>
  );
};
