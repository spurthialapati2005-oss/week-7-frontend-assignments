import CountryCard from "./CountryCard";

function CountryList({ countries }) {
  if (countries.length === 0) {
    return <p className="text-center text-gray-500 mt-10">No matches found.</p>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {countries.map((c) => (
        <CountryCard key={c.name.common} country={c} />
      ))}
    </div>
  );
}

export default CountryList;