document.getElementById('commentForm').addEventListener('submit', function (e) {
    e.preventDefault();
  
    let nameInput = document.getElementById('nameInput');
    let commentInput = document.getElementById('commentInput');
  
    let commentContainer = document.createElement('div');
    commentContainer.classList.add('comment');
  
    let nameElement = document.createElement('div');
    nameElement.classList.add('name');
    nameElement.textContent = nameInput.value;
  
    let commentTextElement = document.createElement('div');
    commentTextElement.textContent = commentInput.value;
  
    let timestampElement = document.createElement('div');
    timestampElement.classList.add('timestamp');
    timestampElement.textContent = getCurrentTimestamp();
  
    commentContainer.appendChild(nameElement);
    commentContainer.appendChild(commentTextElement);
    commentContainer.appendChild(timestampElement);
  
    document.getElementById('commentsContainer').appendChild(commentContainer);
  
    nameInput.value = '';
    commentInput.value = '';
  });
  
  function getCurrentTimestamp() {
    let now = new Date();
    let timestamp = now.toLocaleString('es-ES', { hour: 'numeric', minute: 'numeric', hour12: true });
    return timestamp;
  }
  