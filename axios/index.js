import axios from 'axios'

const request_01 = async () => {
    //const result = await axios.get('https://cafectg-production.up.railway.app/api/products')
    const result = await axios.get('http://localhost:8087/api/product')
    console.log(result.data.length)
}

const request_02 = async () => {
    //const result = await axios.get('https://cafectg-production.up.railway.app/api/products')
    const result = await axios.get('http://localhost:8087/api/product/search/bulbasaur')
    console.log(result.data)
}

request_01()// get products
request_02()// get products Search Product by name


describe("Products Testing", () => {
describe("GETS", () => {
    it("the base request should return 200", async () => {
    let response = await requester.get("/api/products");
    expect(response.status).to.be.equals(200);
    });
    it("should return an array of products", async () => {
    let response = await requester.get("/api/products");
    const { _body } = response;
    expect(_body).to.be.an("array");
    });
});
describe("PUTS", () => {
    it("modify product price by Id", async () => {
    let product = {
        price: randomPrice,
        stock: "4",
    };
    const response = await requester
        .put("/api/products/637b6a6d909be982a42b673c")
        .send(product);
    const { _body } = response;
    expect(_body.status.modifiedCount).to.be.equal(1);
    });
});
});



describe("User Testing", () => {
describe("GETS", () => {
    it("Return 200", async () => {
    let response = await requester.get("/api/users");
    const { _body } = response;
    expect(response.status).to.be.equals(200);
    });
});
});

describe("Session Testing register and login", () => {
describe("POST", () => {
    it("login test with an existing user", async () => {
    let user = {
        email: "coderHouse@correo.com",
        password: "123123123",
    };
    let response = await requester.post("/api/sessions/login").send(user);
    expect(response.status).to.be.equals(200);
    });
});
describe("POST", () => {
    it("login test with an non existing user", async () => {
    let user = {
        email: "noexisto@correo.com",
        password: "123",
    };
    let response = await requester.post("/api/sessions/login").send(user);
    expect(response.status).to.be.not.equal(200);
    });
});
describe("POST", () => {
    it("register a new user and check if create a cart", async () => {
    let user =   {
        "name": "Tester",
        "email": fakerMail,
        "password": "123",
        "passwordCheck":"123",
        "address": "Av Caminos del Inca 1609",
        "age": 22,
        "phoneNumber": "2345-3455",
        "imageUrl": "https://Imagen_de_prueba.png",
    };
    let response = await requester.post("/api/sessions/register").send(user);
    const result = response.body
    expect(result.payload).to.include.keys('cart')
    });
});
});


