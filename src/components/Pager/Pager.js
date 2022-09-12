import React from 'react'
const Pager = ({page, setPage}) => {
    return (
        <div className="pagination">
        <div  onClick={() =>setPage(--page)}>&laquo;</div>
        <div className={`${page === 1 ? 'active': ''}`} onClick={() =>setPage(1)}>1</div>
        <div className={`${page === 2 ? 'active': ''}`} onClick={() =>setPage(2)}>2</div>
        <div className={`${page === 3 ? 'active': ''}`} onClick={() =>setPage(3)}>3</div>
        <div className={`${page === 4 ? 'active': ''}`} onClick={() =>setPage(4)}>4</div>
        <div className={`${page === 5 ? 'active': ''}`} onClick={() =>setPage(5)}>5</div>
        <div className={`${page === 6 ? 'active': ''}`} onClick={() =>setPage(6)}>6</div>
        <div className={`${page === 7 ? 'active': ''}`} onClick={() =>setPage(7)}>7</div>
        <div className={`${page === 8 ? 'active': ''}`} onClick={() =>setPage(8)}>8</div>
        <div className={`${page === 9 ? 'active': ''}`} onClick={() =>setPage(9)}>9</div>
        <div className={`${page === 10 ? 'active': ''}`} onClick={() =>setPage(10)}>10</div>
        <div onClick={() =>setPage(++page)}>&raquo;</div>
        
      </div>
    )
}

export default Pager;