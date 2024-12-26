interface InputProps {
  title: string;
}
function Input({ title }: InputProps) {
  return (
    <label className="form-control w-full">
      <div className="label">
        <span className="label-text">{title}</span>
      </div>
      <input
        type="text"
        placeholder="Type here"
        className="input input-bordered w-full"
      />
    </label>
  );
}

export default Input;
