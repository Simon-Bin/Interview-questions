import test from "ava";
import { randomNumberArr } from "../../utils/index";
import { insertionSort } from "../插入排序";

test("【插入排序】", (t) => {
  const arr = randomNumberArr();
  const rightSortArr = arr.sort((a, b) => a - b);

  t.deepEqual(insertionSort(arr), rightSortArr, "排序错误");
});
