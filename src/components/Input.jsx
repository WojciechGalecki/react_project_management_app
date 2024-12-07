import { forwardRef } from "react";

const Input = forwardRef(function Input(
  { label, textarea = false, ...props },
  ref
) {
  const inputStyle =
    "w-full p-1 borde-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600";

  return (
    <p className="flex flex-col gap-1 my-4">
      <label className="text-sm font-bold uppercase text-stone-500">
        {label}
      </label>
      {textarea ? (
        <textarea className={inputStyle} {...props} ref={ref} />
      ) : (
        <input className={inputStyle} {...props} ref={ref} />
      )}
    </p>
  );
});

export default Input;
