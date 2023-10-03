'use client'

const Searchbar = () => {
    const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log("submitted");
  };
  return (
    <form className="flex flex-wrap gap-4 mt-12" onSubmit={handleSubmit}>
        <input type="text" name="search" placeholder="Enter product link" className="searchbar-input" />
        <button type="submit" className="searchbar-btn">Search</button>
    </form>
  )
}

export default Searchbar