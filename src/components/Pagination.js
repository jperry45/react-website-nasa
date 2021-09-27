import React, { useState } from 'react';
import './Pagination.css';

function Pagination({ data, RenderComponent, title, pageLimit, dataLimit }) {
  var addExtraPage = data.length % dataLimit !== 0 ? 1 : 0;
  var pages = Math.floor(data.length / dataLimit) + addExtraPage;
  var [currentPage, setCurrentPage] = useState(1);
  if (currentPage > pages) setCurrentPage(1);

  function goToNextPage() {
  	setCurrentPage((page) => page + 1);
  }

  function goToPreviousPage() {
  	setCurrentPage((page) => page - 1);
  }

  function changePage(event) {
  	const pageNumber = Number(event.target.textContent);
  	setCurrentPage(pageNumber);
  }

  const getPaginatedData = () => {
  	const startIndex = currentPage * dataLimit - dataLimit;
  	const endIndex = startIndex + dataLimit;
  	return data.slice(startIndex, endIndex);
  };

  const getPaginationGroup = () => {
  	let start = Math.floor((currentPage - 1) / pageLimit) * pageLimit;
  	return new Array(pageLimit).fill().map((_, idx) => start + idx + 1);
  };

  return (
    <>
      {getPaginatedData().map((d, idx) => (
      	<RenderComponent key={idx} data={d} />
      ))}
      <div className="pagination">
        <button onClick={goToPreviousPage}
          className={`prev ${currentPage === 1 ? 'disabled' : ''}`}
        >
        prev
        </button>
        {getPaginationGroup().map((item, index) => (
          <button
            key={index}
            onClick={changePage}
            className={`paginationItem ${currentPage === item ? 'active' : null}`}
          >
            <span>{item}</span>
          </button>
        ))}
        <button
          onClick={goToNextPage}
          className={`next ${currentPage === pages ? 'disabled' : ''}`}
        >
          next
        </button>
      </div>
    </>
  );
}

export default Pagination;