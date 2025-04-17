// modules/mdloader.js

// Hàm để kiểm tra và tải marked.min.js nếu chưa có
function loadMarkedLibrary() {
    return new Promise((resolve, reject) => {
      if (typeof marked === 'undefined') {
        const script = document.createElement('script');
        script.src = 'https://cdn.jsdelivr.net/npm/marked/marked.min.js';
        script.onload = () => resolve();
        script.onerror = () => reject(new Error('Không thể tải marked.min.js'));
        document.head.appendChild(script);
      } else {
        resolve();
      }
    });
  }
  
  // Export hàm loadMarkdown
  export async function loadMarkdown(filePath, targetElementId) {
    try {
      await loadMarkedLibrary();
      const response = await fetch(filePath);
      if (!response.ok) throw new Error('Không thể tải file Markdown');
      const markdownContent = await response.text();
      const htmlContent = marked.parse(markdownContent);
      document.getElementById(targetElementId).innerHTML = htmlContent;
    } catch (error) {
      console.error('Lỗi:', error.message);
      document.getElementById(targetElementId).textContent = 'Không thể tải nội dung.';
    }
  }