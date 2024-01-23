import ProductCard from "./ProductCard";

const Exercice3 = (props) => {
    const products = [
        { id: 1, nom: "Produit 1", prix: 15.75, promo: false },
        { id: 2, nom: "Produit 2", prix: 2, promo: false },
        { id: 3, nom: "Produit 3", prix: 150, promo: true }
    ]

    return (
        <>
            {products.map(product => <ProductCard key={product.id} nom={product.nom} prix={product.prix} promo={product.promo} />)}
        </>
    )
}

export default Exercice3;


// Exemple de cas où on aurait eu besoin de récupérer la liste dans les props
// const ProductsPage = () => {
//     const productlist = []

//     return (
//         <>
//          <FilterBar products={productlist} />
//          <ProductList products={productlist} />
//          <PreviewPanier />
//         </>
//     )
// }

// const ProductList = (props) => {
//     const { productlist} = props
// }
