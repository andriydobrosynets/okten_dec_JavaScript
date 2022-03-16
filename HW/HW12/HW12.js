// 1.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ об'єкти. Застилізувати, за допомоги css, щоб отримати 5 елементів в рядку.
// Для кожного елементу свій блок div.post
// Всі характеристики повинні мати свої блоки всередені div.post
// https://jsonplaceholder.typicode.com/posts

fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(posts => {
        let postsBox = document.getElementsByClassName('posts-box')[0];
        for (const post of posts) {
            let pPost = document.createElement('div');
            pPost.classList.add('div-post')
            pPost.innerText = `ID - ${post.id},
            TITLE - ${post.title},
            BODY - ${post.body}`;
            postsBox.appendChild(pPost);
        }
    });


// 2.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті.
//     Для кожного елементу свій блок div.comment
// Всі характеристики повинні мати свої блоки всередені div.comment
// https://jsonplaceholder.typicode.com/comments



fetch(`https://jsonplaceholder.typicode.com/comments`)
    .then(value => value.json())
    .then(comments => {
        let commentsBox = document.getElementsByClassName('comments-box')[0];
        for (const comment of comments) {
            let pComment = document.createElement('div');
            pComment.classList.add('div-post')
            pComment.innerText = `ID - ${comment.id}
             NAME- ${comment.name} 
             EMAIL- ${comment.email} 
             BODY- ${comment.body}`;
            commentsBox.appendChild(pComment);
        }
    });