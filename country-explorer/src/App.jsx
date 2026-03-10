import { useEffect, useState } from "react";
import SearchBar from "./components/SearchBar";
import CountryList from "./components/CountryList";

function App() {
  const [countries, setCountries] = useState([]);
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchCountries();
  }, []);

  async function fetchCountries() {
    setLoading(true);
    try {
      const res = await fetch("https://restcountries.com/v3.1/all?fields=name,capital,population,region,flags");
      if (!res.ok) throw new Error("Could not fetch data");
      const data = await res.json();
      setCountries(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  const filteredCountries = countries.filter((c) =>
    c.name.common.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      {/* Simple Header */}
      <nav className="bg-white border-b sticky top-0 z-10 p-4">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <h1 className="text-xl font-bold text-gray-800">Country Finder</h1>
          <SearchBar onSearch={(val) => setQuery(val)} />
        </div>
      </nav>

      <main className="max-w-6xl mx-auto p-6">
        {loading && <p className="text-center py-10 text-gray-500">Loading countries...</p>}
        {error && <p className="text-center py-10 text-red-500">{error}</p>}
        
        {!loading && !error && (
          <CountryList countries={filteredCountries} />
        )}
      </main>
    </div>
  );
}

export default App;