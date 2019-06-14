const Route = require("../../../src/Server/routes/home-router");
const express = require("express");
const request = require("supertest");

const app = require("../../../app");

describe("Router tests", () => {
  test("Should return a redirect", done => {
    //Arrange
    request(app)
      //Act
      .get("/")
      .then(response => {
        //Assert
        expect(response.statusCode).toBe(302);
        done();
      });
  });
});
