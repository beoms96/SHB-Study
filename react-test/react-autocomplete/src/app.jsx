import "./app.css";
import React, { useState } from "react";
import Autocomplete from "./components/autocomplete";

const dataList = [
  {
    key: "1",
    value: "신한은행",
  },
  {
    key: "2",
    value: "국민은행",
  },
  {
    key: "3",
    value: "우리은행",
  },
  {
    key: "4",
    value: "기업은행",
  },
  {
    key: "5",
    value: "농협은행",
  },
  {
    key: "6",
    value: "신한카드",
  },
  {
    key: "7",
    value: "카카오페이",
  },
  {
    key: "8",
    value: "카카오뱅크",
  },
  {
    key: "9",
    value: "토스뱅크",
  },
];

const App = () => {
  const [search, setSearch] = useState("");
  const [matchDataList, setMatchDataList] = useState([]);

  const onChange = (e) => {
    const val = e.target.value.trim();

    setMatchDataList(
      val ? dataList.filter((label) => label.value.includes(val)) : []
    );

    setSearch(val);
  };

  const autoCompleteOnClick = (idx) => {
    setSearch(matchDataList[idx].value);
    setMatchDataList([]);
  };

  return (
    <div className="App">
      <section>
        <h2>검색 자동완성</h2>
        <input
          type="text"
          value={search}
          placeholder="검색어 입력"
          onChange={onChange}
        ></input>
        <Autocomplete
          matchDataList={matchDataList}
          autoCompleteOnClick={autoCompleteOnClick}
        />
      </section>
    </div>
  );
};

export default App;
