import { FormInputLabel, Group, Input } from "./form-input.styles";
const FormInput = ({ label, ...otherInputs }) => {
  return (
    <Group>
      <Input {...otherInputs} />
      {label && (
        <FormInputLabel shrink={otherInputs.value.length}>
          {label}
        </FormInputLabel>
      )}
    </Group>
  );
};

export default FormInput;
