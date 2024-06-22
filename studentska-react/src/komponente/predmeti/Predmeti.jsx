import React, { useState, useEffect } from 'react';
import './Predmeti.css';
import usePredmeti from './usePredmeti';

const Predmeti = () => {
    const { predmeti, isLoading, error } = usePredmeti('http://127.0.0.1:8000/api/predmeti');

    const [searchTerm, setSearchTerm] = useState('');
    const [selektovanBrojESPB, setSelectedBrojESPB] = useState('');
    const [filteredPredmeti, setFilteredPredmeti] = useState([]);
  
    const [currentPage, setCurrentPage] = useState(0);
    const predmetiPerPage = 3;
  
    useEffect(() => {
      if (!isLoading && predmeti) {
        applyFilters(searchTerm, selektovanBrojESPB);
      }
    }, [predmeti, isLoading, searchTerm, selektovanBrojESPB]);
  
    const applyFilters = (search, broj_espb_poena) => {
        const filtered = predmeti.filter(predmet => {
          return (
            (search === '' || predmet.naziv.toLowerCase().includes(search.toLowerCase())) &&
            (broj_espb_poena === '' || predmet.broj_esbp_poena === parseInt(broj_espb_poena))
          );
        });
      
        setFilteredPredmeti(filtered);
      };
  
    const handleSearchChange = (e) => {
      setSearchTerm(e.target.value);
    };
  
    const handleEspbChange = (e) => {
      setSelectedBrojESPB(e.target.value);
    };
  
    const handlePageChange = ({ selected }) => {
      setCurrentPage(selected);
    };
  
    if (isLoading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    const pageCount = Math.ceil(filteredPredmeti.length / predmetiPerPage);
    const offset = currentPage * predmetiPerPage;
    const currentPredmeti = filteredPredmeti.slice(offset, offset + predmetiPerPage);

    return (
   
    <div className="predmet-list">
        <div className="search-container">
          <input
            broj_espb_poena="text"
            placeholder="Pretraga predmeta po nazivu"
            value={searchTerm}
            onChange={handleSearchChange}
          />
          <select
            value={selektovanBrojESPB}
            onChange={handleEspbChange}
          >
            <option value="">Svi ESPB</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
          </select>
          
        </div>
        <div className="predmeti-container">
        {isLoading ? (
        <div>Loading...</div>
        ) : (
        <>
            <div className="pagination">
            {Array.from({ length: pageCount }, (_, index) => (
                <button
                key={index}
                onClick={() => handlePageChange({ selected: index })}
                >
                {index + 1}
                </button>
            ))}
            </div>
            <table>
            <thead>
                <tr>
                <th>Naziv predmeta</th>
                <th>Opis</th>
                <th>Broj ESPB poena</th>
                <th>Godina studiranja</th>
                <th>Profesor</th>
                <th>Asistenti</th>
                </tr>
            </thead>
            <tbody>
                {currentPredmeti.map((predmet) => (
                <tr key={predmet.id}>
                    <td>{predmet.naziv}</td>
                    <td>{predmet.opis}</td>
                    <td>{predmet.broj_esbp_poena}</td>
                    <td>{predmet.godina_studiranja_datog_predmeta}</td>
                    <td>{predmet.profesor}</td>
                    <td>{predmet.asistenti}</td>
                </tr>
                ))}
            </tbody>
            </table>
        </>
        )}
    </div>
    </div> 
  );
};

export default Predmeti;