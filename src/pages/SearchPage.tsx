import { useSearchRestaurants } from "@/api/FoodRestaurantApi";
import CuisineFilter from "@/components/CuisineFilter";
import Loader from "@/components/Loader";
import PaginationSelector from "@/components/PaginationSelector";
import SearchBar, { SearchForm } from "@/components/SearchBar";
import SearchResultInfo from "@/components/SearchResultInfo";
import SearchResultsCard from "@/components/SearchResultsCard";
import SortOptionDropdown from "@/components/SortOptionDropdown";
import { useState } from "react";
import { useParams } from "react-router-dom";

export type SearchState = {
  searchQuery: string;
  page: number;
  selectedCuisines: string[];
  sortOption: string;
};

const SearchPage = () => {
  const { city } = useParams();
  const [searchState, setSearchState] = useState<SearchState>({
    searchQuery: "",
    page: 1,
    selectedCuisines: [],
    sortOption: "bestMatch",
  });
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  const { results, isLoading } = useSearchRestaurants(searchState, city);

  const setSortOption = (sortOption: string) => {
    setSearchState((prevState) => ({
      ...prevState,
      sortOption,
      page: 1,
    }));
  };

  const setSelectedCuisines = (selectedCuisines: string[]) => {
    setSearchState((prevState) => ({
      ...prevState,
      selectedCuisines,
      page: 1,
    }));
  };

  const setPage = (page: number) => {
    setSearchState((prevState) => ({
      ...prevState,
      page,
    }));
  };

  const setSearchQuery = (searchFormData: SearchForm) => {
    setSearchState((prevState) => ({
      ...prevState,
      searchQuery: searchFormData.searchQuery,
      page: 1,
    }));
  };

  if (isLoading) {
    return (<Loader />)
  }

  if (!results?.data || !city) {
    return <span>No results found</span>;
  }

  return (
    <main className="contenedor pb-[5rem] ">
      <div className="grid grid-cols-1 lg:grid-cols-[1fr,4.5fr] gap-[3rem] ">
        <div id="cuisines-list">
          <CuisineFilter
            selectedCuisines={searchState.selectedCuisines}
            onChange={setSelectedCuisines}
            isExpanded={isExpanded}
            onExpandedClick={() =>
              setIsExpanded((prevIsExpanded) => !prevIsExpanded)
            }
          />
        </div>

        <div id="main-content" className="flex flex-col gap-[2rem] ">
          <SearchBar
            searchQuery={searchState.searchQuery}
            onSubmit={setSearchQuery}
            placeHolder="Search by Cuisine or Restaurant Name"
          />
          <div className="flex justify-between flex-col gap-[2rem] lg:flex-row">
            <SearchResultInfo total={results.pagination.total} city={city} />
            <SortOptionDropdown
              sortOption={searchState.sortOption}
              onChange={(value) => setSortOption(value)}
            />
          </div>
          {results.data.map((restaurant) => (
            <SearchResultsCard restaurant={restaurant} />
          ))}
          <PaginationSelector
            page={results.pagination.page}
            pages={results.pagination.pages}
            onPageChange={setPage}
          />
        </div>
      </div>
    </main>
  );
};

export default SearchPage;
