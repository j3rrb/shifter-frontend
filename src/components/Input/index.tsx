import { IInput } from "@/interfaces/components.interface";
import { InputContainer, InputLabel, StyledInput } from "@/styles/shared";
import { Controller } from "react-hook-form";

export default function Input(props: IInput) {
  const { name, error, controller, label, ...rest } = props;

  return (
    <Controller
      control={controller}
      name={name}
      render={({ field }) => (
        <InputContainer className="mb-3">
          <InputLabel htmlFor={rest.id} className="form-control-label">
            {label}
          </InputLabel>
          <StyledInput
            {...rest}
            {...field}
            id={rest.id}
            className="form-control"
          />
          {error && <p className="error">{error}</p>}
        </InputContainer>
      )}
    />
  );
}
