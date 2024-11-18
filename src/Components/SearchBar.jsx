import { IoMdSearch } from "react-icons/io";

const SearchBar = () => {
  return (
    <div className="flex justify-center items-center  border-r-slate-500 border-gray-300 bg-[#989898] w-36 gap-0">
      <input
        type="text"
        placeholder=""
        className=" w-5/5 px-4 py-2 text-md text-gray-700 outline-none placeholder-gray-400 bg-[#989898]  focus:ring-2 focus:ring-black-500"
      />
      <button
        type="button"
        className="ml-2 text-lg text-black-500 hover:text-black-700 py-2 px-4 bg-[#989898]"
      >
        <IoMdSearch className="text-black bg-[#989898]" />
      </button>
    </div>
  );
};

export default SearchBar;
