import React from 'react';
import data from './data';
import Product from './components/Product';

function App() {
  return (
    <div className="grid-container">
            <header className="row">
                <div>
                    <a className="brand" href="/">Amazona</a>
                </div>
                <div>
                    <a href="/cart">Cart</a>
                    <a href="/signin">Sign In</a>
                </div>
            </header>
            <main>
                <div className="row center">

                  {
                    data.products.map(product => (
                      <Product key={product._id} product={product} />
                    )
                    )
                  }

                </div>
                
            </main>
            <footer className="row center">
                All rights reserved
            </footer>
        </div>
  );
}

export default App;



// {
//   data.products.map((product) => {
//     <div className="card">
//       <a href="product.html">
//           <img className="medium" src="./images/img.jpg" alt="{product.name}"/>
//       </a>
//       <div className="card-body">
//           <a href="product.html">
//               <h2>{product.name}</h2>
//           </a>
//           <div className="rating">
//               <span> <i className="fa fa-star"></i> </span>
//               <span> <i className="fa fa-star"></i> </span>
//               <span> <i className="fa fa-star"></i> </span>
//               <span> <i className="fa fa-star"></i> </span>
//               <span> <i className="fa fa-star"></i> </span>
//           </div>
//           <div className="price">
//               {product.price}
//           </div>
//       </div>
//   </div>
//   })
// }