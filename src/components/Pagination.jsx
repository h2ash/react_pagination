import React from 'react'

const Pagination = ({ arrOfPages, choosePage, page }) => {
  return (
    <nav aria-label="Page navigation example">
      <ul className="pagination">
        <li className={`page-item ${page < 2 ? 'disabled' : ''}`}>
          <a 
            onClick={() => choosePage(page - 1)}
            className="page-link"
            href="#"
          >
            Previous
          </a>
        </li>

        {
          arrOfPages.map(button => (
            <li 
              className={`page-item ${page === button ? 'active' : ''}`}>
              <a 
                onClick={() => choosePage(button)}
                className="page-link" 
                href="#"
              >{button}</a>
            </li>
          ))
        }

        <li className={`page-item ${page === arrOfPages.length ? 'disabled' : ''}`}>
          <a 
            onClick={() => choosePage(page + 1)}
            className="page-link" 
            href="#"
          >
            Next
          </a>
        </li>
      </ul>
    </nav>
  )
}

export default Pagination