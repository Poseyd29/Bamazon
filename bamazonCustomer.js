const mysql = require("mysql");
const inquirer = require("inquirer");


function Product(ItemID, ProductName, DepartmentName, Price, StockQuantity) {
	this.ItemID = ItemID;
	this.ProductName = ProductName;
	this.DepartmentName = DepartmentName;
	this.Price = Price;
	this.StockQuantity = StockQuantity;
}
const connection = mysql.createConnection({
	host: "localhost",
	port: 3306,

	// Your username
	user: "root",

	// Your password
	password: "",
	database: "Bamazon_db"
});

connection.connect(function (err) {
	if (err) throw err;
	console.log("-------Welcome to Bamazon-------")
	displayProducts();
});

function displayProducts() {

	connection.query("SELECT * FROM Bamazon_db.Products ", function (err, res) {


		
		let productsArr = res.map(function (val) {
			console.log(`ID: ${val.ItemID}  PRODUCT: ${val.ProductName}      DEPARTMENT: ${val.DepartmentName}     PRICE: ${val.Price}    QUANTITY: ${val.StockQuantity}`);
			console.log("----------------------------------------------------------------------------------------------------------\n");
			return new Product(val.ItemID, val.ProductName, val.DepartmentName, val.Price, val.StockQuantity);

		});
		shop(productsArr);
	});
}


function shop(productsArr) {

	inquirer
		.prompt({
			name: "purchase",
			type: "list",
			message: "What is the ID of the product you would to purchase? We have some cool things!",
			choices: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]
		})
		.then(function (answer) {
			let idrawchoice = answer.purchase;
			let idchoice = parseInt(idrawchoice);
			getQuantity(idchoice)
		})

}

function getQuantity (idchoice, productsArr){

	inquirer
	.prompt({
		name: "quantity",
		type: "input",
		message: "How many would you to purchase?"
		
	})
	.then(function (answer) {
		let qrawchoice = answer.quantity;
		let qchoice = parseInt(qrawchoice);
		console.log(qchoice);
	});


}

// my attempt to update product
function updateProduct() {
  console.log("Updating stock quantity...\n");
  connection.query(
    "UPDATE Bamazon_db SET ? WHERE ?",
    [
      {
        StockQuantity: StockQuantity - qchoice
      },
    ],
    function(err, res) {
      console.log(StockQuantity + " products updated!\n");
    }
  );

  // logs the actual query being run
  console.log(query.sql);
}


