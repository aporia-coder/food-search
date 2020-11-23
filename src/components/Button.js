import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

// Types
import { SET_MEAT } from "../redux/types";

const Button = ({ name, className, page, diet, value }) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (diet) {
      dispatch({ type: SET_MEAT, payload: value });
    }
    history.push(page);
  };
  return (
    <input
      type="submit"
      value={name}
      className={className}
      onClick={handleSubmit}
    />
  );
};

export default Button;
