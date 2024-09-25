document.getElementById('uploadForm').addEventListener('submit', function(event) {
    event.preventDefault();  // Prevent the form from submitting in the traditional way

    const fileInput = document.getElementById('fileInput');
    const messageDiv = document.getElementById('message');

    if (fileInput.files.length === 0) {
        messageDiv.textContent = "Please select a file to upload.";
        return;
    }

    const file = fileInput.files[0];
    messageDiv.textContent = `File "${file.name}" uploaded successfully.`;

    // Here you can add code to send the file to the backend for processing
});
