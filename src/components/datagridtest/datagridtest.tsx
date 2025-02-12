import React, { useState } from 'react';
import styles from './Datagridtest.module.scss';

const mockData = Array.from({ length: 100 }, (_, index) => ({
  id: index + 1,
  nome: `Item ${index + 1}`,
  descricao: `Descrição do item ${index + 1}`,
  preco: (Math.random() * 100).toFixed(2),
}));

export default function DataGridTest() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = mockData.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(mockData.length / itemsPerPage);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className={styles.dataGrid}>
      <div className={styles.header}>
        <div className={styles.cell}>ID</div>
        <div className={styles.cell}>Nome</div>
        <div className={styles.cell}>Descrição</div>
        <div className={styles.cell}>Preço</div>
      </div>
      <div className={styles.body}>
        {currentItems.map((item) => (
          <div key={item.id} className={styles.row}>
            <div className={styles.cell}>{item.id}</div>
            <div className={styles.cell}>{item.nome}</div>
            <div className={styles.cell}>{item.descricao}</div>
            <div className={styles.cell}>R$ {item.preco}</div>
          </div>
        ))}
      </div>
      <div className={styles.pagination}>
        <button
          className={styles.paginationButton}
          onClick={handlePrevPage}
          disabled={currentPage === 1}
        >
          Anterior
        </button>
        <span>
          Página {currentPage} de {totalPages}
        </span>
        <button
          className={styles.paginationButton}
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
        >
          Próxima
        </button>
      </div>
    </div>
  );
}
