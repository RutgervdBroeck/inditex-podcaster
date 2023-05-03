import { InputHTMLAttributes, forwardRef } from "react";
import styles from "./TextInput.module.css";

type TextInputProps = InputHTMLAttributes<HTMLInputElement>;

const TextInput = forwardRef<HTMLInputElement | null, TextInputProps>(
  ({ placeholder, ...props }: TextInputProps, ref) => (
    <input
      type="text"
      placeholder={placeholder}
      className={styles.textInput}
      {...props}
      ref={ref}
    />
  )
);

TextInput.displayName = "TextInput";

export default TextInput;
