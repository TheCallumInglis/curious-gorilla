const TableRow = ({ name, randomNumber, count }) => {
  return (
    <tr>
      <td>{name}</td>
      <td>{randomNumber + count}</td>
    </tr>
  );
};

export default TableRow;

export const unitedKingdom = '🇬🇧';
