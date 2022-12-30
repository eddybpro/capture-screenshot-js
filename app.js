const captureBtn = document.querySelector('.capture-btn');
const screenshotPreview = document.querySelector('.captured-text');
const closeBtn = document.querySelector('#close-btn');


const captureScreen = async ()=>{
    try {
        const stream = await navigator.mediaDevices.getDisplayMedia({preferCurrentTab: true});
        const video = document.createElement('video');

        video.addEventListener('loadedmetadata',()=>{
            const canvas = document.createElement('canvas');
            const ctx = canvas.getContext('2d');

            canvas.width = video.videoWidth;
            canvas.height = video.videoHeight;

            video.play();
            ctx.drawImage(video, 0, 0 ,canvas.width, canvas.height);
            stream.getVideoTracks()[0].stop();

            screenshotPreview.querySelector('img').src = canvas.toDataURL();
            screenshotPreview.parentElement.classList.add('show')
        })

        video.srcObject= stream;
        console.log(stream)
    } catch (error) {
        alert('Failed to capture screenshot!')
    }
}


closeBtn.addEventListener('click',()=>screenshotPreview.parentElement.classList.toggle('show'))
captureBtn.addEventListener('click', captureScreen)





























