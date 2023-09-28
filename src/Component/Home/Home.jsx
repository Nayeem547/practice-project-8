import { useEffect, useState } from "react";

import Category from "../Category/Category";
import { useLoaderData } from "react-router-dom";
import { data } from "autoprefixer";

const Home = () => {
  const getCategory = useLoaderData();
  const [category, setCategory] = useState([]);
  useEffect(() => {
    setCategory(getCategory);
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    let CategoryName = e.target.name.value;
    let filterData = getCategory.filter(
      (data) => data.category.toLowerCase() == CategoryName.toLowerCase()
    );
    setCategory(filterData)
  };

  return (
    <div>
      <div>
        <div className=" space-y-5 h-[300px] items-center text-center flex flex-col justify-center  ">
          <h1 className=" text-3xl font-bold ">
            I Grow By Helping People In Need
          </h1>
          <form onSubmit={handleSearch}>
            <input
              className=" pl-1 pr-8 md:pl-2 lg:pl-2  md:pr-16 lg:pr-16 border rounded-l-md border-[#DEDEDE] py-1 md:py-2 lg:py-2"
              placeholder="Search here...."
              type="text"
              name="name"
            ></input>
            <button className="  px-2 py-[5px] md:py-2 lg:py-2 rounded-r-md bg-[#FF444A] text-white ">
              Search
            </button>
          </form>
          <ul>
            {/* {filteredData.map((item) => (
          <li key={item.id}>{item.card}</li>
        ))} */}
          </ul>
        </div>
      </div>

      <div className=" flex justify-center ">
        <Category category={category}></Category>
      </div>
    </div>
  );
};

export default Home;
