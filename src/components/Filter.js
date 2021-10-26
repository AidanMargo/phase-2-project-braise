import React from "react";


function Filter ({handleFilter}) {



  return (
    <div id="categories">
      <h3 class="cuisine-type" onClick={handleFilter}>All</h3>
      <h3 class="cuisine-type" onClick={handleFilter}>American</h3>
      <h3 class="cuisine-type" onClick={handleFilter}>Thai</h3>
      <h3 class="cuisine-type" onClick={handleFilter}>Italian</h3>
      <h3 class="cuisine-type" onClick={handleFilter}>Mexican</h3>
      <h3 class="cuisine-type" onClick={handleFilter}>Chinese</h3>
    </div>
  )
}

export default Filter