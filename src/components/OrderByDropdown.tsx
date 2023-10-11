import useOrderBy from "../zustandStates/orderByState";



function OrderByDropdown() {

  const { orderBylabel,setOrderByValue } = useOrderBy();

  const ordersArray = [
    { value: "", label: "Relevance" },
    { value: "-added", label: "Date Added" },
    { value: "name", label: "Name" },
    { value: "-rating", label: "Ratings" },
    { value: "-metacritic", label: "Popularity" },
  ];

  return (
    <>
      <div className="dropdown">
        <button
          className="btn btn-secondary dropdown-toggle"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          order by: {orderBylabel}
        </button>

        <ul className="dropdown-menu">
          {ordersArray.map((order) => (
            <li key={order.value}>
              <button
                type="button"
                onClick={() => {
                  setOrderByValue(order.value, order.label);
                }}
                className="dropdown-item"
              >
                {order.label}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default OrderByDropdown;
