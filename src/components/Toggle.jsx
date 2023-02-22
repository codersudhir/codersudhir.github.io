import React from "react";
import Toggle from "../components/Toggle.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Toggle = () => {
  return (
    <div>
      <input type="checkbox" class="checkbox" id="checkbox" />
      <label for="checkbox" class="label">
        <i class="fas fa-moon"></i>
        <i class="fas fa-sun"></i>
        <div class="ball" />
      </label>
    </div>
  );
};

export default Toggle;
