import { urls } from "./constant.js";

(async function () {
  const { posts } = await fetch(urls.post).then((res) => res.json());
  console.log(posts);

  const listOfPost = document.querySelector(".posts");
  listOfPost.innerHTML = "";
  posts.forEach((post) => listOfPost.appendChild(generatePost(post)));

  function generatePost(post) {
    const postElemment = document.createElement("article");
    postElemment.className = "post";

    const postLink = document.createElement("a");
    postLink.className = "post-link";
    postLink.dataset.id = post.id;

    const postHeader = document.createElement("header");
    postHeader.className = "post-header";

    const postHeaderTitle = document.createElement("h3");
    postHeaderTitle.textContent = post.title;
    postHeaderTitle.className = "post-title";

    const postDate = document.createElement("p");
    postDate.textContent = post.date;
    postDate.className = "post-date";

    const postFooter = document.createElement("footer");
    postFooter.className = "post-footer";

    const postContent = document.createElement("p");
    postContent.textContent = post.content;
    postContent.className = "post-content";

    postHeader.appendChild(postHeaderTitle);
    postFooter.appendChild(postContent);
    postFooter.appendChild(postDate);
    postLink.appendChild(postHeader);
    postLink.appendChild(postFooter);
    postElemment.appendChild(postLink);

    return postElemment;
  }
})();
