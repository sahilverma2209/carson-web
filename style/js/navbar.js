var x= $("#1").offset().top;

        var targetOffset1 = $("#1").offset().top;
        var targetOffset2 = $("#2").offset().top;
        var targetOffset3 = $("#3").offset().top;
        var targetOffset4 = $("#4").offset().top;
        var targetOffset5 = $("#5").offset().top;

        //console.log(targetOffset1);
        //	console.log(targetOffset2);
        //	console.log(targetOffset3);
        //	console.log(targetOffset4);

        $('#home').addClass('highlight');


        $(document).scroll(function() {

            //console.log($(this).scrollTop());
            //console.log('\n');

            //$('.p1').css("opacity","$(this).scrollTop()-726");
            if( $(this).scrollTop() > 200 )
            {
                //$('#home').css('color','#EF5D60');

                //$('#home').css('transition','color 1s');
            }
            else
            {

                
            }

            if( $(this).scrollTop() < targetOffset2 )
            {

                //alert('home');
                $('#about').removeClass('highlight');
                $('#contact').removeClass('highlight');
                $('#services').removeClass('highlight');

                $('#home').addClass('highlight');

                //console.log("t1 : "+targetOffset1);
                //console.log("t2 : "+targetOffset2);
                //console.log("t3 : "+targetOffset3);
                //console.log("t4 : "+targetOffset4);
            }
            else if(  $(this).scrollTop()>=targetOffset2 && $(this).scrollTop()<targetOffset4) {
                
                //alert('about');
                $('#home').removeClass('highlight');
                $('#contact').removeClass('highlight');
                $('#services').removeClass('highlight');
                
                $('#about').addClass('highlight');

                
            } 
            else if( $(this).scrollTop() >= targetOffset4  && $(this).scrollTop()<targetOffset5 )
            {

                //alert('services');
                $('#home').removeClass('highlight');
                $('#contact').removeClass('highlight');
                $('#about').removeClass('highlight');
                
                $('#services').addClass('highlight');

            }
            else if( $(this).scrollTop() >= targetOffset5  )
            {
                //alert('contact');
                $('#home').removeClass('highlight');
                $('#services').removeClass('highlight');
                $('#about').removeClass('highlight');

                $('#contact').addClass('highlight');

                
            }
           
        });