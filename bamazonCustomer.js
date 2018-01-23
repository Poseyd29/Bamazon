var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "",
  database: "Bamazon_db"
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("-------Welcome to Bamazon-------")
  shop();
});

function shop() {
		inquirer
			.prompt({
				name:"purchase"
				type:"list"
				message:"What product would to purchase? We have some cool things!"
				choices: [
					"Yeezy Boost V2",
					"Retro Jordan IV",
					"Retro Jordan XI",
					"Adidas UltraBoost",
					"Iphone X",
					"Samsung Galaxy",
					"Playstation Pro",
					"Xbox",
					"Gold Necklace",
					"Diamond Necklace"

				]
			})
			.then(function(answer){

				
			})

}