import Filter from "./Filter";

function Search ({search}) {

  return (
    <div>
      <input
        type="text"
        placeholder="Recipes..."
        value={search}
      >
      </input>
      <Filter />
    </div>
  )
}

export default Search;