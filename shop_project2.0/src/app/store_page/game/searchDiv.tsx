type SearchDivProps = {
  handleSearchProps: any;
  searchTermProps: any;
};

export default function SearchInputDiv({
  handleSearchProps,
  searchTermProps,
}: SearchDivProps) {
  return (
    <>
      <div className="bg-dark w-full p-2 flex justify-center items-center">
        <input
          type="text"
          placeholder="Search. . ."
          className="py-2 pl-10 w-3/4 md:w-2/4 rounded-full text-dark relative !border-none focus:ring-0"
          value={searchTermProps}
          onChange={handleSearchProps}
        />
        <i
          className="bi bi-search absolute left-[350px]
          bg-RED px-[12px] py-2 rounded-full cursor-pointer"
        ></i>
      </div>
    </>
  );
}
