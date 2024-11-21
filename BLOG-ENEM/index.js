function addComment() {
  var nameInput = document.getElementById("nameInput");
  var commentInput = document.getElementById("commentInput");
  var commentsDiv = document.getElementById("comments");
  var name = nameInput.value;
  var commentText = commentInput.value;
  if (name.trim() !== "" && commentText.trim() !== "") {
    var newComment = document.createElement("div");
    newComment.classList.add("comment");
    var namePara = document.createElement("p");
    namePara.innerHTML = "<strong>" + name + "</strong>";
    newComment.appendChild(namePara);
    var commentPara = document.createElement("p");
    commentPara.textContent = commentText;
    newComment.appendChild(commentPara);
    commentsDiv.appendChild(newComment);
    nameInput.value = "";
    commentInput.value = "";
  }
}
