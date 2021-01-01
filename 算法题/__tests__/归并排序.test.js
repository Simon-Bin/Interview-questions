import test from "ava";
import { randomNumberArr } from "../../utils/index.js";
import { mergeSort } from "../归并排序.js";

test("【归并排序】 case01", (t) => {
  const arr = randomNumberArr();
  const rightSortArr = arr.sort((a, b) => a - b);
  t.deepEqual(mergeSort(arr), rightSortArr, "排序错误");
});
