class ReviewCollection {
   constructor(reviewList = []) {
    this._reviewList = reviewList;
   
   }
  get reviewList(){
    return Object.values(this._reviewList)
  }

  get reviewSize() {
    return this._reviewList.length;
  }

  addReview(review) {
    this._reviewList.push(review);
  }

  removeReview() {
    this._reviewList.pop();
  }

}

module.exports = ReviewCollection;




    // const r = new Review;
    // r.id = 123;
    // r.name = "Damn Daniel"
    // r.content = "fuck me right?"

    // this.reviewList.push(r)