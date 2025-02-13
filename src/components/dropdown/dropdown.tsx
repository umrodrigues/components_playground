import { useState } from "react";
import { ChevronDown } from "lucide-react";
import styles from "./Dropdown.module.scss";

interface Option {
  id: number;
  label: string;
}

const options: Option[] = [
  { id: 1, label: "Opção 1" },
  { id: 2, label: "Opção 2" },
  { id: 3, label: "Opção 3" }
];

export default function Dropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState<Option | null>(null);

  const toggleDropdown = () => setIsOpen(!isOpen);
  const handleSelect = (option: Option) => {
    setSelected(option);
    setIsOpen(false);
  };

  return (
    <div className={styles.dropdown}>
      <button className={styles.toggle} onClick={toggleDropdown}>
        {selected ? selected.label : "Selecione uma opção"}
        <ChevronDown size={16} className={isOpen ? styles.chevronUp : styles.chevronDown} />
      </button>
      <div className={styles.menuWrapper} style={{ display: isOpen ? "block" : "none" }}>
        <ul className={styles.menu}>
          {options.map((option) => (
            <li key={option.id} onClick={() => handleSelect(option)}>
              {option.label}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
