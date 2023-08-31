const url = `https://openapi.programming-hero.com/api/videos/categories`;
 const handlerCategory = async() =>{
    const res = await fetch(url);
    const data = await res.json();
    console.log(data.data)
    const categories = data.data;

    // category append here
    const categoryContainer = document.getElementById('category-container');
    categories.forEach((item) => {
        const div = document.createElement('div');
        div.innerHTML=`
        <a class="px-6 py-3 text-xl rounded-md bg-gray-200 font-medium ">${item.category}</a>`
        categoryContainer.appendChild(div);
    })
 }


 handlerCategory();