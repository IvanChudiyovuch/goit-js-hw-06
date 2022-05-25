const countCategories = document.querySelectorAll('.item');

console.log(`Number of categories: ${countCategories.length}`);

for (const item of countCategories) {
    console.log(`Category: ${item.firstElementChild.textContent}`);
    const countElements = item.querySelectorAll('li');
    console.log(`Elements: ${countElements.length}`);
};