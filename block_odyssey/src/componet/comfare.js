{ page > 3 && <div className={styles.separator}>...</div> }

{
  page === totalPages && totalPages > 3 && (
    <button onClick={() => handlePagination(page - 2)}>
      {page - 2}
    </button>
  )
}

{
  page > 2 && (
    <button onClick={() => handlePagination(page - 1)}>
      {page - 1}
    </button>
  )
}



{
  page < totalPages - 1 && (
    <button onClick={() => handlePagination(page + 1)}>
      {page + 1}
    </button>
  )
}

{
  page === 1 && totalPages > 3 && (
    <button onClick={() => handlePagination(page + 2)}>
      {page + 2}
    </button>
  )
}

{ page < totalPages - 2 && <div className={styles.separator}>...</div> }
