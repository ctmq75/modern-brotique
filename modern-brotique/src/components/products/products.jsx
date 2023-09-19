import React from "react";

function Products() {
    const products = [
      { id: 1, name: 'Lululemon ABC Pants', price: '$129' },
      { id: 2, name: 'Product 2', price: '$200' },
      { id: 3, name: 'Product 3', price: '$300' },
    ];
  
    return (
      <section>
        <h2>Products</h2>
        <ul>
          {products.map(product => (
            <li key={product.id}>
              <ProductDetails product={product} />
            </li>
          ))}
        </ul>
        <iframe sandbox="allow-popups allow-scripts allow-modals allow-forms allow-same-origin" width="120px" height='240px' marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=cmcardle1210-20&language=en_US&marketplace=amazon&region=US&placement=B09CGWK6PR&asins=B09CGWK6PR&linkId=8bc525ddbdc3a845d7700845f5632dff&show_border=true&link_opens_in_new_window=true"></iframe>
      </section>
    );
  }

  function ProductDetails({ product }) {
    return (
      <div>
        <h3>{product.name}</h3>
        <p>{product.price}</p>
        <button>Add to Cart</button>
      </div>
    );
  }

export default Products;