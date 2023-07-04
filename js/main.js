// Get the container element
const container = document.getElementById('markdown-container');

// Fetch the Markdown content
fetch('wiki.md')
  .then(response => response.text())
  .then(markdownContent => {
    // Convert Markdown to HTML
    const converter = new showdown.Converter();
    const htmlContent = converter.makeHtml(markdownContent);

    // Update the container with HTML content
    container.innerHTML = htmlContent;
  })
  .catch(error => {
    console.error('Error fetching Markdown content:', error);
  });