export default {
  name: 'ProductList',

  render() {
    return(
      <div>
        <h1 class="my-4">Products catalog</h1>

        <div class="vue-products">
          {this.products.map(product => (
            <ProductCard product={product} />
          ))}
        </div>
      </div>
    )
  }
}
