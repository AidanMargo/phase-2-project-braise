function Search ({search}) {
  return (
    <div>
      <form id="search-form">
        <input
          id="search"
          type="text"
          placeholder="Recipes..."
          value={search}
        >
        </input>
      </form>
    </div>
  )
}

export default Search;
{/*  */}