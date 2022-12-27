const productlist = document.querySelectorAll("tr");
console.log(productlist);

function deleteProduct(e) {
  e.target.parentElement.parentElement.remove();
  console.log(e);
}

function addOne(e) {
  const product = e.target.parentElement.parentElement;
  console.log(product);
  const count = parseInt(product.querySelector(".count").innerText);
  product.querySelector(".count").innerText = count + 1;
}

function removeProduct(e) {
  const product = e.target.parentElement.parentElement;
  const count = parseInt(product.querySelector(".count").innerText);
  if (count > 1) {
    product.querySelector(".count").innerText = count - 1;
  }
}
