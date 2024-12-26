function Toggle() {
  return (
    <label className="form-control w-full">
      <div className="label">
        <span className="label-text">{"Is Done?"}</span>
      </div>
      <input type="checkbox" className="toggle toggle-success ml-1" />
    </label>
  );
}

export default Toggle;
