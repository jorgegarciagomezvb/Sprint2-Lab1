import { urls } from "./constant.js";

(async function () {
  const { posts } = await fetch(urls.post).then((res) => res.json());
  console.log(posts);

  function generatePost(post){
     const postElemment = document.createElement('article');
     postElemment.className = "post";

     const postLink = document.createElement("a");
     postLink.className = "post-link";
     postLink.dataset.id = post.id;

      const postHeader = document.createElement('header');
      postHeader.className = "post-header";

    const postHeaderTitle = document.createElement('h3');
    postHeaderTitle.textContent = post.title;
    postHeaderTitle.className = "post-title";


      const postDate = document.createElement('p');
      postDate.textContent = formatDataAgo(post.date);
      postDate.className = "post-date"
  }
})();
