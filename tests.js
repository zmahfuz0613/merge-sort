const expect = require("chai").expect;
const { merge, mergeSort } = require("./app.js");

describe("merge", () => {
  let mergedArray;

  it("should merge two sorted arrays into one", () => {
    mergedArray = merge([1,3,5,7], [2,4,6])
    expect(mergedArray).to.deep.equal([1,2,3,4,5,6,7]);

    mergedArray = merge([1,1], [0,2,2,2,2])
    expect(mergedArray).to.deep.equal([0,1,1,2,2,2,2]);

  });

  it("should handle the edge cases", ()=>{
    mergedArray = merge([], []);
    expect(mergedArray).to.deep.equal([]);

    mergedArray = merge([1], []);
    expect(mergedArray).to.deep.equal([1]);

    mergedArray = merge([], [1]);
    expect(mergedArray).to.deep.equal([1]);
  })
});


describe("mergeSort", () => {
  let sortedArray;
  it("should handle the null case", ()=>{
    sortedArray = mergeSort([])
    expect(sortedArray).to.deep.equal([])
  })

  it("sort an array", () => {

    sortedArray = mergeSort([6,4,3,1,5,2])
    expect(sortedArray).to.deep.equal([1,2,3,4,5,6])

    sortedArray = mergeSort([1,1,1,1])
    expect(sortedArray).to.deep.equal([1,1,1,1])

  });
});



