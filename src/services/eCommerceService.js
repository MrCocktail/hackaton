import axios from "axios"

const API_BASE_URL = 'https://fakestoreapi.com'

export async function getProducts(){
    try{
        const products = await axios.get(`${API_BASE_URL}/products`)
        .then(res => res.data)
        .catch(err => console.error(err))
        return products
    } catch (err) {
        console.error(err)
    }
}
export async function topProducts() {
  try {
    const response = await axios.get(`${API_BASE_URL}/products`);
    const products = response.data;

    // Filtrer les produits avec un rating > 4.5
    const topRatedProducts = products.filter(product => product.rating.rate >= 4.7);

    return topRatedProducts;
  } catch (error) {
    console.error('Erreur lors de la récupération des produits :', error);
    throw error; // Vous pouvez choisir de gérer l'erreur ici ou la propager à l'appelant
  }
}

export async function getLimitedProducts(amount){
    try{
        const products = await axios.get(`${API_BASE_URL}/products?limit=${amount}`)
        .then(res => res.data)
        .catch(err => console.error(err))
        return products
    } catch (err) {
        console.error(err)
    }
}
export async function getProductsByCategory(category){
    try{
        const products = await axios.get(`${API_BASE_URL}/products/category/${category}`)
        .then(res => res.data)
        .catch(err => console.error(err))
        return products
    } catch (err) {
        console.error(err)
    }
}
export async function getAllCategories(){
    try{
        const categories = await axios.get(`${API_BASE_URL}/products/categories`)
        .then(res => res.data)
        .catch(err => console.error(err))
        return categories
    } catch (err) {
        console.error(err)
    }
}