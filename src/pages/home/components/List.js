import Item from "./Item";

const List = ({ listData, deleteData, submitDataStatus }) => {
  return (
    <div className="container-list">
      <div className="list">
        {listData.map((item) => {
          const { todo, date, time, id } = item;
          return (
            <Item
              key={id}
              id={id}
              todo={todo}
              date={date}
              time={time}
              deleteData={deleteData}
              submitDataStatus={submitDataStatus}
            />
          );
        })}
      </div>
    </div>
  );
};

export default List;
