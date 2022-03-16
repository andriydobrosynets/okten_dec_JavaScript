// 1.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті
// https://jsonplaceholder.typicode.com/users
//     кожному елементу юзера створити кнопку, при клику на яку в окремий блок виводяться всі пости поточного юзера.
//     Кожному елементу post створити кнопку, при клику на яку в окремий блок виводяться всі коментарі поточного поста


fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => {
        let usersBox = document.getElementsByClassName('users-box')[0];
        for (const user of users) {
            let pUser = document.createElement('p');
            pUser.innerText = `${user.id} - ${user.name}`;
            let detailsBtn = document.createElement('button');
            detailsBtn.innerText = 'details';
            detailsBtn.onclick = function () {
                fetch(`https://jsonplaceholder.typicode.com/users/${user.id}/posts`)
                    .then(value => value.json())
                    .then(posts => {
                        let postsBox = document.getElementsByClassName('posts-box')[0];
                        postsBox.innerHTML = '';
                        for (const post of posts) {
                            let liPost = document.createElement('li');
                            liPost.innerText = `${post.id} - ${post.title}`;
                            postsBox.append(liPost);
                            let detailsBtnPosts = document.createElement('button');
                            detailsBtnPosts.innerText = 'details';
                            detailsBtnPosts.onclick = function (){
                                fetch(`https://jsonplaceholder.typicode.com/posts/${post.id}/comments`)
                                    .then(value => value.json())
                                    .then(comments => {
                                        let commentsBox = document.getElementsByClassName('comments-box')[0]
                                        commentsBox.innerText = ''
                                        for (const comment of comments) {
                                            let pPost = document.createElement('p')
                                            pPost.innerText = `${comment.id} - ${comment.name} - ${comment.email}`
                                            commentsBox.append(pPost)

                                        }
                                    })
                            }
                            postsBox.appendChild(detailsBtnPosts);
                        }

                    });

            };
            pUser.appendChild(detailsBtn);
            usersBox.appendChild(pUser);



        }

    });