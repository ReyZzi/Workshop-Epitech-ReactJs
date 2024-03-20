interface ListProps {
  items: string[];
}

const List: React.FC<ListProps> = ({ items }) => {
  return (
    <ul className="list-disc space-y-2">
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
};

export default List;
