import React, { useState } from "react";
import styled from "styled-components";
import { ReactComponent as SearchIcon } from "../assets/images/icons/search_icon.svg";

const Searchbar = ({ setSearch }) => {
  const [state, setState] = useState("");
  return (
    <SearchBar>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setSearch(state);
        }}
      >
        <SearchIcon className="icon" />
        <input
          type="text"
          placeholder="Search for keyword"
          onChange={(e) => {
            setState(e.target.value);
          }}
        />
      </form>
    </SearchBar>
  );
};

const SearchBar = styled.div`
  position: relative;
  //   width: 100px;
  form {
    display: flex;
    // align-items: center;
    position: relative;
    height: 3rem;

    .icon {
      position: absolute;
      right: 0;
      transfrom: translateX(-50%);
      width: 3em;
      cursor: pointer;
    }

    input {
      background: #fff;
      border: none;
      padding: 1em 3.5em 1em 1em;
      height: 100%;
      border-radius: 5px;
      font-style: normal;
      font-weight: 500;
      font-size: 0.9em;
      letter-spacing: 0.018em;
      color: #000000;
      max-width: 365px;
      width: 365px;
      :focus {
        outline: none;
        border: 1px solid #bdbdbd;
      }
    }
  }
`;

export default Searchbar;
