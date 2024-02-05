var audio;

        function music() {
            audio = new Audio('music.mp3');
            audio.play();

            // Disable play button and enable stop button
            document.getElementById('playButton').disabled = true;
            document.getElementById('stopButton').disabled = false;
        }

        function nmusic() {
            audio.pause();
            audio.currentTime = 0;

            // Disable stop button and enable play button
            document.getElementById('stopButton').disabled = true;
            document.getElementById('playButton').disabled = false;
        }
