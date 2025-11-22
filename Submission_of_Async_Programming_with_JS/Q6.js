// Q6 – E-Commerce Dashboard: Product Card Fetcher

const apiURL = "https://fakestoreapi.com/products";

// Using async/await for cleaner code
async function fetchProducts() {
  try {
    const response = await fetch(apiURL);

    if (!response.ok) {
      throw new Error("Network response was not OK");
    }

    const products = await response.json();

    // Log each product in console
    products.forEach((product) => {
      console.log("Product:", product.title);
      console.log("Price: $" + product.price);
      console.log("Image:", product.image);
      console.log("----------------------------------");
    });

    // Optional: Render cards on HTML page
    if (typeof document !== "undefined") {
      renderProductCards(products);
    }
  } catch (error) {
    console.error("Failed to load products. Please try again.");
    console.error(error);
  }
}

fetchProducts();
