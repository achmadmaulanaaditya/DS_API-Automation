const request = require("supertest"); // import supertest
const baseUrl = require("../globalVariable/baseUrl");
const { expect } = require("chai"); // import chai
const url = `${baseUrl}`; //define global variable

async function getMethod(id) {
  const response = await request(url).get(`/objects/${id}`);
  //Assertions
  expect(response.status).to.equal(200);
  expect(response.body.name).to.equal("Xiaomi 14 Pro (PUT)");
  expect(response.body.data.color).to.equal("Black");
  expect(response.body.data.price).to.equal("650");
  expect(response.body.data.capacity).to.equal("1 TB");

  console.log(response.body);
}

async function postMethod() {
  const response = await request(url)
    .post("/objects")
    .send({
      name: "Xiaomi 14 Pro",
      data: {
        color: "Black",
        price: "650",
        capacity: "1 TB",
      },
    });
  //Assertions
  expect(response.status).to.equal(200);
  expect(response.body.name).to.equal("Xiaomi 14 Pro");
  expect(response.body.data.color).to.equal("Black");
  expect(response.body.data.price).to.equal("650");
  expect(response.body.data.capacity).to.equal("1 TB");
  expect(response.body.createdAt).to.not.be.null;

  //Simpan ID after POST
  const id = response.body.id;
  console.log("id after POST:", id);
  return id; //Return the ID
}

async function putMethod(id) {
  const response = await request(url)
    .put(`/objects/${id}`)
    .send({
      name: "Xiaomi 14 Pro (PUT)",
      data: {
        color: "Black",
        price: "650",
        capacity: "1 TB",
        year: 2023,
      },
    });
  //Assertions
  expect(response.status).to.equal(200);
  expect(response.body.data.year).to.equal(2023);
  expect(response.body.name).to.equal("Xiaomi 14 Pro (PUT)");
}

async function patchMethod(id) {
  const response = await request(url)
    .patch(`/objects/${id}`)
    .send({
      name: "Xiaomi 14 Pro (PATCH)",
      data: {
        color: "Black",
        price: "650",
        capacity: "1 TB",
      },
    });
  //Assertions
  expect(response.status).to.equal(200);
  expect(response.body.name).to.equal("Xiaomi 14 Pro (PATCH)");
}

module.exports = {
  getMethod,
  postMethod,
  putMethod,
  patchMethod,
};
