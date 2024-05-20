document.getElementById('downloadBtn').addEventListener('click', () => {
    const repoOwner = 'PvgAmerp';  // replace with the repository owner
    const repoName = 'PvgAmerp/BrickSMPFiles';    // replace with the repository name
    const branch = 'main';      // replace with the branch name if different
    const apiUrl = `https://api.github.com/repos/${repoOwner}/${repoName}/zipball/${branch}`;

    fetch(apiUrl)
        .then(response => response.blob())
        .then(blob => {
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.style.display = 'none';
            a.href = url;
            a.download = `${repoName}.zip`;  // file name for the downloaded zip
            document.body.appendChild(a);
            a.click();
            window.URL.revokeObjectURL(url);
        })
        .catch(err => console.error('Error downloading files:', err));
});
