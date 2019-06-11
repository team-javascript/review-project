//app factory function

class Review {
  constructor(id, title, imageUrl, reviewCategory, content) {
    this._id = id;
    this._title = title;
    this._imageUrl = imageUrl;
    this._reviewCategory = reviewCategory;
    this._content = content;
  }
  get id() {
    return this._id;
  }
  get title() {
    return this._title;
  }
  get imageUrl() {
    return this._imageUrl;
  }
  get reviewCategory() {
    return this._reviewCategory;
  }
  get content() {
    return this._content;
  }
}

module.export = Review;
