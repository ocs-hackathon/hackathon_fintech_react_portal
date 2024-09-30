import { CiSliderHorizontal } from "react-icons/ci";
import { BiSortAlt2 } from "react-icons/bi";

import styles from "./Header.module.css";
import { useState } from "react";
import Box from "../../../ui/Box/Box";
import Date from "../../../ui/Date/Date";
import Input from "../../../ui/Input/Input";
import { useAppContext } from "../../../contexts/AppContext";
import { useCustomers } from "../useCustomers";
import { getCustomers } from "../../../testData";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";

function Header() {
  const [isFilterOpened, setIsFilterOpened] = useState(false);
  const [isSortOpened, setIsSortOpened] = useState(false);
  const { setSearchResult } = useAppContext();
  const { customers = getCustomers() } = useCustomers();
  const customersCpy = [...customers];
  const { register, handleSubmit, reset } = useForm();

  function onSort(data) {
    const { sortType = "asc", sortField } = data;
    if (
      !Object.keys(customers.at(0))
        .map((el) => el.toLowerCase())
        .includes(sortField.toLowerCase())
    ) {
      toast.error(`The specified field can't be used to sort customers`);
      reset();
      setIsSortOpened(false);
      return;
    }

    customersCpy.sort((a, b) => {
      if (typeof a[sortField] === "number")
        return sortType === "asc"
          ? a[sortField] - b[sortField]
          : b[sortField] - a[sortField];

      return sortType === "asc"
        ? a[sortField].localeCompare(b[sortField])
        : b[sortField].localeCompare(a[sortField]);
    });
    setSearchResult(customersCpy);
    setIsSortOpened(false);
    reset();
  }

  function onFilter(data) {
    const { filterValue, filterField } = data;
    if (!filterValue || !filterField) {
      toast.error(
        `Unable to filter the customers data. make sure to specifiy both filter value and field. `
      );
      reset();
      setIsFilterOpened(false);
      return;
    }
    const filtered = customers.filter((customer) =>
      typeof customer[filterField] === "number"
        ? customer[filterField] === filterValue
        : customer[filterField].toLowerCase() === filterValue.toLowerCase()
    );
    setSearchResult(filtered);
    reset();
    setIsFilterOpened(false);
  }

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
          <div className={styles.sort}>
            <div>
              <button
                className={styles.btn}
                onClick={() => {
                  setIsFilterOpened(false);
                  setIsSortOpened(true);
                }}
              >
                <BiSortAlt2 />
                <span>Sort by</span>
              </button>
              {isSortOpened && (
                <Box>
                  <form action="" onSubmit={handleSubmit(onSort)}>
                    <div>
                      <p>Sort by</p>
                    </div>
                    <div className={styles.detail}>
                      <p className={styles.detailH}>Type</p>
                      <main>
                        <p className={styles.flex}>
                          <input
                            type="radio"
                            id="asc"
                            name="sort"
                            value="asc"
                            {...register("sortType")}
                          />
                          &nbsp;
                          <label htmlFor="asc">Ascending</label>
                        </p>
                        <p className={styles.flex}>
                          <input
                            type="radio"
                            id="dsc"
                            name="sort"
                            value="dsc"
                            {...register("sortType")}
                          />
                          &nbsp;
                          <label htmlFor="dsc">Descending</label>
                        </p>
                      </main>
                    </div>
                    <div className={styles.detail}>
                      <p className={styles.detailH}>Field</p>
                      <p className={styles.inputBox}>
                        <input
                          className={styles.input}
                          type="text"
                          placeholder="Enter name of field..."
                          {...register("sortField")}
                        />
                      </p>
                    </div>
                    <div className={styles.btns}>
                      <button
                        className={styles.btn}
                        onClick={(e) => {
                          e.preventDefault();
                          setIsSortOpened(false);
                        }}
                      >
                        Cancel
                      </button>
                      <button className={`${styles.apply} ${styles.btn}`}>
                        Apply
                      </button>
                    </div>
                  </form>
                </Box>
              )}
            </div>
          </div>
          <div className={styles.filter}>
            <div>
              <button
                className={styles.btn}
                onClick={() => {
                  setIsSortOpened(false);
                  setIsFilterOpened(true);
                }}
              >
                <CiSliderHorizontal />
                <span>Filter</span>
              </button>

              {isFilterOpened && (
                <Box>
                  <form action="" onSubmit={handleSubmit(onFilter)}>
                    <div>
                      <p>Filter</p>
                    </div>
                    <div className={styles.detail}>
                      <p className={styles.detailH}>Field</p>
                      <input
                        className={styles.input}
                        type="text"
                        placeholder="Enter name of field..."
                        {...register("filterField")}
                      />
                    </div>

                    <div className={styles.detail}>
                      <p className={styles.detailH}>Value</p>
                      <input
                        className={styles.input}
                        type="text"
                        placeholder="Enter value..."
                        {...register("filterValue")}
                      />
                    </div>

                    <div className={styles.btns}>
                      <button
                        className={styles.btn}
                        onClick={(e) => {
                          e.preventDefault();
                          setIsFilterOpened(false);
                        }}
                      >
                        Cancel
                      </button>
                      <button className={`${styles.apply} ${styles.btn}`}>
                        Apply
                      </button>
                    </div>
                  </form>
                </Box>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
