
// splice method
// this changes the array bytheway

// it can delet or insert any element in the array
// format is (start(index), how many items to delete , insert "what to instert")

const arr = ['item 1','item 2','item 3','item 4','item 5']

// delete
// .splice(starting index , how many items to delete)

const deletedItem=arr.splice(1,3)
console.log('Deleted item is ',deletedItem)
console.log(arr)



// insert

const arr2 = ['item 1','item 2','item 3','item 4','item 5']
arr2.splice(3,0,'item insterted moffoooo')
// 3 is starting index , 0 is 0 delete , and the text is insterted text

console.log(arr2)



// delete and insert

const arr3 = ['item 1','item 2','item 3','item 4','item 5']
arr3.splice(1,3,'FFFFFF','FFFFF','FFFFF')
// 1 is starting index ,3 is 3 delete , and the text is insterted text

console.log(arr3)