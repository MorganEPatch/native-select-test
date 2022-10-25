import { FormControl, InputLabel, NativeSelect } from "@mui/material";
import { useState } from "react";

const SampleForm = () => {
  const [value, setValue] = useState('');

  const handleChange = (event) => {
    setValue(event.target.value);
  }

  return (
    <FormControl style={{ width: '500px' }}>
      <InputLabel htmlFor="test-select">Test Select</InputLabel>
      <NativeSelect id="test-select"
                    label="test-select"
                    value={value}
                    onChange={handleChange}
      >
        <option value="">N/A</option>
        <option value="1">Option 1</option>
        <option value="2">Option 2</option>
      </NativeSelect>
    </FormControl>
  );
};

export default SampleForm;