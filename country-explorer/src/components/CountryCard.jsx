function CountryCard({ country }) {
  return (
    <div className="bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow overflow-hidden">
      <img
        src={country.flags.png}
        alt={country.name.common}
        className="w-full h-32 object-cover border-b"
      />
      <div className="p-4 text-left">
        <h3 className="font-bold text-lg text-gray-900 mb-2 truncate">
          {country.name.common}
        </h3>
        <div className="text-sm space-y-1 text-gray-600">
          <p><span className="font-semibold text-gray-800">Capital:</span> {country.capital?.[0] || "N/A"}</p>
          <p><span className="font-semibold text-gray-800">Region:</span> {country.region}</p>
          <p><span className="font-semibold text-gray-800">Population:</span> {country.population.toLocaleString()}</p>
        </div>
      </div>
    </div>
  );
}

export default CountryCard;