myBalloon = document.getElementById('balloonImg');
        afterEffect = document.getElementById('idAfterEffect');
        scorer = document.getElementById('idScore');
        heart = document.getElementById('life');
        blastSound = new Audio('balloonBlast.mp3');
        myBody = document.getElementById('idBody');
        scoreCount = 0;
        fullLife = 5;
        balloonMotion = setInterval(changePosition, 1000);
        myCount = 0;
        function changePosition() {
            myBalloon.src = 'IMAGES/balloon.svg'
            x = Math.ceil(Math.random() * (600 - 300 + 1) + 300);
            y = Math.ceil(Math.random() * (1400 - 100 + 1) + 100);
            myBalloon.style.top = x + "px";
            myBalloon.style.left = y + "px";
        }

        function scorePlus() {
            scoreCount += 5;
            myBalloon.src = 'boom2.png';
            blastSound.play();
            scorer.innerHTML = "YOUR SCORE : " + scoreCount;
        }

        function checkClick() {
            fullLife = fullLife - 1;
            lifeWriter();
        }

        function lifeWriter(){
                if (fullLife == 4) {
                heart.innerHTML = '<img src="IMAGES/heart.svg">     <img src="IMAGES/heart.svg">     <img src="IMAGES/heart.svg">     <img src="IMAGES/heart.svg">'
            }
            else if (fullLife == 3) {
                heart.innerHTML = '<img src="IMAGES/heart.svg">     <img src="IMAGES/heart.svg">     <img src="IMAGES/heart.svg">'
            }
            else if (fullLife == 2) {
                heart.innerHTML = '<img src="IMAGES/heart.svg">     <img src="IMAGES/heart.svg">'
            }
            else if (fullLife == 1) {
                heart.innerHTML = '<img src="IMAGES/heart.svg">'
            }
            else {
                heart.innerHTML = ""
                gameOver();
            }
        }

        function gameOver() {
            clearInterval(balloonMotion);
            myBalloon.remove();
            Swal.fire({
                title: 'Game Over!',
                icon: 'error',
                cancelButtonColor: '#d33',
                confirmButtonText: '<a href="PlayPage.html" class="text-white" style="text-decoration-line:none;">Yes</a>',
                html: `You scored `+scoreCount+`<br><br><a href="index.html" style="color:red;text-decoration-line:none;">No</a>`
            })
        }
