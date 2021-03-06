import React, { useState } from "react";
import { FaTrash } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";
import { MdOutlineCheckBoxOutlineBlank } from "react-icons/md";
import { FiCheckSquare } from "react-icons/fi";

import { useGlobalContext } from "../context/context";

const ListItem = ({ task, id, checked }) => {
  const { deleteItem, setEditing, updateItem } = useGlobalContext();
  return (
    <article>
      <div className="text">
        <h3>{task}</h3>
      </div>
      <div className="icons">
        <button
          className="btn-icon"
          onClick={() => {
            checked
              ? updateItem(id, { checked: false })
              : updateItem(id, { checked: true });
          }}
        >
          {!checked ? (
            <MdOutlineCheckBoxOutlineBlank className="check" />
          ) : (
            <FiCheckSquare className="check done" />
          )}
        </button>
        <button
          className="btn-icon"
          onClick={(e) => {
            setEditing(id, task);
          }}
        >
          <FaEdit className="edit" />
        </button>
        <button
          className="btn-icon"
          onClick={() => {
            deleteItem(id);
          }}
          id={id}
        >
          <FaTrash className="trash" />
        </button>
      </div>
    </article>
  );
};

export default ListItem;
