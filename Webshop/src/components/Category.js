import "../styles/Category.css";

function Category({ categories, category, updateCategory }) {
  console.log(categories);

  function handleChange(e) {
    updateCategory(e.target.value);
  }

  function resetCategory() {
    updateCategory("");
    document.querySelector('#select-category').selectedIndex=0;
  }

  return (
    <div className="category">
      <div className="title-select">Filter:</div>
      <select id="select-category" onChange={handleChange}>
        <option key={`categorie-0`} value={""}>
          -
        </option>
        {categories.map((cat, index) => {
          return (
            <option key={`categorie-${index}`} value={cat}>
              {cat}
            </option>
          );
        })}
      </select>
      <button id="reset-category" onClick={resetCategory}>
        X
      </button>
    </div>
  );
}

export default Category;
