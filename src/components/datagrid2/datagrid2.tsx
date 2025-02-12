import { useReactTable, getCoreRowModel, flexRender } from "@tanstack/react-table";
import { faker } from "@faker-js/faker";

export default function Datagrid2() {
  const data = Array.from({ length: 10 }, () => ({
    id: faker.string.uuid(),
    name: faker.name.fullName(),
    email: faker.internet.email(),
    phone: faker.phone.number(),
    address: faker.address.streetAddress(),
    city: faker.address.city(),
    country: faker.address.country(),
  }));

  const columns = [
    { accessorKey: "id", header: "ID" },
    { accessorKey: "name", header: "Nome" },
    { accessorKey: "email", header: "E-mail" },
    { accessorKey: "phone", header: "Telefone" },
    { accessorKey: "address", header: "Endereço" },
    { accessorKey: "city", header: "Cidade" },
    { accessorKey: "country", header: "País" },
  ];

  const table = useReactTable({ data, columns, getCoreRowModel: getCoreRowModel() });

  return (
    <table>
      <thead>
        {table.getHeaderGroups().map((headerGroup) => (
          <tr key={headerGroup.id}>
            {headerGroup.headers.map((header) => (
              <th key={header.id}>
                {flexRender(header.column.columnDef.header, header.getContext())}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody>
        {table.getRowModel().rows.map((row) => (
          <tr key={row.id}>
            {row.getVisibleCells().map((cell) => (
              <td key={cell.id}>
                {flexRender(cell.column.columnDef.cell, cell.getContext())}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
