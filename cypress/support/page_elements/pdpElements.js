const pdpElements = {
    productsLink: 'a[href="/products"]',
    titleProducts: '.title',
    btnViewProduct: 'a[href="/product_details/1"]',
    productName: '.product-information > h2',
    productCategory: '.product-information > :nth-child(3)',
    productPrice: ':nth-child(5) > span',
    productQuantity: '#quantity',
    productCondition: '.product-information > :nth-child(7)',
    productStyle: '.product-information > :nth-child(8)',
    searchProduct: '#search_product',
    btnSearch: '#submit_search',
    productBlock: '.features_items'
}

export default pdpElements;