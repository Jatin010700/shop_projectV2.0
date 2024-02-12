import SearchState from "@/app/atoms/searchState";
import { useRecoilState } from "recoil";

export default function SearchInputDiv() {
  const [searchTerm, setSearchTerm] = useRecoilState(SearchState);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm({ searchString: e.target.value });
    // console.log("Updating search term:", e.target.value);
  };

  return (
    <>
      <div className="bg-dark w-full p-2 flex justify-center items-center">
        <input
          type="text"
          placeholder="Search. . ."
          className="py-2 pl-10 w-3/4 md:w-2/4 rounded-full text-dark relative !border-none focus:ring-0"
          value={searchTerm.searchString}
          onChange={handleSearch}
        />
        <i
          className="bi bi-search absolute left-[350px]
          bg-RED px-[12px] py-2 rounded-full cursor-pointer"
        ></i>
      </div>
      <div className="h-1 w-full bg-RED" />
    </>
  );
}
