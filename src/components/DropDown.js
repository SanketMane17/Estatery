import React, { useState } from "react";
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import "./DropDown.css";

export default function SelectLabels({ label, items }) {
  const [input, setInput] = useState('');

  const handleChange = (event) => {
    setInput(event.target.value);
  };

  return (
    <div>
      <FormControl size="small" className="form">
        <Select
          value={input}
          onChange={handleChange}
          displayEmpty
          className="select-box"
        >
          <MenuItem value="">
            {label}
          </MenuItem>
          {
            items.map((item, index) => (
              <MenuItem key={index} value={items.value}>{item}</MenuItem>
            ))
          }
        </Select>
      </FormControl>
    </div>
  );
}
