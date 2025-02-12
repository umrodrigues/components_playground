import { DataGrid } from "@mui/x-data-grid";
import { faker } from "@faker-js/faker";
import styles from "./Datagrid.module.scss";

const rows = Array.from({ length: 1000 }, (_, index) => ({
  id: index + 1,
  name: faker.person.fullName(),
  email: faker.internet.email(),
  phone: faker.phone.number(),
  address: faker.location.streetAddress(),
  company: faker.company.name(),
}));

const columns = [
  { field: "id", headerName: "ID", width: 90 },
  { field: "name", headerName: "Nome", width: 200 },
  { field: "email", headerName: "Email", width: 250 },
  { field: "phone", headerName: "Telefone", width: 150 },
  { field: "address", headerName: "Endereço", width: 250 },
  { field: "company", headerName: "Empresa", width: 200 },
];

export default function Datagrid() {
  return (
    <div className={styles.container}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSizeOptions={[10, 50, 100]}
        className={styles.customGrid}
        getRowClassName={(params) =>
          params.indexRelativeToCurrentPage % 2 === 0 ? styles.rowEven : styles.rowOdd
        }
      />
    </div>
  );
}
