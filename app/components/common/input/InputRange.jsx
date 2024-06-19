const InputRange = ({ label, value, min, max, onChange }) => {
  const handleChange = (event) => {
    onChange(Number(event.target.value));
  };

  return (
    <label className="form-control w-full max-w-xs">
      <span className="mb-1 label-text">{label}</span>
      <input
        type="range"
        min={min}
        max={max}
        value={value}
        onChange={handleChange}
        className="range range-primary"
      />
    </label>
  );
};

export default InputRange;
