alert('Welcome To My PortFolio')

function initMap() {
            var center = { lat: 11.0820, lng: 8.6753 };
            var map = new google.maps.Map(document.getElementById('map'), {
                zoom: 6,
                center: center
            });

           
            var marker = new google.maps.marker.AdvancedMarkerElement({
                position: center,
                map: map,
                title: 'Nigeria'
            });
        }
var slideIndex = 0;
        var slides = document.querySelectorAll('.gallery img');
        var slideshowInterval;

        function showSlides() {
            for (var i = 0; i < slides.length; i++) {
                slides[i].style.display = "none";
            }
            slideIndex++;
            if (slideIndex > slides.length) {slideIndex = 1}
            slides[slideIndex - 1].style.display = "block";
        }

        function startSlideshow() {
            slideshowInterval = setInterval(showSlides, 2000);
        }

        function stopSlideshow() {
            clearInterval(slideshowInterval);
        }        
