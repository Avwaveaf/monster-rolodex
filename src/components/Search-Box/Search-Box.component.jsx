import React from "react";
import "./Search-Box.style.css";

export const SearchBar = ({ placeholder, changeHandler }) => {
  return (
    <input
      className='search'
      type='search'
      placeholder={placeholder}
      onChange={changeHandler}
    />
  );
};

// (e) => this.setState({ searchBar: e.target.value })

// notes pelajaran :
// ini adalah functional component yang mana functional component hanyalah menerima props, dia tidak bisa
// mengakses state. functional component akan sangat berguna jika sekiranya component tidak membutuhkan aksea
// untuk merubah state. karna functional component sangat ringan dan juga sekiranya dapat memoptimalisaasikan
// kinerja website

// dengan kita passing props  kita bisa menggunakan komponen search box ini berulah dengan handler dan placeholder berebeda
