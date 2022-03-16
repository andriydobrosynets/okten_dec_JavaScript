// 1.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті
// https://jsonplaceholder.typicode.com/posts
//     зробити кнопку до кожного поста. при кліку на яку виводяться в окремий блок всі коментарі поточного поста


fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(posts => {
        let postsBox = document.getElementsByClassName('posts-box')[0];
        for (const post of posts) {
            let pPost = document.createElement('p');
            pPost.innerText = `${post.id} - ${post.title}`;
            let detailsBtn = document.createElement('button');
            detailsBtn.innerText = 'details';
            detailsBtn.onclick = function () {
            	fetch(`https://jsonplaceholder.typicode.com/posts/${post.id}/comments`)
            		.then(value => value.json())
            		.then(comments => {
            			let commentsBox = document.getElementsByClassName('comments-box')[0];
            			commentsBox.innerHTML = '';
            			for (const comment of comments) {
            				let liComment = document.createElement('h1');
            				liComment.innerText = comment.email;
                            let liCommentBody = document.createElement('li');
                            liCommentBody.innerText = comment.body;
                            commentsBox.append(liComment);
                            commentsBox.append(liCommentBody)
            			}
            		});
            };
            pPost.appendChild(detailsBtn);
            postsBox.appendChild(pPost);
        }
    });