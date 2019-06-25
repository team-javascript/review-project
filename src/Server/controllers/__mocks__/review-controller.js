module.exports = {
  renderReviews: (req, res, next) => {
    res.render("reviews", {
      reviews: {
        5: {
          id: 5,
          title: "Test Title",
          imageUrl: "test URL",
          reviewCategory: "meme",
          content: "Test content"
        }
      }
    });
  },
  renderReview: (req, res, next) => {
    res.render("review", {
      review: {
        1: {
          id: 1,
          title: "Test Title",
          imageUrl: "test URL",
          reviewCategory: "meme",
          content: "Test content"
        }
      }
    });
  },

  addReview:(req, ress, next) =>{}
};
