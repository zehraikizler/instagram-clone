// JAVASCRİPT KODLARI

// beğenme butonu

let unlikeHearts = document.querySelectorAll('.unlike-heart');
let likeHearts = document.querySelectorAll('.like-heart');
let likeCounts = document.querySelectorAll('.like-count');

unlikeHearts.forEach(function(el, index){
    el.addEventListener("click", () => {
        let likeCount = parseInt(likeCounts[index].innerHTML);
        likeCount++;
        likeCounts[index].innerHTML = likeCount;
        unlikeHearts[index].style.display = "none";
        likeHearts[index].style.display = "inline-block";
    });
});

likeHearts.forEach(function(el, index){
    el.addEventListener("click", () => {
        let likeCount = parseInt(likeCounts[index].innerHTML);
        likeCount--;
        likeCounts[index].innerHTML = likeCount;
        likeHearts[index].style.display = "none";
        unlikeHearts[index].style.display = "inline-block";
    });
});

// follow-unfollow

let follows = document.querySelectorAll('.follow');
let unFollows = document.querySelectorAll('.unfollow');

follows.forEach(function(el, index){
    el.addEventListener("click", () => {
        follows[index].style.display = "none";
        unFollows[index].style.display = "inline-block";
        unFollows[index].style.color = "gray";
    });
});

unFollows.forEach(function(el, index){
    el.addEventListener("click", () => {
        unFollows[index].style.display = "none";
        follows[index].style.display = "inline-block";
    });
});

// add comment

let comments = document.querySelectorAll('.comment');
let commentBtns = [...document.querySelectorAll('.comment-btn')];
let posts = document.querySelectorAll('.posts');


commentBtns.forEach(function(el, index){
    el.addEventListener("click", () => {
       let com = comments[index].value;

       if(com.trim().length > 0){
            var li = document.createElement('li');
            li.classList.add('post-like');
            var b = document.createElement('b');
            var span = document.createElement('span');

            b.innerHTML = 'Zehra İkizler ';
            span.innerHTML = com;

            posts[index].appendChild(li);
            li.appendChild(b);
            li.appendChild(span);
            comments[index].value = "";
       }
       else{
           alert("Boş yorum atamazsınız.")
       }
       
    });
});


// JQUERY KODLARI beğenme-follow

// $(document).ready(function() {

//     // beğenme butonu 

//     $('.unlike-heart').click(function(){
//         var likeHeart = $(this).siblings('.like-heart');
//         $(this).css("display", "none");
//         likeHeart.css("display", "inline-block");
//     });

//     $('.like-heart').click(function(){
//         var unlikeHeart = $(this).siblings('.unlike-heart');
//         $(this).css("display", "none");
//         unlikeHeart.css("display", "inline-block");
//     });

//     // follow-unfollow

//     $('.follow').click(function(){
//         var unFollow = $(this).siblings('.unfollow');
//         $(this).css("display", "none");
//         unFollow.css("display", "inline-block");
//         unFollow.css("color", "gray");
//     });

//     $('.unfollow').click(function(){
//         var follow = $(this).siblings('.follow');
//         $(this).css("display", "none");
//         follow.css("display", "inline-block");
//     });

// });

