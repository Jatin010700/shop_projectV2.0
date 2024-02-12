"use client";
import React, { useState } from "react";
import SearchInputDiv from "./game/searchDiv";
import { useRecoilState, useRecoilValue } from "recoil";
import SearchState from "../atoms/searchState";
import ShopStore from "./storeMainPage";
import Game from "./game/page";

export default function StoreMain() {
  // const [searchTerm, setSearchTerm] = useState("");
  const {searchString}  = useRecoilValue(SearchState)

  return (
    <>
    <SearchInputDiv/>
    { searchString !== "" ? 
    (<Game/>) : (<ShopStore/>)}
    </>
  );
}
