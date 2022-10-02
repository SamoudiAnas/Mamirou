import { useSelector } from "react-redux";
import styled from "styled-components";
import { RootState } from "../../store";
import { Filters } from "../../types/filter";

interface CheckBoxInputProps {
  option: string;
  filterCategory: keyof Filters;
  changeFilter: (param: keyof Filters, option: string) => void;
}

const CheckBoxInput: React.FC<CheckBoxInputProps> = ({
  option,
  changeFilter,
  filterCategory,
}) => {
  const filters: Filters = useSelector((state: RootState) => state.filters);

  const checkInput = (): boolean => {
    if (filterCategory === "sortBy") {
      return filters.sortBy === option;
    } else {
      return filters[filterCategory].includes(option);
    }
  };

  return (
    <InputContainer>
      <input
        type="checkbox"
        name={option}
        id={option}
        checked={checkInput()}
        onChange={(e) => changeFilter(filterCategory, option)}
      />
      <label htmlFor={option}>{option}</label>
    </InputContainer>
  );
};

export default CheckBoxInput;

const InputContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 0.375rem;

  label {
    color: #574545;
    font-family: "Montserrat", serif;
    font-size: 0.9rem;
    padding-left: 0.5rem;

    &:hover {
      cursor: pointer;
    }
  }

  input[type="checkbox"] {
    -webkit-appearance: none;
    width: 1.25rem;
    height: 1.25rem;
    border: 1px solid hsl(0, 0%, 85%);
    border-radius: 1px;
    vertical-align: sub;
    margin-right: 0.25rem;
    border-radius: 0.15rem;
    outline: none;
    position: relative;
  }

  input[type="checkbox"]:checked {
    background-color: hsl(0, 0%, 40%);
  }

  input[type="checkbox"]:after {
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    background-image: url("data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9JzMwMHB4JyB3aWR0aD0nMzAwcHgnICBmaWxsPSIjZmZmZmZmIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2aWV3Qm94PSIwIDAgMTAwIDEwMCIgdmVyc2lvbj0iMS4xIiB4PSIwcHgiIHk9IjBweCI+PHRpdGxlPmljb25fYnlfUG9zaGx5YWtvdjEwPC90aXRsZT48ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz48ZyBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48ZyBmaWxsPSIjZmZmZmZmIj48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyNi4wMDAwMDAsIDI2LjAwMDAwMCkiPjxwYXRoIGQ9Ik0xNy45OTk5ODc4LDMyLjQgTDEwLjk5OTk4NzgsMjUuNCBDMTAuMjI2Nzg5MSwyNC42MjY4MDE0IDguOTczMTg2NDQsMjQuNjI2ODAxNCA4LjE5OTk4Nzc5LDI1LjQgTDguMTk5OTg3NzksMjUuNCBDNy40MjY3ODkxNCwyNi4xNzMxOTg2IDcuNDI2Nzg5MTQsMjcuNDI2ODAxNCA4LjE5OTk4Nzc5LDI4LjIgTDE2LjU4NTc3NDIsMzYuNTg1Nzg2NCBDMTcuMzY2ODIyOCwzNy4zNjY4MzUgMTguNjMzMTUyOCwzNy4zNjY4MzUgMTkuNDE0MjAxNCwzNi41ODU3ODY0IEw0MC41OTk5ODc4LDE1LjQgQzQxLjM3MzE4NjQsMTQuNjI2ODAxNCA0MS4zNzMxODY0LDEzLjM3MzE5ODYgNDAuNTk5OTg3OCwxMi42IEw0MC41OTk5ODc4LDEyLjYgQzM5LjgyNjc4OTEsMTEuODI2ODAxNCAzOC41NzMxODY0LDExLjgyNjgwMTQgMzcuNzk5OTg3OCwxMi42IEwxNy45OTk5ODc4LDMyLjQgWiI+PC9wYXRoPjwvZz48L2c+PC9nPjwvc3ZnPg==");
    background-size: 40px;
    background-repeat: no-repeat;
    background-position: center;
  }
`;
