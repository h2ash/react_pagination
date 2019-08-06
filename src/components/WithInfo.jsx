import React from 'react'

const WithInfo = ({page, sumOfPeople, perPage}) => {
  const startPageItem = page === 1 ? 1 : ((page - 1) * perPage) + 1;
  const endPageItem = (perPage * page);

  return (
    <div className='withInfo alert alert-primary'>
      {`${startPageItem} - ${endPageItem} of ${sumOfPeople}`}
    </div>
  )
}

export default WithInfo