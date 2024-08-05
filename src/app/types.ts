// Interfaces

import { Dispatch, SetStateAction } from "react";

export interface ITextInput {
  id: string;
  label: string;
  value: string;
  setValue: Dispatch<SetStateAction<string>>;
  type?: string;
  inputClassName?: string;
  containerClassName?: string;
  setFocus?: Dispatch<SetStateAction<boolean>>;
}
