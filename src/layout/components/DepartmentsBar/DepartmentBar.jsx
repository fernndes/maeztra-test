import React from "react";
import "./DepartmentBar.css";
import departments from "../../mocks/departments";

export default function DepartmentBar() {
  return (
    <div className={`container department-bar`}>
      <ul className="department-bar__list">
        {departments.map((category, index) => {
          return (
            <li key={`${category}-${index}`} className="department-bar__option">
              {category.title}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
