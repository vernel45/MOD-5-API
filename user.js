const postListEl = document.querySelector(".post-list");

async function onSearchChange(event) {
  const id = event.target.value;
  renderPosts(id);
}
async function renderPosts(id) {
  const posts = await fetch(
    `https://jsonplaceholder.typicode.com/posts?userId=${id}`
  );

  const postsData = await posts.json();
  postListEl.innerHTML = postsData
  .map(
    (post) => `
      <div class="post">
        <div class="post__title">
          ${post.title}
        </div>
        <p class="post__body">
          ${post.body}
        </p>
      </div>
    `
  )
  .join("");
  console.log(postsData);
}

async function renderPosts() {
 
  const posts = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`);
  const postsData = await posts.json();
  console.log(postsData);

  postListEl.innerHTML = postsData.map((post) => `
  <div class="post">
      <div class="post__title">
        ${post.title}
      </div>
      <p class="post__body">
        ${post.body}
      </p>
    </div>`,
  ).join('');
}

main();
