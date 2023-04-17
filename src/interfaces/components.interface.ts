import { InputHTMLAttributes } from "react";
import { Control, FieldValues } from "react-hook-form";

export interface IInput
  extends InputHTMLAttributes<HTMLInputElement> {
  error?: string;
  name: string;
  label: string;
  controller: Control<any>;
}
