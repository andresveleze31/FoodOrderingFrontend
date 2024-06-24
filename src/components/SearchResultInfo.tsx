import { Link } from "react-router-dom";

type Props = {
  total: number;
  city: string;
};
const SearchResultInfo = ({ total, city }: Props) => {
  return (
    <div className="text-[1.6rem] font-semibold flex justify-between ">
      <span>
        {total} Restaurant(s) found in {city}
        <Link to={"/"} className="underline text-red-600 ml-[1rem] text-[1.3rem] ">
           Change Location
        </Link>
      </span>
    </div>
  );
};

export default SearchResultInfo;
