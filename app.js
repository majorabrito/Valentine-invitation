
      
        function moveButton() {
            
            var x = Math.random() * (window.innerWidth - 120);
            var y = Math.random() * (window.innerHeight - 80);
            
            var btn = document.getElementById('no_btn');
            btn.style.left = x + 'px';
            btn.style.top = y + 'px';
        }

        
        function clickedYes() {
            document.getElementById('start_screen').style.display = 'none';
            
           
            document.getElementById('blue_screen_error').style.display = 'flex';


            setTimeout(showLove, 5000);
        }

        function showLove() {
            document.getElementById('blue_screen_error').style.display = 'none';
            document.getElementById('final_message').style.display = 'flex';
        }
    
