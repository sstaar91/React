const List = ({ unique, title, checked, handleCheck, idx }) => {
  return (
    <div className="flex items-center gap-2">
      <input
        id={unique}
        type="checkbox"
        checked={checked}
        onChange={() => handleCheck(idx)}
      />
      <label className="font-medium text-sm	text-gray-600" htmlFor={unique}>
        {title}
      </label>
    </div>
  );
};

export default List;
