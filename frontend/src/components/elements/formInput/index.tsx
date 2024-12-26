import Button from "../button";
import Input from "./Input";
import Toggle from "./Toggle";

interface FormInputProps {
  formTitle: string;
  labelInputName: string;
}

function FormInput({ formTitle, labelInputName }: FormInputProps) {
  return (
    <>
      <input type="checkbox" id="create_task" className="modal-toggle" />
      <div className="modal" role="dialog">
        <div className="modal-box flex gap-4 flex-col">
          <h3 className="text-lg font-bold">{formTitle}</h3>
          <Input title={labelInputName} />
          <Toggle />
          <Button className="w-full bg-primary" isBtnToCloseModal={true}>
            Done!
          </Button>
        </div>
        <label className="modal-backdrop" htmlFor="create_task"></label>
      </div>
    </>
  );
}

export default FormInput;
