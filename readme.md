![](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png) 

# Divide and Conquer Sorts

## Overview
This lesson covers two sorting algorithms that use the "divide and conquer" method: merge sort and quick sort.


## Merge Sort

### Task 1: Implement a "Merge" Function

Your method `merge` should take as parameters two arrays that are already in sorted order, and it should output a single array in sorted order. For example:

```js
merge([1,4,6], [3,4,5,10])

=> [1,3,4,4,5,6,10]

```
Let's note a few things:

- We're are letting this method "assume" that the arguments are not just any arrays, but *sorted* arrays
- `merge` itself is *not* yet a sorting algorithm! A sorting algorithm inputs a scrambled array and gives back a sorted one; merge does something different. We'll get a sorting algorithm, but first things first!

*Hint: you should somehow take advantage of the fact that the two arrays are already sorted*

- From the root directory, run**:
`npm install`
- Write you function in `app.js`. 
- To test it, run:
`npm run test`
- feel free to add more tests in `test.js`!

 *Discuss: What is the Big O complexity of merge?*
### Task 2: Use the `merge` function you implemented to write a mergeSort function 

Like any sorting algorithm, a merge sort inputs an array and outs the array in sorted order. The idea is, if we can break our array down into two sorted arrays, we can then use our `merge` function to fuse them into one.

But wait! How can we get two sorted arrays? The answer is... with a merge sort! Clearly recursion will be involved. The steps, in pseudocode, look something like this:

- Split your array into two arrays: the "left half" and the "right half"
- Sort both of these arrays with `mergeSort`
- Combine them into one array with `merge`.
- return the array, and that's it!

All that's missing is our base case; since our algorithm involves splitting arrays into smaller and smaller pieces, we hit the base case when our array has 0 or 1 element(s). Sorting an array with 0 or 1 element(s) should be easy :) 

Add tests to `test.js` to see if it's working the way you expect.

Discuss: 
- What is the big O complexity in time and space of mergeSort? 
- Is it stable/unstable?
- What's the *best* case complexity?
- What would it look like to implement this without recursion?



## Additional Resources
* Check out [this visualization](https://www.cs.usfca.edu/~galles/visualization/ComparisonSort.html) for both merge and quick sort.
* Revisit our folk-dancing friends, now showing [merge sort](https://www.youtube.com/watch?v=XaqR3G_NVoo) and [quick sort](https://www.youtube.com/watch?v=ywWBy6J5gz8&list=PLuE79vNc5Wi6q34LsQcaJ7ISQ8uOyMaL_&index=4).
* [This tool](http://me.dt.in.th/page/Quicksort/) is useful for understanding how quick sort works.
* Watch how these algorithms look sketched out - [merge sort](https://www.youtube.com/watch?v=TzeBrDU-JaY) and [quick sort](https://www.youtube.com/watch?v=COk73cpQbFQ&list=PL2_aWCzGMAwKedT2KfDMB9YA5DgASZb3U&index=8&t=0s).

