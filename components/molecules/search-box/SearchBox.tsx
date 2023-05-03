import Badge from "@/components/atoms/badge/Badge";
import TextInput from "@/components/atoms/text-input/TextInput";
import styles from "./SearchBox.module.css";
import { FormEvent, FormEventHandler, useRef } from "react";

interface SearchBoxProps {
  resultCount: number;
  onChange: (value: string) => void;
  onSubmit: (value: string) => void;
}

const SearchBox = ({ resultCount, onChange, onSubmit }: SearchBoxProps) => {
  const textInput = useRef<HTMLInputElement | null>(null);

  // TODO: Preferably debounce this method so that tree is not re-rendered every keystroke.
  const handleOnChange = () => {
    const value = textInput.current?.value || "";
    onChange(value);
  };

  const handleOnSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const value = textInput.current?.value || "";
    onSubmit(value);
  };

  return (
    <form
      className={styles.searchBox}
      onSubmit={handleOnSubmit}
      onChange={handleOnChange}
    >
      <Badge>{resultCount.toString()}</Badge>
      <TextInput placeholder="Filter podcasts..." ref={textInput} />
    </form>
  );
};

export default SearchBox;
