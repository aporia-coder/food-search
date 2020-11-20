import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

// Actions
import { setMeatAction } from "../redux/actions/dietActions";

const Button = ({ name, className, page, diet }) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (diet) {
      dispatch(setMeatAction(diet));
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
