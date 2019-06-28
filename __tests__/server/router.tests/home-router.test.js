// const Route = require("../../../src/Server/routes/home-router");
// const express = require("express");
// const request = require("supertest");

// const app = require("../../../app");

// describe("Home Router/Controller tests", () => {
//   test("Should successfully redirect", done => {
//     //Arrange
//     request(app)
//       //Act
//       .get("/")
//       .then(response => {
//         //Assert
//         expect(response.statusCode).toBe(302);
//         done();
//       });
//   });

//   test("Should successfully redirect from '/' to '/reviews' ", done => {
//     //Arrange
//     request(app)
//       //Act
//       .get("/")
//       .then(response => {
//         //Assert
//         expect(response.req.path).toBe("/");
//         expect(response.headers.location).toBe("/reviews");
//         done();
//       });
//   });
// });
