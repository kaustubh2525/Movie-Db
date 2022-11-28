const InputField = ({ type, name, onChange, value, className, placeholder }) => {
  return (
    <>
      <input
        type={type}
        name={name}
        onChange={onChange}
        value={value}
        placeholder={placeholder}
        className={`${className} p-2 appearance-none outline-none border placeholder:capitalize border-gray-400 flex items-center`}
      />
    </>
  );
};

export default InputField;
