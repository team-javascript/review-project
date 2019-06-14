const Route = require("../../../src/Server/routes/home-router");
const express = require("express");
const request = require("supertest");

const app = require("../../../../app");

describe("Router tests", () => {
  test("Should return a redirect", () => {
    //Arrange
    const app = new express();
    request(app);
    //Act
    request.get("/reviews");

    //Assert
    expect("");
  });
});
