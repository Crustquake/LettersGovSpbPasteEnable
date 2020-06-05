var messageForm = document.getElementById('id_message');
messageForm.addEventListener('input', function(event){event.stopPropagation();});
messageForm.addEventListener('change', function(event){event.stopPropagation();});
messageForm.addEventListener('keydown', function(event){event.stopPropagation();});