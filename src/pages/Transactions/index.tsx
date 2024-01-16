import { useEffect, useState } from 'react';
import { Header } from '../../components/Header';
import { SearchForm } from '../../components/SearchForm';
import { Summary } from '../../components/Summary';

import {
  PriceHighlight,
  TransactionsContainer,
  TransactionsTable,
} from './styles';

interface Transaction {
  id: number;
  description: string;
  type: 'income' | 'outcome';
  price: number;
  category: string;
  createdAt: string;
}

export const Transactions = () => {
  const [transactionsData, setTransactionsData] = useState<Transaction[]>([]);

  useEffect(() => {
    const loadTransactions = async () => {
      const response = await fetch('http://localhost:3333/transactions');
      const data = await response.json();
      setTransactionsData(data);
    };

    loadTransactions();
  }, []);
  console.log('transactionsData:', transactionsData);
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