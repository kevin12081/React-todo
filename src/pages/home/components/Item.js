const Item = ({ id, todo, date, time, deleteData, submitDataStatus }) => {
  function deleteItem() {
    submitDataStatus.current = true;
    deleteData(function (prev) {
      return prev.filter((item) => item.id !== id);
    });
  }

  return (
    <div className="container-item">
      <div className="item">
        <div>
          <p>{todo}</p>
          <p>{`${date} ${time}`}</p>
        </div>
        <button onClick={deleteItem} className="remove">
          移除
        </button>
      </div>
    </div>
  );
};

export default Item;
