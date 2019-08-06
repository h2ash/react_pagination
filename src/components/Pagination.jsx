import React from 'react'

const Pagination = ({ arrOfPages, choosePage }) => (
  <nav aria-label="Page navigation example">
    <ul class="pagination">
      <li class="page-item">
        <a class="page-link" href="#">Previous</a>
      </li>
      {
        arrOfPages.map(button => (
          <li 
            class="page-item">
            <a 
              onClick={() => choosePage(button)}
              class="page-link" 
              href="#"
              >
              {button}
            </a>
          </li>
        ))
      }
      <li class="page-item">
        <a class="page-link" href="#">Next</a>
      </li>
    </ul>
  </nav>
)

export default Pagination