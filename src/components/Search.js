function Search ({search, updateSearch}) {
  return (
    <div>
      <form id="search-form">
        <input
          id="search"
          type="text"
          placeholder="Search for Recipes..."
          value={search}
          onChange= {(e) => updateSearch(e.target.value)}
        >
        </input>
      </form>
    </div>
  )
}

export default Search;
{/*  */}