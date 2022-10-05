import { useState, useEffect, useRef } from "react";
import { API_GET_DATA } from "../../global/constants";

import Edit from "./components/Edit";
import List from "./components/List";
import "./index.css";

async function fetchData(setData) {
  const res = await fetch(API_GET_DATA);
  const { data } = await res.json();
  setData(data);
}

async function fetchSetData(data) {
  const res = await fetch(API_GET_DATA, {
    method: "PUT",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({ data }),
  });
}

const Home = () => {
  const [data, setData] = useState([]);
  const submitDataStatus = useRef(false);

  useEffect(() => {
    //預防渲染頁面資料被刷新
    if (!submitDataStatus.current) {
      return;
    }
    fetchSetData(data).then((data) => (submitDataStatus.current = false));
  }, [data]);

  //第一次載入渲染資料出來到頁面上
  useEffect(() => {
    fetchData(setData);
  }, []);

  return (
    <div className="app">
      <Edit add={setData} submitDataStatus={submitDataStatus} />
      <List
        listData={data}
        deleteData={setData}
        submitDataStatus={submitDataStatus}
      />
    </div>
  );
};

export default Home;
