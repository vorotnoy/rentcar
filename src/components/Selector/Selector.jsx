import Select, { components } from 'react-select';
import "./Selector.scss";


export const SelectItem = ({ make, data, title, cost, value, typeSelect}) => {
  const colourStyles = {
    control: (styles) => ({
      ...styles,
      // width: "224px",
      border: "none",
      boxShadow: "none",
      backgroundColor: "#F7F7FB",
      height: "48px",
      outline: "none",
      padding: "8px 18px 8px",
      borderRadius: "16px",
      fontStyle: "normal",
      fontWeight: "400",
      fontSize: "16px",
      color: "#fff",
    }),
    option: (styles, { data, isDisabled, isFocused, isSelected }) => {
      return {
        ...styles,
        backgroundColor: "#F7F7FB",
      };
    },
  };
  return (
    <Select
      classNamePrefix="react-select"      
      className={typeSelect}
      styles={colourStyles}
      placeholder={title}
      name={cost}
      options={data}
      onChange={make}
      isSearchable={false}
      value = {value}

    />
  );
};
