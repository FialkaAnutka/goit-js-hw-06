const liEl = document.querySelector('#categories');
console.log(`Number of categories: ${liEl.children.length}`);

[...liEl.children].forEach(elem =>
    console.log(`Category: ${elem.children[0].textContent} 
Elements: ${elem.lastElementChild.children.length}`)
);



// const list = document.querySelectorAll('li.item');
// console.log(`Number of categories:${list.length}`);
// const ul = document.querySelectorAll('#categories>li');
// ul.forEach(el => {
//   const category = `Category: ${el.firstElementChild.textContent}`;  const elements= `Elements: ${el.lastElementChild.children.length}`;
//   console.log(category);  console.log(elements);});
















