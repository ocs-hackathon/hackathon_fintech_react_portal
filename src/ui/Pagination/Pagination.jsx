import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { useAppContext } from "../../contexts/AppContext";
import styles from "./Pagination.module.css";

// eslint-disable-next-line react/prop-types
function Pagination({ total = 50 }) {
  const { currentPage, setCurrentPage, recordPerPage } = useAppContext();
  const index = recordPerPage * currentPage;
  const lastIndex = index > total ? total : index;
  const rem = index - lastIndex + 1;
  const firstIndex = lastIndex - recordPerPage;
  const nPage = Math.ceil(total / recordPerPage);
  const nBtnDisplayed = 2;
  const nBtnsToDisplay = 3;
  function updatePageNum(pageNum) {
    if (pageNum < 1 || pageNum > nPage) return;
    setCurrentPage(pageNum);
  }
  return (
    <div className={styles.pagination}>
      <span className={styles.left}>
        Showing data {firstIndex + rem} to {lastIndex} of {total} entries
      </span>
      <div className={styles.btns}>
        <button onClick={() => updatePageNum(currentPage - 1)}>
          <IoIosArrowBack />
        </button>
        <button
          className={`${currentPage === 1 ? styles.active : ""}`}
          onClick={() => updatePageNum(1)}
        >
          1
        </button>
        <>
          {nPage <= 6 ? (
            Array.from({ length: nPage - nBtnDisplayed }).map((_, i) => (
              <button
                key={i + 2}
                className={`${currentPage === i + 2 ? styles.active : ""}`}
                onClick={() => updatePageNum(i + 2)}
              >
                {i + 2}
              </button>
            ))
          ) : (
            <>
              {currentPage > 4 && <span>...</span>}
              {currentPage < 5
                ? Array.from({ length: 3 }).map((_, i) => (
                    <button
                      key={i + 2}
                      className={`${
                        currentPage === i + 2 ? styles.active : ""
                      }`}
                      onClick={() => updatePageNum(i + 2)}
                    >
                      {i + 2}
                    </button>
                  ))
                : Array.from({ length: nBtnsToDisplay }).map(
                    (_, i) =>
                      i + currentPage - 1 < nPage && (
                        <button
                          key={i + currentPage - 1}
                          className={`${
                            currentPage === i + currentPage - 1
                              ? styles.active
                              : ""
                          }`}
                          onClick={() => updatePageNum(i + currentPage - 1)}
                        >
                          {i + currentPage - 1}
                        </button>
                      )
                  )}

              {currentPage < nPage - 2 && <span>...</span>}
            </>
          )}
        </>
        <button
          className={`${currentPage === nPage ? styles.active : ""}`}
          onClick={() => updatePageNum(nPage)}
        >
          {nPage}
        </button>
        <button onClick={() => updatePageNum(currentPage + 1)}>
          <IoIosArrowForward />
        </button>
      </div>
    </div>
  );
}

export default Pagination;
