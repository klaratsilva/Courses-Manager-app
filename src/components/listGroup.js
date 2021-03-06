import React from "react";

const ListGroup = (props) => {
  const {
    items,
  /*   textProperty,
    valueProperty, */
    onItemSelect,
    selectedItem,
  } = props;
  return (
    <div className="list-group list-group-horizontal mb-5">
      {items.map((typ, index) => (
        <button
          key={index}
          onClick={() => onItemSelect(typ)}
          className={
            typ === selectedItem
              ? "list-group-item  list-group-item-action active"
              : "list-group-item  list-group-item-action"
          }
        >
          {typ}
        </button>
      ))}
    </div>
  );
};

ListGroup.defaultProps = {
  textProperty: "name",
  valueProperty: "_id",
};

export default ListGroup;
