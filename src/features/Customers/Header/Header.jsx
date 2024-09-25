import { CiSliderHorizontal } from "react-icons/ci";
import { BiSortAlt2 } from "react-icons/bi";

import styles from "./Header.module.css";
import { useState } from "react";
import Box from "../../../ui/Box/Box";
import Date from "../../../ui/Date/Date";
import Input from "../../../ui/Input/Input";
import { useAppContext } from "../../../contexts/AppContext";

function Header() {
  const [isFilterOpened, setIsFilterOpened] = useState(false);
  const [isSortOpened, setIsSortOpened] = useState(false);
  const { setSearchResult } = useAppContext();
  const customers = JSON.parse(localStorage.getItem("customersLot"));

  function searchCustomer(searchKey) {
    if (searchKey.length < 3) {
      setSearchResult({});
      return;
    }
    const key = searchKey.toLowerCase();
    const searchResults = customers.filter(
      (customer) =>
        customer.id.toLowerCase().includes(key) ||
        customer.name.toLowerCase().includes(key) ||
        customer.email.toLowerCase().includes(key)
    );
    setSearchResult(searchResults);
  }
  return (
    <div>
      <h1>All Customers</h1>
      <div className={styles.main}>
        <Date />
        <Input
          onClick={searchCustomer}
          placeholder="Search by Name | email | id"
        />
        <div className={styles.btns}>
          <div className={styles.sort} onClick={() => setIsSortOpened(true)}>
            <button className={styles.btn}>
              <BiSortAlt2 />
              <span>Sort by</span>
              {isSortOpened && (
                <Box>
                  <form action="">
                    <div>
                      <p>Sort by</p>
                    </div>
                    <div className={styles.detail}>
                      <p className={styles.detailH}>Type</p>
                      <p>
                        <p className={styles.flex}>
                          <input type="radio" id="asc" name="sort" />
                          &nbsp;
                          <label htmlFor="asc">Ascending</label>
                        </p>
                        <p className={styles.flex}>
                          <input type="radio" id="dsc" name="sort" />
                          &nbsp;
                          <label htmlFor="dsc">Descending</label>
                        </p>
                      </p>
                    </div>
                    <div className={styles.detail}>
                      <p className={styles.detailH}>Field</p>
                      <p className={styles.inputBox}>
                        <input
                          className={styles.input}
                          type="text"
                          placeholder="Enter name of field..."
                        />
                      </p>
                    </div>
                    <div className={styles.btns}>
                      <button type="reset" className={styles.btn}>
                        Reset
                      </button>
                      <button className={`${styles.apply} ${styles.btn}`}>
                        Apply
                      </button>
                    </div>
                  </form>
                </Box>
              )}
            </button>
          </div>
          <div
            className={styles.filter}
            onClick={() => setIsFilterOpened((state) => !state)}
          >
            <button className={styles.btn}>
              <CiSliderHorizontal />
              <span>Filter</span>
              {isFilterOpened && (
                <Box>
                  <form action="">
                    <div>
                      <p>Filter</p>
                    </div>
                    <div className={styles.detail}>
                      <p className={styles.detailH}>Field</p>
                      <input
                        className={styles.input}
                        type="text"
                        placeholder="Enter name of field..."
                      />
                    </div>

                    <div className={styles.detail}>
                      <p className={styles.detailH}>Value</p>
                      <input
                        className={styles.input}
                        type="text"
                        placeholder="Enter value..."
                      />
                    </div>

                    <div className={styles.btns}>
                      <button type="reset" className={styles.btn}>
                        Reset
                      </button>
                      <button className={`${styles.apply} ${styles.btn}`}>
                        Apply
                      </button>
                    </div>
                  </form>
                </Box>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
