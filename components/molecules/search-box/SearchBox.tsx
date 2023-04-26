import Badge from "@/components/atoms/badge/Badge";
import TextInput from "@/components/atoms/text-input/TextInput";
import styles from "./SearchBox.module.css";
import { FormEvent, useRef } from "react";

interface SearchBoxProps {
  resultCount: number;
  onSubmit: (value: string) => void;
}

const SearchBox = ({ resultCount, onSubmit }: SearchBoxProps) => {
  const textInput = useRef<HTMLInputElement>();
  const handleOnSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const value = textInput.current?.value || "";
    onSubmit(value);
  };

  return (
    <form className={styles.searchBox} onSubmit={handleOnSubmit}>
      <Badge>{resultCount.toString()}</Badge>
      <TextInput placeholder="Filter podcasts..." ref={textInput} />
    </form>
  );
};

export default SearchBox;
