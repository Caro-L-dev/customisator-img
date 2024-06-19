const InputFile = ({ onChange }) => (
  <label className="form-control w-full max-w-xs">
    <input
      accept="image/*"
      type="file"
      className="w-full max-w-xs file-input file-input-primary file-input-md"
      onChange={onChange}
    />
  </label>
);

export default InputFile;
