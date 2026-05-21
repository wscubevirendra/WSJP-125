import express from "express";
const app = express();

const products = [
    {
        id: 1,
        title: "Wireless Bluetooth Headphones",
        price: 1999,
        category: "Electronics",
        brand: "Boat",
        rating: 4.5,
        stock: 25,
        thumbnail: "https://via.placeholder.com/300",
        description: "High quality wireless headphones with noise cancellation.",
        discountPercentage: 10
    },
    {
        id: 2,
        title: "Men's Casual T-Shirt",
        price: 499,
        category: "Fashion",
        brand: "H&M",
        rating: 4.2,
        stock: 50,
        thumbnail: "https://via.placeholder.com/300",
        description: "Comfortable cotton t-shirt for everyday wear.",
        discountPercentage: 5
    },
    {
        id: 3,
        title: "Smartphone 5G",
        price: 15999,
        category: "Electronics",
        brand: "Samsung",
        rating: 4.6,
        stock: 15,
        thumbnail: "https://via.placeholder.com/300",
        description: "Latest 5G smartphone with powerful processor.",
        discountPercentage: 12
    },
    {
        id: 4,
        title: "Running Shoes",
        price: 2499,
        category: "Footwear",
        brand: "Nike",
        rating: 4.4,
        stock: 30,
        thumbnail: "https://via.placeholder.com/300",
        description: "Lightweight running shoes for daily workouts.",
        discountPercentage: 15
    },
    {
        id: 5,
        title: "Laptop 14 inch",
        price: 55999,
        category: "Electronics",
        brand: "Dell",
        rating: 4.7,
        stock: 10,
        thumbnail: "https://via.placeholder.com/300",
        description: "Powerful laptop for work and gaming.",
        discountPercentage: 8
    },
    {
        id: 6,
        title: "Women's Handbag",
        price: 1299,
        category: "Fashion",
        brand: "Zara",
        rating: 4.3,
        stock: 40,
        thumbnail: "https://via.placeholder.com/300",
        description: "Stylish handbag for daily use.",
        discountPercentage: 20
    },
    {
        id: 7,
        title: "Smart Watch",
        price: 2999,
        category: "Electronics",
        brand: "Noise",
        rating: 4.1,
        stock: 35,
        thumbnail: "https://via.placeholder.com/300",
        description: "Track your fitness and notifications.",
        discountPercentage: 18
    },
    {
        id: 8,
        title: "Gaming Mouse",
        price: 899,
        category: "Accessories",
        brand: "Logitech",
        rating: 4.6,
        stock: 60,
        thumbnail: "https://via.placeholder.com/300",
        description: "High precision gaming mouse.",
        discountPercentage: 10
    },
    {
        id: 9,
        title: "Office Chair",
        price: 7499,
        category: "Furniture",
        brand: "Ikea",
        rating: 4.5,
        stock: 12,
        thumbnail: "https://via.placeholder.com/300",
        description: "Ergonomic office chair for long working hours.",
        discountPercentage: 7
    },
    {
        id: 10,
        title: "Backpack",
        price: 999,
        category: "Accessories",
        brand: "Wildcraft",
        rating: 4.3,
        stock: 45,
        thumbnail: "https://via.placeholder.com/300",
        description: "Durable backpack for travel and office.",
        discountPercentage: 9
    }
];


app.get("/product", (req, res) => {
    try {
        console.log(req.path, "path");
        console.log(req.body, "body");
        console.log(req.query, "query");
        console.log(req.params, "params");
        console.log(req.files, "files");
        console.log(req.headers, "header");
        console.log(req.ip, "ip");
        const id = parseInt(req.query.id);
        let product = null;
        if (id) {
            product = products.find((item, index) => item.id === id)
        } else {
            product = products
        }

        res.status(200).json({
            message: "Product find",
            product,
            total: products.length
        })
    } catch (error) {
        res.status(500).json({
            message: "Internal server error",
        })
    }
})




app.listen("5000", () => {
    console.log("Server is running port number 5000")
})