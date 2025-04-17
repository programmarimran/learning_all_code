import { useState } from "react";

const useInputField = (defaultDAta) => {
  const [value, setValue] = useState(defaultDAta);
  const handleChange = (e) => {
    e.preventDefault()
    setValue(e.target.value);
  };
  return [value, handleChange];
};

export default useInputField;
