import React from 'react'

const Pagination = ({ arrOfPages, choosePage, page }) => {
  return (
    <nav aria-label="Page navigation example">
      <ul class="pagination">
        <li class={`page-item ${page < 2 ? 'disabled' : ''}`}>
          <a 
            onClick={() => choosePage(page - 1)}
            class="page-link"
            href="#"
          >
            Previous
          </a>
        </li>

        {
          arrOfPages.map(button => (
            <li 
              class={`page-item ${page === button ? 'active' : ''}`}>
              <a 
                onClick={() => choosePage(button)}
                class="page-link" 
                href="#"
              >{button}</a>
            </li>
          ))
        }

        <li class={`page-item ${page === arrOfPages.length ? 'disabled' : ''}`}>
          <a 
            onClick={() => choosePage(page + 1)}
            class="page-link" 
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