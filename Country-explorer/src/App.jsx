import { useEffect, useState } from "react";
import './App.css'
import SearchBar from './components/SearchBar';
import CountryList from './components/CountryList';

function App(){

  const [countries, setCountries] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchCountries();
  }, []);

  const fetchCountries = async () => {
    try{
      setLoading(true);
      setError(null);

      const res = await fetch(
        "https://restcountries.com/v3.1/all?fields=name,capital,flags,population,region"
      );

      if(!res.ok){
        throw new Error("Failed to fetch data");
      }

      const data = await res.json();
      setCountries(data);
      setFilteredCountries(data);

    }catch(err){
      setError(err.message);
    }finally{
      setLoading(false);
    }
  };

  const handleSearch = (query) => {
    const result = countries.filter(country =>
      country.name.common.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredCountries(result);
  };

  return(
    <div className='min-h-screen bg-slate-50 text-slate-800 antialiased py-12 px-4 sm:px-6 lg:px-8'>
      <div className="max-w-7xl mx-auto">
        <header className="text-center mb-12">
          <div className="inline-flex items-center justify-center p-3 bg-white rounded-2xl shadow-sm border border-slate-100 mb-4 transition-all hover:scale-105 duration-300">
            <svg className="w-8 h-8 text-indigo-600" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-.778.099-1.533.284-2.253" />
            </svg>
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
            Global Explorer
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-slate-500 sm:text-lg md:mt-4 md:max-w-3xl">
            Discover details about countries across the world with our minimal, modern dashboard.
          </p>
        </header>

        <div className="mb-10">
          <SearchBar onSearch={handleSearch} />
        </div>

        {loading && (
          <div className="flex flex-col items-center justify-center py-20">
            <div className="w-10 h-10 border-4 border-indigo-200 border-t-indigo-600 rounded-full animate-spin"></div>
            <p className="mt-4 text-slate-500 font-medium">Fetching country details...</p>
          </div>
        )}

        {error && (
          <div className="max-w-md mx-auto bg-red-50 border border-red-100 rounded-xl p-4 text-center mt-10">
            <p className="text-red-600 font-medium">Error: {error}</p>
          </div>
        )}

        {!loading && !error && (
          <CountryList countries={filteredCountries} />
        )}
      </div>
    </div>
  )
}

export default App;