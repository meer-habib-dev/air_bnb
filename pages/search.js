import { format } from "date-fns";
import { useRouter } from "next/router";
import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import InfoItem from "../components/InfoItem";
import MapBox from "../components/Map";

const Search = ({ searchResults }) => {
  const router = useRouter();
  const { location, startDate, endDate, noOfGuests } = router.query;
  const formattedStartDate = format(new Date(startDate), "dd MMMM yy");
  const formatedEndDate = format(new Date(endDate), "dd MMMM yy");
  const range = `${formattedStartDate} - ${formatedEndDate}`;
  return (
    <div>
      <Header placeholder={`${location} | ${range} | ${noOfGuests}`} />
      <main className="flex justify-between min-h-screen overflow-hidden">
        <section className="flex-grow pt-14 px-6">
          <p>
            300+ stays - {range} - for {noOfGuests} guests
          </p>
          <h1 className="text-3xl font-semibold mt-2 mb-6 ">
            stay in {location}
          </h1>
          <div className="hidden md:inline-flex space-x-3 text-gray-800 whitespace-nowrap">
            <p className="button">Cancellation Flexibility</p>
            <p className="button">Type of place</p>
            <p className="button">Price</p>
            <p className="button">Rooms and beds</p>
            <p className="button">More Filters</p>
          </div>
          <div className="flex flex-col">
            {searchResults.map(
              ({ img, location, title, price, description, star, total }) => (
                <InfoItem
                  key={Math.random()}
                  img={img}
                  title={title}
                  location={location}
                  price={price}
                  star={star}
                  total={total}
                  description={description}
                />
              )
            )}
          </div>
        </section>
        <section className="hidden lg:inline-flex lg:min-w-[600px] ">
          <MapBox searchResults={searchResults} />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Search;

export async function getServerSideProps() {
  const searchResults = await fetch("https://links.papareact.com/isz").then(
    (res) => res.json()
  );
  return {
    props: { searchResults },
  };
}
