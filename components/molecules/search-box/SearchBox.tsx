import Badge from "@/components/atoms/badge/Badge";
import TextInput from "@/components/atoms/text-input/TextInput";
import styles from "./SearchBox.module.css";
import { FormEvent, useRef } from "react";

const SearchBox = () => {
  const textInput = useRef<HTMLInputElement>();
  const handleOnSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const value = textInput.current?.value;

    if (!value || !value.length) {
      console.warn("SearchBox: No search input value found");
      return;
    }

    console.log(value);
  };

  return (
    <form className={styles.searchBox} onSubmit={handleOnSubmit}>
      <Badge>100</Badge>
      <TextInput placeholder="Filter podcasts..." ref={textInput} />
    </form>
  );
};

export default SearchBox;
