let sec_map = document.querySelector(".sec_map");

const data = [

    {
        par: "BAMBOO WHITE TEE",
        img: "/img/p1 1.png"
    },
    {
        par: "WHITE DROP SHOULDER TEE",
        img: "/img/2 1.png"
    },
    {
        par: "WHITE SPORT SHIRT",
        img: "/img/p3 1.png"
    },
    {
        par: "BAMBOO GREY GREEN",
        img: "/img/4 1.png"
    },
    {
        par: "GREY EVERYDAY HOODIE",
        img: "/img/p5 1.png"
    },
    {
        par: "GREY GREEN DROP SHOULDER TEE        ",
        img: "/img/p6 1.png"
    },
    {
        par: "GREY GREEN OVERSIZED LONG SLEEVE TEE",
        img: "/img/p6 2.png"
    },
    {
        par: "GREY GREEN OVERSIZED HOODIE W MASK",
        img: "/img/p6 1.png"
    },
    {
        par: "GREY GREEN SPORT SHIR",
        img: "/img/p6 2.png"
    },
    {
        par: "GREY EVERYDAY LOUNGE",
        img: "/img/4 1.png"
    },
    {
        par: "LIGHT GREY SWEAT PANT",
        img: "/img/p9 1.png"
    },
    {
        par: "GREY GREEN SWEAT PANT",
        img: "/img/p10 1.png"
    },
    {
        par: "GREY GREEN SPORT SHORT",
        img: "/img/p11 1.png"
    },
    {
        par: "GREY WOMEN CROP TOP HOODIE",
        img: "/img/p12 1.png"
    },
    {
        par: "GREY WOMEN CROP TOP SWEATER",
        img: "/img/p13 1.png"
    },
    {
        par: "GREY WOMEN TRACK PANTS",
        img: "/img/p14 1.png"
    },

]

data.map((item)=>{
  sec_map.innerHTML +=`
    <div class="sec_map_mini">
    <img src=" ${item.img} " alt="">
    <p> ${item.par} </p>
    <a href="#" style="--clr:#EB4C42"><span>BUY</span><i></i></a>

    </div>
    `;
})

// ===========================


let local = document.querySelector(".local_page");
let span = document.querySelector(".ili");
let btn = document.querySelector(".sssssssss");

btn.addEventListener("click", function () {
    local.style.transform = "translateX(0px)";
});
span.addEventListener("click", function () {
    local.style.transform = "translateX(450px)"
});