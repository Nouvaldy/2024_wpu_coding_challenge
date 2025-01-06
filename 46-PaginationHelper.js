//day 46/366
//https://www.codewars.com/kata/515bb423de843ea99400000a

class PaginationHelper {
	constructor(collection, itemsPerPage) {
        this.collection = collection;
        this.itemsPerPage = itemsPerPage;
	}
	itemCount() {
        return this.collection.length;
	}
	pageCount() {
        return Math.ceil(this.collection.length/this.itemsPerPage);
	}
	pageItemCount(pageIndex) {
        return (0 <= pageIndex && pageIndex < this.pageCount()-1) ? this.itemsPerPage : (pageIndex === this.pageCount()-1) ? this.collection.length - (this.itemsPerPage*(this.pageCount()-1)) : -1;
	}
	pageIndex(itemIndex) {
        return (0 <= itemIndex && itemIndex < this.collection.length) ? Math.floor((itemIndex)/this.itemsPerPage) : -1;
  }
}

// var helper = new PaginationHelper(['a','b','c','d','e','f'], 4);

// console.log(helper.pageCount()); // should == 2
// console.log(helper.itemCount()); // should == 6
// console.log(helper.pageItemCount(0)); // should == 4
// console.log(helper.pageItemCount(1)); // last page - should == 2
// console.log(helper.pageItemCount(2)); // should == -1 since the page is invalid

// // pageIndex takes an item index and returns the page that it belongs on
// console.log(helper.pageIndex(5)); // should == 1 (zero based index)
// console.log(helper.pageIndex(2)); // should == 0
// console.log(helper.pageIndex(20)); // should == -1
// console.log(helper.pageIndex(-10)); // should == -1
