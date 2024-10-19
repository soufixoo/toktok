document.getElementById('formatChoice').addEventListener('change', function() {
    const videoList = document.getElementById('formatList');
    const audioList = document.getElementById('audioList');
    if (this.value === 'video') {
        videoList.classList.remove('hidden');
        audioList.classList.add('hidden');
    } else {
        audioList.classList.remove('hidden');
        videoList.classList.add('hidden');
    }
});

document.getElementById('downloadButton').addEventListener('click', function() {
    const url = document.getElementById('videoUrl').value;
    const formatChoice = document.getElementById('formatChoice').value;
    let format = '';
    
    if (formatChoice === 'video') {
        format = document.getElementById('videoFormat').value;
    } else {
        format = document.getElementById('audioFormat').value;
    }
    
    alert(`You would download ${formatChoice} in ${format} format from URL: ${url}`);
    // Implement download logic using server-side processing
});
