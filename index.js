const header = document.getElementById('header')
const title = document.getElementById('title')
const excerpt = document.getElementById('excerpt')
const profile_img = document.getElementById('profile_img')
const names = document.getElementById('name')
const date = document.getElementById('date')

const animated_bgs = document.querySelectorAll('.animated-bg')
const animated_bg_texts = document.querySelectorAll('.animated-bg-text')

setTimeout(() => {
    getData()
}, 2500);

function getData() {
    header.innerHTML = `<img src="photo2.jpg" alt="">`
    title.innerHTML = `Software Engineer, Google.`
    excerpt.innerHTML = `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel, perferendis!`
    profile_img.innerHTML = `<img src="photo.jpg" alt="">`
    names.innerHTML = `Sam Dee`
    date.innerHTML = `Sept 15, 2022`

    animated_bgs.forEach(bg => bg.classList.remove('animated-bg'))
    animated_bg_texts.forEach(bg => bg.classList.remove('animated-bg-text'))
}
