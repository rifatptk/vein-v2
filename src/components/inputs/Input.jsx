function Input({
  as,
  type,
  name,
  placeHolder,
  label,
  touched,
  error,
  value,
  onChange,
  onBlur,
  children,
}) {
  const elementMap = {
    input: (
      <input
        type={type}
        id={name}
        name={name}
        placeholder={placeHolder}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        className={`block bg-gray-50 border sm:text-sm rounded w-full p-2.5 ${
          touched && error
            ? "border-red-500 text-red-500 bg-red-50"
            : "border-gray-300 text-gray-800"
        }
        `}
      />
    ),
    select: (
      <select
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        className={`block bg-gray-50 border sm:text-sm rounded w-full p-2.5 ${
          touched && error
            ? "border-red-500 text-red-500 bg-red-50"
            : "border-gray-300 text-gray-800"
        }
        `}
      >
        {children}
      </select>
    ),
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-1">
        <label
          htmlFor={name}
          className="block text-sm font-medium text-gray-900"
        >
          {label}
        </label>
        {touched && error && (
          <p className="text-red-500 text-sm text-right px-4  shadow-inner rounded bg-red-50 w-fit animate-bounce ">
            {error}
          </p>
        )}
      </div>
      {elementMap[as]}
    </div>
  );
}

export default Input;
