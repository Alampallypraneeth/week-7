import {useState,useEffect} from "react"

function CountryCard({ country }) {
  // Map regions to beautiful pastel color themes
  const regionColors = {
    Americas: "bg-emerald-50 text-emerald-700 border-emerald-100",
    Europe: "bg-blue-50 text-blue-700 border-blue-100",
    Asia: "bg-amber-50 text-amber-700 border-amber-100",
    Africa: "bg-rose-50 text-rose-700 border-rose-100",
    Oceania: "bg-purple-50 text-purple-700 border-purple-100",
    Antarctic: "bg-slate-50 text-slate-700 border-slate-100",
  };

  const badgeClass = regionColors[country.region] || "bg-slate-50 text-slate-700 border-slate-100";

  return (
    <div className="group bg-white rounded-2xl border border-slate-100 overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
      
      <div className="overflow-hidden relative h-44 bg-slate-50">
        <img
          src={country.flags.png}
          alt={country.name.common}
          className="w-full h-full object-cover transition-transform duration-550 ease-out group-hover:scale-105"
        />
        <span className={`absolute top-3 right-3 text-xs font-semibold px-2.5 py-1 rounded-full border shadow-xs ${badgeClass}`}>
          {country.region}
        </span>
      </div>

      <div className="p-5">
        <h3 className="text-lg font-bold text-slate-800 tracking-tight line-clamp-1 group-hover:text-indigo-600 transition-colors duration-250">
          {country.name.common}
        </h3>

        <div className="mt-4 space-y-2 text-sm">
          <div className="flex justify-between items-center text-slate-500">
            <span className="font-medium text-slate-400">Capital</span>
            <span className="font-semibold text-slate-700">{country.capital?.[0] || "N/A"}</span>
          </div>

          <div className="flex justify-between items-center text-slate-500">
            <span className="font-medium text-slate-400">Population</span>
            <span className="font-semibold text-slate-700">{country.population.toLocaleString()}</span>
          </div>
        </div>
      </div>

    </div>
  );
}

export default CountryCard;