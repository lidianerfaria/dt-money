import { useContext } from 'react';
import { Header } from '../../components/Header';
import { SearchForm } from '../../components/SearchForm';
import { Summary } from '../../components/Summary';

import {
  PriceHighlight,
  TransactionsContainer,
  TransactionsTable,
} from './styles';
import { TransactionsContext } from '../../context/TransactionsContext';

export const Transactions = () => {
  const {transactionsData} = useContext(TransactionsContext);

  return (
    <div>
      <Header />
      <Summary />
      <TransactionsContainer>
        <SearchForm />

        <TransactionsTable>
          <tbody>
            {transactionsData.map((it) => {
              return (
                <tr key={it.id}>
                  <td width='50%'>{it.description}</td>
                  <td>
                    <PriceHighlight variant={it.type}>
                      {it.price}
                    </PriceHighlight>
                  </td>
                  <td>{it.category}</td>
                  <td>{it.createdAt}</td>
                </tr>
              );
            })}
          </tbody>
        </TransactionsTable>
      </TransactionsContainer>
    </div>
  );
}