num = document.getElementById("con")
var clap = document.getElementById("myAudio");

num.innerText = 10
setTimeout(() => {
    num.innerText = 9
    setTimeout(() => {
        num.innerText = 8
        setTimeout(() => {
            num.innerText = 7
            setTimeout(() => {
                num.innerText = 6
                setTimeout(() => {
                    num.innerText = 5
                    setTimeout(() => {
                        num.innerText = 4
                        setTimeout(() => {
                            num.innerText = 3
                            setTimeout(() => {
                                num.innerText = 2
                                setTimeout(() => {
                                    num.innerText = 1
                                    setTimeout(() => {
                                        num.innerText = "Happy Independence Day"
                                        clap.play();
                                    }, 1000)
                                }, 1000)
                            }, 1000)
                        }, 1000)
                    }, 1000)
                }, 1000)
            }, 1000)
        }, 1000)
    }, 1000)
}, 1000)





// img=document.createElement("img");
// img.setAttribute("src","https://images.news18.com/ibnlive/uploads/2023/08/happy-independence-day-2023-best-wishes-images-quotes-wallpapers-for-77th-independence-day-16920744963x2.jpg?impolicy=website&width=640&height=480")
// document.getElementById("center").append(img)