const url = `https://openapi.programming-hero.com/api/videos/categories`;
let = categoryid=1000;
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
        <button onclick="loadCategoryData(${item.category_id})" class="btn btn-active  hover:bg-red-600 px-6 py-3 text-xl rounded-md bg-gray-200 font-medium " >${item.category}</button>
       `
        categoryContainer.appendChild(div);
    })
 }


//  card details loaded inside this function

const loadCategoryData = async(categoryId) =>{
    const url = `https://openapi.programming-hero.com/api/videos/category/${categoryId}`
         const res = await fetch(url);
         const data = await res.json();
        //  console.log(data.data)
         const cards = data.data;
categoryid = categoryId;
        //  if there is data then will call the function else will show no content 
         if(cards.length!==0){
            loadDataDisplay(cards);
            
         }else{
            console.log('no data')
            const cardContainer = document.getElementById('card-container');
            cardContainer.innerHTML="";
            const emptycard = document.getElementById('no-content');
            emptycard.innerHTML="";
              const div = document.createElement('div');
         
              div.innerHTML = `
              
              <img class="ml-20" src="./Icon.png">
              <h2 class="text-2xl font-bold mt-10">Oops!! Sorry, There is no<br> content here</h2>
             `
              emptycard.appendChild(div);
         }
        
      

}

// Display data
const loadDataDisplay = (data) =>{
 const cardContainer = document.getElementById('card-container');
        cardContainer.innerHTML="";
        const emptycard = document.getElementById('no-content');
      
        emptycard.innerHTML="";
 data.forEach((item) =>{
    const div = document.createElement('div');
    div.innerHTML = `
    <div class="card card-compact   h-[300px]   bg-base-100 shadow-xl">
    <figure><img src="${item.thumbnail} class="" alt="Shoes" /></figure>
     <div class= "text-right relative right-4 bottom-12">
     <span id="set-time" class="bg-black rounded-lg  text-center text-white p-2" >${item.others.posted_date?showTime(item.others.posted_date):""}</span>
     </div>
    <!-- body part below image -->
    <div class="card-body">
      <div class="flex gap-4">
        <div class=""><img class="w-[50px] h-[50px] rounded-full" src="${item.authors[0].profile_picture}" alt="profile picture"></div>
          <div>
            <h2 class="card-title text-base font-bold">${item.title}</h2>
            <!-- name and blue tick -->
             <div class="flex gap-2">
                <span class="text-sm font-normal">${item.authors[0].profile_name}</span>
                <span class="text-sm">${item.authors[0].verified? '<i class="fa-solid fa-circle-check text-blue-600"></i>':""}</span>
             </div>
             <p class="text-sm font-normal"><span>${item.others.views}</span><span> views</span></p>
             
          </div>
      </div >
   
     
    </div>
  </div>`
  cardContainer.appendChild(div);
 })
}


// card card-compact

 handlerCategory();
 loadCategoryData("1000")

//  setTime function

const showTime = (sec) =>{

console.log(sec)

const hr = Math.floor(sec/3600);
  const min = Math.floor(((sec/3600)-hr)*60)
// console.log(hr)
return `${hr} hrs ${min} min ago`;
}



document.getElementById('sort-desending').addEventListener('click',function(){
  const url = `https://openapi.programming-hero.com/api/videos/category/${categoryid}`
  
 fetch(url)
  .then(res => res.json())
  .then(data => console.log(data))
  // const data =  res.json();
  // console.log(categoryid)
  // console.log(data.data)
  
 
})


// (a, b) => parseFloat(b.others.views.split('K')[0]) - parseFloat(a.others.views.split('K')[0])



// const sortContainer = document.getElementById('sort-contaniner');
// const descending = sortData.sort((a, b) => b.others.views - a.others.views);
// descending.forEach((sort) => {
//     const p = document.createElement('p');