let generate_btn = document.querySelector(".generate_btn");

generate_btn.addEventListener("click", fetchPics);

function fetchPics(){
    let foxsImage = document.querySelector(".foxsImage")
    foxsImage.innerHTML=''
    
    fetch('https://randomfox.ca/floof/')
    .then(response => response.json())
    .then((data) => {
        let foxsImgUrl = data.image

        let foxsImgEl = document.createElement("img")
        foxsImgEl.setAttribute('src',`${foxsImgUrl}`)
        
        let foxsImage = document.querySelector(".foxsImage")
        foxsImage.appendChild(foxsImgEl)

    })
    .catch(err => console.log(err))
}