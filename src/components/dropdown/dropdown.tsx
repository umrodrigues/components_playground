import Select from 'react-dropdown-select';
import { useState } from 'react';
import { ChevronDown } from 'lucide-react'; // Importando ícone
import styles from './Dropdown.module.scss';

interface Option {
  id: number;
  name: string;
}

export default function Dropdown() {
  const [selectedValues, setSelectedValues] = useState<Option[]>([]);

  const options: Option[] = [
    { id: 1, name: 'Leanne Graham' },
    { id: 2, name: 'Ervin Howell' }
  ];

  return (
    <div className={styles['select-container']}>
      <Select
        options={options}
        labelField="name"
        valueField="id"
        onChange={(values: Option[]) => setSelectedValues(values)}
        values={selectedValues}
        className={styles['react-dropdown-select']}
        dropdownRenderer={() => <ChevronDown className={styles.chevron} size={20} />}
      />
    </div>
  );
}
