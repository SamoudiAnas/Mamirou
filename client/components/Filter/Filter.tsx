import { useEffect } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { Filters } from "../../types/filter";
import CheckBoxInput from "../Default UI/CheckBoxInput";
import { filtersAC, RootState } from "../../store";
import { bindActionCreators } from "redux";
import { useSelector } from "react-redux";

const Filter = () => {
  const filters = useSelector((state: RootState) => state.filters);

  const dispatch = useDispatch();

  const {
    updateFiltersCategory,
    updateFiltersBrand,
    updateFiltersPrice,
    updateFiltersSort,
  } = bindActionCreators(filtersAC, dispatch);

  const changeFilter = (param: keyof Filters, option: string) => {
    switch (param) {
      case "category":
        updateFiltersCategory(option);
        break;
      case "brand":
        updateFiltersBrand(option);
        break;
      case "price":
        updateFiltersPrice(option);
        break;
      case "sortBy":
        updateFiltersSort(option);
        break;
    }
  };

  useEffect(() => {
    console.log(filters);
  }, [filters]);

  return (
    <FilterWrapper>
      {/*------------ CATEGORIES ----------- */}
      <FilterCategory>
        <h3>Categories</h3>
        <CheckBoxInput
          option="For Children"
          changeFilter={changeFilter}
          filterCategory="category"
        />
        <CheckBoxInput
          option="For Pregnant Women"
          changeFilter={changeFilter}
          filterCategory="category"
        />
        <CheckBoxInput
          option="For Women"
          changeFilter={changeFilter}
          filterCategory="category"
        />
        <CheckBoxInput
          option="For Men"
          changeFilter={changeFilter}
          filterCategory="category"
        />
      </FilterCategory>

      {/*------------ BRANDS ----------- */}
      <FilterCategory>
        <h3>Brands</h3>

        <CheckBoxInput
          option="Nike"
          changeFilter={changeFilter}
          filterCategory="brand"
        />
        <CheckBoxInput
          option="Louis Vuitton"
          changeFilter={changeFilter}
          filterCategory="brand"
        />
        <CheckBoxInput
          option="Hermes"
          changeFilter={changeFilter}
          filterCategory="brand"
        />
        <CheckBoxInput
          option="Gucci"
          changeFilter={changeFilter}
          filterCategory="brand"
        />
      </FilterCategory>

      {/*------------ PRICE ----------- */}
      <FilterCategory>
        <h3>Price</h3>
        <CheckBoxInput
          option="Less than 50$"
          changeFilter={changeFilter}
          filterCategory="price"
        />
        <CheckBoxInput
          option="100$ - 200$"
          changeFilter={changeFilter}
          filterCategory="price"
        />
        <CheckBoxInput
          option="200$ - 400$"
          changeFilter={changeFilter}
          filterCategory="price"
        />
        <CheckBoxInput
          option="400$+"
          changeFilter={changeFilter}
          filterCategory="price"
        />
      </FilterCategory>

      {/*------------ SORT BY ----------- */}
      <FilterCategory>
        <h3>Sort By</h3>
        <CheckBoxInput
          option="Latest"
          changeFilter={changeFilter}
          filterCategory="sortBy"
        />
        <CheckBoxInput
          option="Relevance"
          changeFilter={changeFilter}
          filterCategory="sortBy"
        />
        <CheckBoxInput
          option="Price high to low"
          changeFilter={changeFilter}
          filterCategory="sortBy"
        />
        <CheckBoxInput
          option="Price low to high"
          changeFilter={changeFilter}
          filterCategory="sortBy"
        />
      </FilterCategory>
    </FilterWrapper>
  );
};

export default Filter;

const FilterWrapper = styled.div`
  padding: 4rem 2rem;
  background-color: #eeeeee;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 2rem;
`;

const FilterCategory = styled.div`
  flex: 1 1 22%;
  width: 100%;
  min-width: 10rem;

  h3 {
    font-family: "PT Serif", serif;
    font-size: 1.2rem;
    margin-bottom: 1rem;
  }
`;
