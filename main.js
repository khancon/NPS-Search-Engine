$(document).ready(() => {
    $('.advanced-button').on('click',function(){
        $('.adv-search-menu').toggle();
    });

    var trial_url = "https://developer.nps.gov/api/v1/alerts?stateCode=VA&q=bear&api_key=K4J2f6fUyxUUO5h026orNDFI2zLRX0YOLsxwzrPY";

    var q = '';
    var parkCode = '';
    var stateCode = '';
    var base_url = "https://developer.nps.gov/api/v1/";
    var alerts = 'alerts?'; 
    var articles = 'articles?';
    var campgrounds = 'campgrounds?';
    var events = 'events?';
    var lessonplans = 'lessonplans?';
    var people = 'people?';
    var parks = 'parks?';
    var newsreleases = 'newsreleases?';
    var places = 'places?';
    var visitor_center = 'visitorcenters?';

    
    var app_id = 'api_key=K4J2f6fUyxUUO5h026orNDFI2zLRX0YOLsxwzrPY';
    $('.top-search-button').on('click',() => {
        q = $('.search-input').val();
        //default content upon basic search is alerts
        var alerts_url = base_url + alerts + 'q=' + q + '&' + app_id;
        $.getJSON(alerts_url, function(dat){
            var items = '';
            var limit = dat.total < 50 ? dat.total : 50;
            if(limit < 1){
                items += '<p> No Alerts Results </p>';
            }
            //items += '<p> Showing <b>' + limit + '</b> of <b>' + dat.total + '</b> alerts results.'

            for(var i = 0; i < limit; i++){
                //items += '<br>';
                if(dat.data[i].url !== ""){
                    items += '<h3>';
                    items += '<a href=\"' + dat.data[i].url + "\" target=\"_blank\">";
                    items += dat.data[i].title;
                    items += '</a>'
                    items += '</h3>';
                } else {
                    items += '<h3>' +dat.data[i].title+ '</h3>';
                }
                items += '<p>'+dat.data[i].description + '</p>';
                items += '<p> Category: '+dat.data[i].category + '</p>';
                items += '<p> Park Code: '+dat.data[i].parkCode + '</p>';
                items += '<hr>';
            }
            $('.general-content-container').empty();
            $('.general-content-container').append(items);
        });

        //Alerts Content with .alerts-button
        $('.alerts-button').on('click',() => {
            q = $('.search-input').val();
            //default content upon basic search is alerts
            var alerts_url = base_url + alerts + 'q=' + q + '&' + app_id;
            $.getJSON(alerts_url, function(dat){
                var items = '';
                var limit = dat.total < 50 ? dat.total : 50;
                if(limit < 1){
                    items += '<p> No Alerts Results </p>';
                }
                //items += '<p> Showing <b>' + limit + '</b> of <b>' + dat.total + '</b> alerts results.'
                for(var i = 0; i < limit; i++){
                    //items += '<br>';
                    if(dat.data[i].url !== ""){
                        items += '<h3>';
                        items += '<a href=\"' + dat.data[i].url + "\" target=\"_blank\">";
                        items += dat.data[i].title;
                        items += '</a>'
                        items += '</h3>';
                    } else {
                        items += '<h3>' +dat.data[i].title+ '</h3>';
                    }
                    items += '<p>'+dat.data[i].description + '</p>';
                    items += '<p> Category: '+dat.data[i].category + '</p>';
                    items += '<p> Park Code: '+dat.data[i].parkCode + '</p>';
                    items += '<hr>';
                }
                $('.general-content-container').empty();
                $('.general-content-container').append(items);
            });
        });
        //Articles Content with .articles-button
        $('.articles-button').on('click',() => {
            q = $('.search-input').val();
            //default content upon basic search is alerts
            var alerts_url = base_url + articles + 'q=' + q + '&' + app_id;
            $.getJSON(alerts_url, function(dat){
                var items = '';
                var limit = dat.total < 50 ? dat.total : 50;
                if(limit < 1){
                    items += '<p> No Articles Results </p>';
                }
                //items += '<p> Showing <b>' + limit + '</b> of <b>' + dat.total + '</b> articles results.'
                for(var i = 0; i < limit; i++){
                    //items += '<br>';
                    if(dat.data[i].url !== ""){
                        items += '<h3>';
                        items += '<a href=\"' + dat.data[i].url + "\" target=\"_blank\">";
                        items += dat.data[i].title;
                        items += '</a>'
                        items += '</h3>';
                    } else {
                        items += '<h3>' +dat.data[i].title+ '</h3>';
                    }
                    if(dat.data[i].listingimage.url !== ""){
                        items += '<img src=\"' + dat.data[i].listingimage.url + '\" height=\"240\" width=\"360\">';
                    }
                    items += '<p>'+dat.data[i].listingdescription + '</p>';
                    //items += '<p> Category: '+dat.data[i].category + '</p>';
                    //items += '<p> Park Code: '+dat.data[i].parkCode + '</p>';
                    items += '<hr>';
                }
                $('.general-content-container').empty();
                $('.general-content-container').append(items);
            });
        });
        //Campgrounds Content with .campgrounds-button
        $('.campgrounds-button').on('click',() => {
            q = $('.search-input').val();
            //default content upon basic search is alerts
            var alerts_url = base_url + campgrounds + 'q=' + q + '&' + app_id;
            $.getJSON(alerts_url, function(dat){
                var items = '';
                var limit = dat.total < 50 ? dat.total : 50;
                if(limit < 1){
                    items += '<p> No Campgrounds Results </p>';
                }
                //items += '<p> Showing <b>' + limit + '</b> of <b>' + dat.total + '</b> campgrounds results.'
                for(var i = 0; i < limit; i++){
                    //items += '<br>';
                    //Heading
                    if(dat.data[i].directionsUrl !== ""){
                        items += '<h2> <a href=\"' + dat.data[i].directionsUrl + '\" target=\"_blank\">' + dat.data[i].name + '</a></h2>';
                    } else {
                        items += '<h2>' + dat.data[i].name + '</h2>';
                    }

                    items += '<p> DESCRIPTION:  '+dat.data[i].description + '</p>';
                    if(dat.data[i].directionsoverview !== ""){
                        items += '<p> DIRECTIONS OVERVIEW:  ' + dat.data[i].directionsoverview;
                    } else {
                        items += '<p> DIRECTIONS OVERVIEW:  n/a </p>';
                    }
                    if(dat.data[i].directionsUrl !== ""){
                        items += ' For more direction information, visit the following <a href=\"' + dat.data[i].directionsUrl + '\" target=\"_blank\">link</a>. </p>';
                    } 

                    if(dat.data[i].latLong !== ""){
                        var str = dat.data[i].latLong;
                        var res = str.match(/[\-0-9\.]+/g);
                        /*var mapquest_base_address = "https://www.mapquestapi.com/geocoding/v1/reverse?key=BG6lOwpqhdRpXECEtTRurrUHz59F7Vr8&location=";
                        var mapquest_url = mapquest_base_address + res[0] + "," + res[1];
                        items += '<p> LOCATION/ADDRESS: <a href=\"' +  mapquest_url + '\" target=\"_blank\">' + mapquest_url + '</a>'+' </p>';
                        items += '<p> NEW LOCATION: ' + line1(mapquest_url) + '</p>';*/
                        items += '<p> LOCATION COORDINATES: ' + res[0] + "," + res[1] + '</p>';
                    } else {
                        items += '<p> LOCATION COORDINATES:  n/a </p>';
                    }

                    if(dat.data[i].regulationsoverview !== ""){
                        items += '<p> REGULATIONS OVERVIEW:  ' + dat.data[i].regulationsoverview;
                    } else {
                        items += '<p> REGULATIONS OVERVIEW:  n/a </p>';
                    }
                    if(dat.data[i].regulationsurl !== ""){
                        items += ' For more regulation information, visit the following <a href=\"' + dat.data[i].regulationsurl + '\" target=\"_blank\">link</a>. </p>';
                    } 

                    if(dat.data[i].weatheroverview !== ""){
                        items += '<p> WEATHER OVERVIEW:  ' + dat.data[i].weatheroverview+ '</p>'; 
                    } else {
                        items += '<p> WEATHER OVERVIEW:  n/a </p>';
                    }
                    items += '<p> Park Code: ' + dat.data[i].parkCode + '</p>';

                    /*
                    items += '<p> CAMPSITE INFORMATION: </p>';
                    items += '<p style=\"margin-left: 2em;\"> Total no. of campsites: ' + dat.data[i].campsites.totalsites + '</p>';
                    items += '<p style=\"margin-left: 2em;\"> No. of group campsites: ' + dat.data[i].campsites.group + '</p>';
                    items += '<p style=\"margin-left: 2em;\"> No. of campsites with horses: ' + dat.data[i].campsites.horse + '</p>';
                    items += '<p style=\"margin-left: 2em;\"> No. of tent only campsites: ' + dat.data[i].campsites.tentonly + '</p>';
                    items += '<p style=\"margin-left: 2em;\"> No. of campsites with electrical hookups: ' + dat.data[i].campsites.electricalhookups + '</p>';
                    items += '<p style=\"margin-left: 2em;\"> No. of RV only campsites: ' + dat.data[i].campsites.rvonly + '</p>';
                    items += '<p style=\"margin-left: 2em;\"> Walk / Boat to: ' + dat.data[i].campsites.walkboatto + '</p>';

                    items += '<p> ACCESSIBILITY: </p>';
                    items += '<p style=\"margin-left: 2em;\"> Wheelchair Access: ' + dat.data[i].accessibility.wheelchairaccess + '</p>';
                    items += '<p style=\"margin-left: 2em;\"> Internet info: ' + dat.data[i].accessibility.internetinfo + '</p>';
                    items += '<p style=\"margin-left: 2em;\"> RV allowed: ' + dat.data[i].accessibility.rvallowed + '</p>';
                    items += '<p style=\"margin-left: 2em;\"> Cell phone info: ' + dat.data[i].accessibility.cellphoneinfo + '</p>';
                    items += '<p style=\"margin-left: 2em;\"> Firestove policy: ' + dat.data[i].accessibility.firestovepolicy + '</p>';
                    items += '<p style=\"margin-left: 2em;\"> RV Info: ' + dat.data[i].accessibility.rvinfo + '</p>';
                    items += '<p style=\"margin-left: 2em;\"> RV Max Length: ' + dat.data[i].accessibility.rvmaxlength + '</p>';
                    items += '<p style=\"margin-left: 2em;\"> Trailer Max Length: ' + dat.data[i].accessibility.trailermaxlength + '</p>';
                    items += '<p style=\"margin-left: 2em;\"> ADA Info: ' + dat.data[i].accessibility.adainfo + '</p>';
                    items += '<p style=\"margin-left: 2em;\"> Access Roads: ' + dat.data[i].accessibility.accessroads[0] + '</p>';
                    items += '<p style=\"margin-left: 2em;\"> Trailer Allowed: ' + dat.data[i].accessibility.trailerallowed + '</p>';
                    items += '<p style=\"margin-left: 2em;\"> RV Info: ' + dat.data[i].accessibility.classifications[0] + '</p>';

                    items += '<p> AMENITIES: </p>';
                    items += '<p style=\"margin-left: 2em;\" Trash Recycling Collection> : ' + dat.data[i].accessibility.trashrecyclingcollection + '</p>';
                    items += '<p style=\"margin-left: 2em;\" Toilets> : ' + dat.data[i].accessibility.toilets[0] + '</p>';
                    items += '<p style=\"margin-left: 2em;\" Internet Connectivity> : ' + dat.data[i].accessibility.internetconnectivity[0] + '</p>';
                    items += '<p style=\"margin-left: 2em;\" Showers> : ' + dat.data[i].accessibility.showers[0] + '</p>';
                    items += '<p style=\"margin-left: 2em;\" Cell Phone Reception> : ' + dat.data[i].accessibility.cellphonereception + '</p>';
                    items += '<p style=\"margin-left: 2em;\" Laundry> : ' + dat.data[i].accessibility.laundry + '</p>';
                    items += '<p style=\"margin-left: 2em;\" Amphitheater> : ' + dat.data[i].accessibility.amphitheater + '</p>';
                    items += '<p style=\"margin-left: 2em;\" Dump Station> : ' + dat.data[i].accessibility.dumpstation + '</p>';
                    items += '<p style=\"margin-left: 2em;\" Camp Store> : ' + dat.data[i].accessibility.campstore + '</p>';
                    items += '<p style=\"margin-left: 2em;\" Staff for Volunteer Host on Site> : ' + dat.data[i].accessibility.stafforvolunteerhostonsite + '</p>';                    
                    items += '<p style=\"margin-left: 2em;\" Potable Water> : ' + dat.data[i].accessibility.potablewater[0] + '</p>';
                    items += '<p style=\"margin-left: 2em;\" Ice Available for Sale> : ' + dat.data[i].accessibility.iceavailableforsale + '</p>';
                    items += '<p style=\"margin-left: 2em;\" Firewood for Sale> : ' + dat.data[i].accessibility.firewoodforsale + '</p>';
                    items += '<p style=\"margin-left: 2em;\" Amphitheater> : ' + dat.data[i].accessibility.amphitheater + '</p>';
                    items += '<p style=\"margin-left: 2em;\" Food Storage Lockers> : ' + dat.data[i].accessibility.foodstoragelockers + '</p>';
                        */
                    //items += '<p> Category: '+dat.data[i].category + '</p>';
                    //items += '<p> Park Code: '+dat.data[i].parkCode + '</p>';
                    items += '<hr>';
                }
                function line1(url){
                    $.getJSON(url, function(data){
                        return data;
                    });
                }
                $('.general-content-container').empty();
                $('.general-content-container').append(items);
            });
        });
        //Events Content with .events-button
        $('.events-button').on('click',() => {
            q = $('.search-input').val();
            //default content upon basic search is alerts
            var alerts_url = base_url + events + 'q=' + q + '&' + app_id;
            //alerts_url = alerts_url.replace(" ", "%20");
            $.getJSON(alerts_url, function(dat){
                var items = '';
                var limit = dat.total < 10 ? dat.total : 10;
                if(limit < 1){
                    items += '<p> No Events Results </p>';
                }
                //items += '<p> Showing <b>' + limit + '</b> of <b>' + dat.total + '</b> events results.';
                //items += '<p> <a href=\"' + alerts_url + '\" target=\"_blank\">' +alerts_url+ '</a></p>';
                for(var i = 0; i < limit; i++){
                    //Title and Info Url
                    if(dat.data[i].infourl !== ""){
                        items += '<h2> <a href=\'' + dat.data[i].infourl + '\' target=\'blank\'>' + dat.data[i].title + '</a></h2>';
                    } else {
                        items += '<h2>' + dat.data[i].title + '</h2>';   
                    }
                    items += '<p> <i>' + dat.data[i].parkfullname + '</i></p>';
                    items += '<p>' + dat.data[i].description + '</p>';                
                    items += '<p> LOCATION:  ' + dat.data[i].location + ' </p>'; 
                    items += '<p> LOCATION COORDINATES:  ' + dat.data[i].latitude + ', ' + dat.data[i].longitude + ' </p>'; 
                    items += '<p> DATES: ';
                    for(var j = 0; j < dat.data[i].dates.length; j++){
                        items += dat.data[i].dates[j] + '. ';
                    }              
                    items += '<p> TIME: ' + dat.data[i].times[0].timestart + ' - ' + dat.data[i].times[0].timeend + '</p>';  
                    items += '</p>';
                    items += '<hr>';
                }
                $('.general-content-container').empty();
                $('.general-content-container').append(items);
            });
        });
        //Lessonplans Content with .lessonplans-button
        $('.lessonplans-button').on('click',() => {
            q = $('.search-input').val();
            //default content upon basic search is alerts
            var alerts_url = base_url + lessonplans + 'q=' + q + '&' + app_id;
            $.getJSON(encodeURI(alerts_url), function(dat){
                var items = '';
                var limit = dat.total < 50 ? dat.total : 50;
                if(limit < 1){
                    items += '<p> No Lessonplans Results </p>';
                }
                //items += '<p> Showing <b>' + limit + '</b> of <b>' + dat.total + '</b> lessonplans results.'
                for(var i = 0; i < limit; i++){
                    if(dat.data[i].url !== ""){
                        items += '<h3>';
                        items += '<a href=\"' + dat.data[i].url + "\" target=\"_blank\">";
                        items += dat.data[i].title;
                        items += '</a>'
                        items += '</h3>';
                    } else {
                        items += '<h3>' +dat.data[i].title+ '</h3>';
                    }  
                    items += '<p> <i> ' + dat.data[i].gradelevel + '</i> </p>';   
 
                    items += '<p> <i> OBJECTIVES: </i>' + dat.data[i].questionobjective + '</p>';
                    items += '<p> <i> ' + 'COMMON CORE: ' + '</i>' + '</p>';   
                    items += '<p> <i> ' + 'State Standards: ' + '</i>' + dat.data[i].commoncore.statestandards + '</p>';   
                    items += '<p> <i> ' + 'Math Standards: ' + '</i>';
                    for(var j = 0; j < dat.data[i].commoncore.mathstandards.length; j++){
                        items += dat.data[i].commoncore.mathstandards[j] + '. ';   
                    }
                    items += '</p>';
                    items += '<p> <i> ' + 'Additional Standards: ' + '</i>' + dat.data[i].commoncore.additionalstandards + '</p>';   
                    items += '<p> <i> ' + 'ELA Standards: ' + '</i>';
                    for(var j = 0; j < dat.data[i].commoncore.elastandards.length; j++){
                        items += dat.data[i].commoncore.elastandards[j] + '. ';   
                    }
                    items += '</p>';

                    items += '<p> <i> ' + 'PARKS: ' + '</i>';
                    for(var j = 0; j < dat.data[i].parks.length; j++){
                        items += dat.data[i].parks[j] + '. ';   
                    }
                    items += '</p>';
                    items += '<hr>';
                }
                $('.general-content-container').empty();
                $('.general-content-container').append(items);
            });
        });
        //Newsreleases Content with .newsreleases-button
        $('.newsreleases-button').on('click',() => {
            q = $('.search-input').val();
            //default content upon basic search is alerts
            var alerts_url = base_url + newsreleases + 'q=' + q + '&' + app_id;
            alerts_url = alerts_url.replace(" ", "%20");
            $.getJSON(alerts_url, function(dat){
                var items = '';
                var limit = dat.total < 50 ? dat.total : 50;
                if(limit < 1){
                    items += '<p> No Newsreleases Results </p>';
                }
                //items += '<p> Showing <b>' + limit + '</b> of <b>' + dat.total + '</b> newsreleases results.'
                for(var i = 0; i < limit; i++){
                    if(dat.data[i].url !== ""){
                        items += '<h3>';
                        items += '<a href=\"' + dat.data[i].url + "\" target=\"_blank\">";
                        items += dat.data[i].title;
                        items += '</a>'
                        items += '</h3>';
                    } else {
                        items += '<h3>' +dat.data[i].title+ '</h3>';
                    }   
                    if(dat.data[i].image.url !== ""){
                        items += '<img src=\"' + dat.data[i].image.url + '\" height=\"240\" width=\"360\">';
                    }
                    items += '<p> <i>' + dat.data[i].releasedate + '</i> </p>';
                    items += '<p> ' + dat.data[i].abstract + '</p>';                 
                    items += '<hr>';
                }
                $('.general-content-container').empty();
                $('.general-content-container').append(items);
            });
        });
        //Parks Content with .parks-button
        $('.parks-button').on('click',() => {
            q = $('.search-input').val();
            //default content upon basic search is alerts
            var alerts_url = base_url + parks + 'q=' + q + '&' + app_id;
            $.getJSON(alerts_url, function(dat){
                var items = '';
                var limit = dat.total < 50 ? dat.total : 50;
                if(limit < 1){
                    items += '<p> No Parks Results </p>';
                }
                //items += '<p> Showing <b>' + limit + '</b> of <b>' + dat.total + '</b> parks results.'
                for(var i = 0; i < limit; i++){
                    if(dat.data[i].url !== ""){
                        items += '<h3>';
                        items += '<a href=\"' + dat.data[i].url + "\" target=\"_blank\">";
                        items += dat.data[i].fullName;
                        items += '</a>'
                        items += '</h3>';
                    } else {
                        items += '<h3>' +dat.data[i].fullName+ '</h3>';
                    }   
                    items += '<p> <i>' + dat.data[i].designation + '</i> </p>';
                    items += '<p> <i>' + dat.data[i].states + '</i> </p>';
                    items += '<p> ' + dat.data[i].description + '</p>';   
                    items += '<p> <i> Weather Info: </i> ' + dat.data[i].weatherInfo + '</p>';                 
                    if(dat.data[i].directionsoverview !== ""){
                        items += '<p> <i> Directions:  </i>' + dat.data[i].directionsInfo;
                    } else {
                        items += '<p> <i> Directions:  </i>:  n/a </p>';
                    }
                    if(dat.data[i].directionsUrl !== ""){
                        items += ' For more direction information, visit the following <a href=\"' + dat.data[i].directionsUrl + '\" target=\"_blank\">link</a>. </p>';
                    }
                    if(dat.data[i].latLong !== ""){
                        var str = dat.data[i].latLong;
                        var res = str.match(/[\-0-9\.]+/g);
                        /*var mapquest_base_address = "https://www.mapquestapi.com/geocoding/v1/reverse?key=BG6lOwpqhdRpXECEtTRurrUHz59F7Vr8&location=";
                        var mapquest_url = mapquest_base_address + res[0] + "," + res[1];
                        items += '<p> LOCATION/ADDRESS: <a href=\"' +  mapquest_url + '\" target=\"_blank\">' + mapquest_url + '</a>'+' </p>';
                        items += '<p> NEW LOCATION: ' + line1(mapquest_url) + '</p>';*/
                        items += '<p> <i> Location Coordinates:  </i>: ' + res[0] + "," + res[1] + '</p>';
                    } else {
                        items += '<p> <i> Location Coordinates:  </i>  n/a </p>';
                    } 
                    items += '<hr>';

                }
                $('.general-content-container').empty();
                $('.general-content-container').append(items);
            });
        });
        //People Content with .people-button
        $('.people-button').on('click',() => {
            q = $('.search-input').val();
            //default content upon basic search is alerts
            var alerts_url = base_url + people + 'q=' + q + '&' + app_id;
            $.getJSON(alerts_url, function(dat){
                var items = '';
                var limit = dat.total < 50 ? dat.total : 50;
                if(limit < 1){
                    items += '<p> No People Results </p>';
                }
                //items += '<p> Showing <b>' + limit + '</b> of <b>' + dat.total + '</b> people results.'
                for(var i = 0; i < limit; i++){
                    if(dat.data[i].url !== ""){
                        items += '<h3>';
                        items += '<a href=\"' + dat.data[i].url + "\" target=\"_blank\">";
                        items += dat.data[i].title;
                        items += '</a>'
                        items += '</h3>';
                    } else {
                        items += '<h3>' +dat.data[i].title+ '</h3>';
                    }   
                    if(dat.data[i].listingimage.url !== ""){
                        items += '<img src=\"' + dat.data[i].listingimage.url + '\" height=\"180\" width=\"270\">';
                    }
                    items += '<p>' + dat.data[i].listingdescription + '</p>';
                    items += '<hr>';

                }
                $('.general-content-container').empty();
                $('.general-content-container').append(items);
            });
        });
        //Places Content with .places-button
        $('.places-button').on('click',() => {
            q = $('.search-input').val();
            //default content upon basic search is alerts
            var alerts_url = base_url + places + 'q=' + q + '&' + app_id;
            $.getJSON(alerts_url, function(dat){
                var items = '';
                var limit = dat.total < 50 ? dat.total : 50;
                if(limit < 1){
                    items += '<p> No Places Results </p>';
                }
                //items += '<p> Showing <b>' + limit + '</b> of <b>' + dat.total + '</b> places results.'
                for(var i = 0; i < limit; i++){
                    if(dat.data[i].url !== ""){
                        items += '<h3>';
                        items += '<a href=\"' + dat.data[i].url + "\" target=\"_blank\">";
                        items += dat.data[i].title;
                        items += '</a>'
                        items += '</h3>';
                    } else {
                        items += '<h3>' +dat.data[i].title+ '</h3>';
                    }   
                    if(dat.data[i].listingimage.url !== ""){
                        items += '<img src=\"' + dat.data[i].listingimage.url + '\" height=\"240\" width=\"360\">';
                    }
                    items += '<p>' + dat.data[i].listingdescription + '</p>';
                    if(dat.data[i].latLong !== ""){
                        var str = dat.data[i].latLong;
                        var res = str.match(/[\-0-9\.]+/g);
                        /*var mapquest_base_address = "https://www.mapquestapi.com/geocoding/v1/reverse?key=BG6lOwpqhdRpXECEtTRurrUHz59F7Vr8&location=";
                        var mapquest_url = mapquest_base_address + res[0] + "," + res[1];
                        items += '<p> LOCATION/ADDRESS: <a href=\"' +  mapquest_url + '\" target=\"_blank\">' + mapquest_url + '</a>'+' </p>';
                        items += '<p> NEW LOCATION: ' + line1(mapquest_url) + '</p>';*/
                        items += '<p> <i> Location Coordinates:  </i> ' + res[0] + "," + res[1] + '</p>';
                    } else {
                        items += '<p> <i> Location Coordinates:  </i>  n/a </p>';
                    }
                    items += '<hr>';

                }
                $('.general-content-container').empty();
                $('.general-content-container').append(items);
            });
        });

        //Visitor Center Content with .places-button
        $('.visitor-center-button').on('click',() => {
            q = $('.search-input').val();
            //default content upon basic search is alerts
            var alerts_url = base_url + visitor_center + 'q=' + q + '&' + app_id;
            $.getJSON(alerts_url, function(dat){
                var items = '';
                var limit = dat.total < 50 ? dat.total : 50;
                if(limit < 1){
                    items += '<p> No Visitor Centers Results </p>';
                }
                //items += '<p> Showing <b>' + limit + '</b> of <b>' + dat.total + '</b> visitor center results.'
                for(var i = 0; i < limit; i++){
                    if(dat.data[i].url !== ""){
                        items += '<h3>';
                        items += '<a href=\"' + dat.data[i].url + "\" target=\"_blank\">";
                        items += dat.data[i].name;
                        items += '</a>'
                        items += '</h3>';
                    } else {
                        items += '<h3>' +dat.data[i].name+ '</h3>';
                    }   
                    items += '<p>' + dat.data[i].description + '</p>';
                    items += '<p> <i> Directions: </i>' + dat.data[i].directionsInfo + '</p>';

                    if(dat.data[i].latLong !== ""){
                        var str = dat.data[i].latLong;
                        var res = str.match(/[\-0-9\.]+/g);
                        /*var mapquest_base_address = "https://www.mapquestapi.com/geocoding/v1/reverse?key=BG6lOwpqhdRpXECEtTRurrUHz59F7Vr8&location=";
                        var mapquest_url = mapquest_base_address + res[0] + "," + res[1];
                        items += '<p> LOCATION/ADDRESS: <a href=\"' +  mapquest_url + '\" target=\"_blank\">' + mapquest_url + '</a>'+' </p>';
                        items += '<p> NEW LOCATION: ' + line1(mapquest_url) + '</p>';*/
                        items += '<p> <i> Location Coordinates:  </i> ' + res[0] + "," + res[1] + '</p>';
                    } else {
                        items += '<p> <i> Location Coordinates:  </i>  n/a </p>';
                    }
                    items += '<hr>';

                }
                $('.general-content-container').empty();
                $('.general-content-container').append(items);
            });
        });
    });























    
    $('.advanced-search-button').on('click',() => {
        q = $('.search-input').val();
        $('.alerts-content').text(q);
        parkCode = $('.parkCode-input').val();
        $('.alerts-content').text(parkCode);
        stateCode = $('.state-dropdown').val();
        $('.alerts-content').text(stateCode);

        var alerts_total = 0;

        //default content upon basic search is alerts
        var alerts_url = base_url + alerts + 'q=' + q + '&parkCode=' + parkCode + '&stateCode=' + stateCode + '&' + app_id;
        $.getJSON(alerts_url, function(dat){
            var items = '';
            alerts_total = dat.total;
            //items += '<p>' + alerts_url + '</p>';
            var limit = dat.total < 50 ? dat.total : 50;
            if(limit < 1){
                items += '<p> No Alerts Results </p>';
            }
            //items += '<p> Showing <b>' + limit + '</b> of <b>' + dat.total + '</b> alerts results.'

            //if(limit <= 50){
            for(var i = 0; i < limit; i++){
                //items += '<br>';
                if(dat.data[i].url !== ""){
                    items += '<h3>';
                    items += '<a href=\"' + dat.data[i].url + "\" target=\"_blank\">";
                    items += dat.data[i].title;
                    items += '</a>'
                    items += '</h3>';
                } else {
                    items += '<h3>' +dat.data[i].title+ '</h3>';
                }
                items += '<p>'+dat.data[i].description + '</p>';
                items += '<p> Category: '+dat.data[i].category + '</p>';
                items += '<p> Park Code: '+dat.data[i].parkCode + '</p>';
                items += '<hr>';
            }
            /*} else {
                for(var i = 0; i < 50; i++){
                    //items += '<br>';
                    if(dat.data[i].url !== ""){
                        items += '<h3>';
                        items += '<a href=\"' + dat.data[i].url + "\" target=\"_blank\">";
                        items += dat.data[i].title;
                        items += '</a>'
                        items += '</h3>';
                    } else {
                        items += '<h3>' +dat.data[i].title+ '</h3>';
                    }
                    items += '<p>'+dat.data[i].description + '</p>';
                    items += '<p> Category: '+dat.data[i].category + '</p>';
                    items += '<p> Park Code: '+dat.data[i].parkCode + '</p>';
                    items += '<hr>';
                }
                items += '<button class = \'alerts-load-all-button\'> Load More Results </button>';
            }*/
            $('.general-content-container').empty();
            $('.general-content-container').append(items);
        });

        //Alerts Content with .alerts-button
        $('.alerts-button').on('click',() => {
            q = $('.search-input').val();
            //default content upon basic search is alerts
            var alerts_url = base_url + alerts + 'q=' + q + '&parkCode=' + parkCode + '&stateCode=' + stateCode + '&' + app_id;
            $.getJSON(alerts_url, function(dat){
                var items = '';
                alerts_total = dat.total;
                var limit = dat.total < 50 ? dat.total : 50;
                if(limit < 1){
                    items += '<p> No Alerts Results </p>';
                }
                //items += '<p> Showing <b>' + limit + '</b> of <b>' + dat.total + '</b> alerts results.'
                //if(limit < 50){
                    for(var i = 0; i < limit; i++){
                        //items += '<br>';
                        if(dat.data[i].url !== ""){
                            items += '<h3>';
                            items += '<a href=\"' + dat.data[i].url + "\" target=\"_blank\">";
                            items += dat.data[i].title;
                            items += '</a>'
                            items += '</h3>';
                        } else {
                            items += '<h3>' +dat.data[i].title+ '</h3>';
                        }
                        items += '<p>'+dat.data[i].description + '</p>';
                        items += '<p> Category: '+dat.data[i].category + '</p>';
                        items += '<p> Park Code: '+dat.data[i].parkCode + '</p>';
                        items += '<hr>';
                    }
                /*} else {
                    for(var i = 0; i < 50; i++){
                        //items += '<br>';
                        if(dat.data[i].url !== ""){
                            items += '<h3>';
                            items += '<a href=\"' + dat.data[i].url + "\" target=\"_blank\">";
                            items += dat.data[i].title;
                            items += '</a>'
                            items += '</h3>';
                        } else {
                            items += '<h3>' +dat.data[i].title+ '</h3>';
                        }
                        items += '<p>'+dat.data[i].description + '</p>';
                        items += '<p> Category: '+dat.data[i].category + '</p>';
                        items += '<p> Park Code: '+dat.data[i].parkCode + '</p>';
                        items += '<hr>';
                    }
                    items += '<button class = \'alerts-load-all-button\'> Load More Results </button>';
                }*/
                $('.general-content-container').empty();
                $('.general-content-container').append(items);
            });
        });

        /*if($('.alerts-load-all-button').length){
            $('.alerts-load-all-button').on('click', () => {
                $('.alerts-load-all-button').hide();
                var items = '';
                q = $('.search-input').val();
                //default content upon basic search is alerts
                var limit = alerts_total;
                var alerts_url = base_url + alerts + 'q=' + q + '&limit=' + limit + '&parkCode=' + parkCode + '&stateCode=' + stateCode + '&' + app_id;
                
                $.getJSON(alerts_url, function(dat){
                    for(var i = 51; i < limit; i++){
                        //items += '<br>';
                        if(dat.data[i].url !== ""){
                            items += '<h3>';
                            items += '<a href=\"' + dat.data[i].url + "\" target=\"_blank\">";
                            items += dat.data[i].title;
                            items += '</a>'
                            items += '</h3>';
                        } else {
                            items += '<h3>' +dat.data[i].title+ '</h3>';
                        }
                        items += '<p>'+dat.data[i].description + '</p>';
                        items += '<p> Category: '+dat.data[i].category + '</p>';
                        items += '<p> Park Code: '+dat.data[i].parkCode + '</p>';
                        items += '<hr>';
                    }
                    $('.general-content-container').append(items);
                });
            });
        }*/

        var articles_total = 0;
        //Articles Content with .articles-button
        $('.articles-button').on('click',() => {
            q = $('.search-input').val();
            //default content upon basic search is alerts
            var alerts_url = base_url + articles + 'q=' + q + '&parkCode=' + parkCode + '&stateCode=' + stateCode + '&' + app_id;
            $.getJSON(alerts_url, function(dat){
                articles_total = dat.total;
                var limit = dat.total < 50 ? dat.total : 50;
                //if(limit < 50){
                var items = '';
                if(limit < 1){
                    items += '<p> No Articles Results </p>';
                }
                //items += '<p> Showing <b>' + limit + '</b> of <b>' + dat.total + '</b> articles results.';
                for(var i = 0; i < limit; i++){
                    //items += '<br>';
                    if(dat.data[i].url !== ""){
                        items += '<h3>';
                        items += '<a href=\"' + dat.data[i].url + "\" target=\"_blank\">";
                        items += dat.data[i].title;
                        items += '</a>'
                        items += '</h3>';
                    } else {
                        items += '<h3>' +dat.data[i].title+ '</h3>';
                    }
                    if(dat.data[i].listingimage.url !== ""){
                        items += '<img src=\"' + dat.data[i].listingimage.url + '\" height=\"240\" width=\"360\">';
                    }
                    items += '<p>'+dat.data[i].listingdescription + '</p>';
                    //items += '<p> Category: '+dat.data[i].category + '</p>';
                    //items += '<p> Park Code: '+dat.data[i].parkCode + '</p>';
                    items += '<hr>';
                    }
                //}
                
                /*else {
                    for(var i = 0; i < limit; i++){
                        //items += '<br>';
                        if(dat.data[i].url !== ""){
                            items += '<h3>';
                            items += '<a href=\"' + dat.data[i].url + "\" target=\"_blank\">";
                            items += dat.data[i].title;
                            items += '</a>'
                            items += '</h3>';
                        } else {
                            items += '<h3>' +dat.data[i].title+ '</h3>';
                        }
                        items += '<p>'+dat.data[i].listingdescription + '</p>';
                        //items += '<p> Category: '+dat.data[i].category + '</p>';
                        //items += '<p> Park Code: '+dat.data[i].parkCode + '</p>';
                        items += '<hr>';
                    }
                    items += '<button class = \'articles-load-all-button\'> Load More Results </button>';
                }
                
                if($('.articles-load-all-button').length){
                    $('.articles-load-all-button').on('click', () => {
                        $('.articles-load-all-button').hide();
                        var items = '';
                        q = $('.search-input').val();
                        //default content upon basic search is alerts
                        var limit = articles_total;
                        var alerts_url = base_url + alerts + 'q=' + q + '&limit=' + limit + '&parkCode=' + parkCode + '&stateCode=' + stateCode + '&' + app_id;
                        
                        $.getJSON(alerts_url, function(dat){
                            for(var i = 50; i < limit; i++){
                                //items += '<br>';
                                if(dat.data[i].url !== ""){
                                    items += '<h3>';
                                    items += '<a href=\"' + dat.data[i].url + "\" target=\"_blank\">";
                                    items += dat.data[i].title;
                                    items += '</a>'
                                    items += '</h3>';
                                } else {
                                    items += '<h3>' +dat.data[i].title+ '</h3>';
                                }
                                items += '<p>'+dat.data[i].listingdescription + '</p>';
                                //items += '<p> Category: '+dat.data[i].category + '</p>';
                                //items += '<p> Park Code: '+dat.data[i].parkCode + '</p>';
                                items += '<hr>';
                            }
                            $('.general-content-container').append(items);
                        });
                    });
                }*/

                $('.general-content-container').empty();
                $('.general-content-container').append(items);
            });

            /*if(articles_total >= 50){
                limit = articles_total;
                alerts_url = base_url + alerts + 'q=' + q + '&limit=' + limit + '&parkCode=' + parkCode + '&stateCode=' + stateCode + '&' + app_id;
                items += '<p> Showing <b>' + limit + '</b> of <b>' + dat.total + '</b> articles results.';

                $.getJSON(alerts_url, function(dat){
                    for(var i = 0; i < limit; i++){
                        //items += '<br>';
                        if(dat.data[i].url !== ""){
                            items += '<h3>';
                            items += '<a href=\"' + dat.data[i].url + "\" target=\"_blank\">";
                            items += dat.data[i].title;
                            items += '</a>'
                            items += '</h3>';
                        } else {
                            items += '<h3>' +dat.data[i].title+ '</h3>';
                        }
                        items += '<p>'+dat.data[i].listingdescription + '</p>';
                        //items += '<p> Category: '+dat.data[i].category + '</p>';
                        //items += '<p> Park Code: '+dat.data[i].parkCode + '</p>';
                        items += '<hr>';
                    }
                });
            } */

        });

        

        //Campgrounds Content with .campgrounds-button
        $('.campgrounds-button').on('click',() => {
            q = $('.search-input').val();
            //default content upon basic search is alerts
            var alerts_url = base_url + campgrounds + 'q=' + q + '&parkCode=' + parkCode + '&stateCode=' + stateCode + '&' + app_id;
            $.getJSON(alerts_url, function(dat){
                var items = '';
                var limit = dat.total < 50 ? dat.total : 50;
                if(limit < 1){
                    items += '<p> No Campgrounds Results </p>';
                }
                //items += '<p> Showing <b>' + limit + '</b> of <b>' + dat.total + '</b> campgrounds results.'
                for(var i = 0; i < limit; i++){
                    //items += '<br>';
                    //Heading
                    if(dat.data[i].directionsUrl !== ""){
                        items += '<h2> <a href=\"' + dat.data[i].directionsUrl + '\" target=\"_blank\">' + dat.data[i].name + '</a></h2>';
                    } else {
                        items += '<h2>' + dat.data[i].name + '</h2>';
                    }

                    items += '<p> DESCRIPTION:  '+dat.data[i].description + '</p>';
                    if(dat.data[i].directionsoverview !== ""){
                        items += '<p> DIRECTIONS OVERVIEW:  ' + dat.data[i].directionsoverview;
                    } else {
                        items += '<p> DIRECTIONS OVERVIEW:  n/a </p>';
                    }
                    if(dat.data[i].directionsUrl !== ""){
                        items += ' For more direction information, visit the following <a href=\"' + dat.data[i].directionsUrl + '\" target=\"_blank\">link</a>. </p>';
                    } 

                    if(dat.data[i].latLong !== ""){
                        var str = dat.data[i].latLong;
                        var res = str.match(/[\-0-9\.]+/g);
                        /*var mapquest_base_address = "https://www.mapquestapi.com/geocoding/v1/reverse?key=BG6lOwpqhdRpXECEtTRurrUHz59F7Vr8&location=";
                        var mapquest_url = mapquest_base_address + res[0] + "," + res[1];
                        items += '<p> LOCATION/ADDRESS: <a href=\"' +  mapquest_url + '\" target=\"_blank\">' + mapquest_url + '</a>'+' </p>';
                        items += '<p> NEW LOCATION: ' + line1(mapquest_url) + '</p>';*/
                        items += '<p> LOCATION COORDINATES: ' + res[0] + "," + res[1] + '</p>';
                    } else {
                        items += '<p> LOCATION COORDINATES:  n/a </p>';
                    }

                    if(dat.data[i].regulationsoverview !== ""){
                        items += '<p> REGULATIONS OVERVIEW:  ' + dat.data[i].regulationsoverview;
                    } else {
                        items += '<p> REGULATIONS OVERVIEW:  n/a </p>';
                    }
                    if(dat.data[i].regulationsurl !== ""){
                        items += ' For more regulation information, visit the following <a href=\"' + dat.data[i].regulationsurl + '\" target=\"_blank\">link</a>. </p>';
                    } 

                    if(dat.data[i].weatheroverview !== ""){
                        items += '<p> WEATHER OVERVIEW:  ' + dat.data[i].weatheroverview+ '</p>'; 
                    } else {
                        items += '<p> WEATHER OVERVIEW:  n/a </p>';
                    }
                    items += '<p> Park Code: ' + dat.data[i].parkCode + '</p>';

                    /*
                    items += '<p> CAMPSITE INFORMATION: </p>';
                    items += '<p style=\"margin-left: 2em;\"> Total no. of campsites: ' + dat.data[i].campsites.totalsites + '</p>';
                    items += '<p style=\"margin-left: 2em;\"> No. of group campsites: ' + dat.data[i].campsites.group + '</p>';
                    items += '<p style=\"margin-left: 2em;\"> No. of campsites with horses: ' + dat.data[i].campsites.horse + '</p>';
                    items += '<p style=\"margin-left: 2em;\"> No. of tent only campsites: ' + dat.data[i].campsites.tentonly + '</p>';
                    items += '<p style=\"margin-left: 2em;\"> No. of campsites with electrical hookups: ' + dat.data[i].campsites.electricalhookups + '</p>';
                    items += '<p style=\"margin-left: 2em;\"> No. of RV only campsites: ' + dat.data[i].campsites.rvonly + '</p>';
                    items += '<p style=\"margin-left: 2em;\"> Walk / Boat to: ' + dat.data[i].campsites.walkboatto + '</p>';

                    items += '<p> ACCESSIBILITY: </p>';
                    items += '<p style=\"margin-left: 2em;\"> Wheelchair Access: ' + dat.data[i].accessibility.wheelchairaccess + '</p>';
                    items += '<p style=\"margin-left: 2em;\"> Internet info: ' + dat.data[i].accessibility.internetinfo + '</p>';
                    items += '<p style=\"margin-left: 2em;\"> RV allowed: ' + dat.data[i].accessibility.rvallowed + '</p>';
                    items += '<p style=\"margin-left: 2em;\"> Cell phone info: ' + dat.data[i].accessibility.cellphoneinfo + '</p>';
                    items += '<p style=\"margin-left: 2em;\"> Firestove policy: ' + dat.data[i].accessibility.firestovepolicy + '</p>';
                    items += '<p style=\"margin-left: 2em;\"> RV Info: ' + dat.data[i].accessibility.rvinfo + '</p>';
                    items += '<p style=\"margin-left: 2em;\"> RV Max Length: ' + dat.data[i].accessibility.rvmaxlength + '</p>';
                    items += '<p style=\"margin-left: 2em;\"> Trailer Max Length: ' + dat.data[i].accessibility.trailermaxlength + '</p>';
                    items += '<p style=\"margin-left: 2em;\"> ADA Info: ' + dat.data[i].accessibility.adainfo + '</p>';
                    items += '<p style=\"margin-left: 2em;\"> Access Roads: ' + dat.data[i].accessibility.accessroads[0] + '</p>';
                    items += '<p style=\"margin-left: 2em;\"> Trailer Allowed: ' + dat.data[i].accessibility.trailerallowed + '</p>';
                    items += '<p style=\"margin-left: 2em;\"> RV Info: ' + dat.data[i].accessibility.classifications[0] + '</p>';

                    items += '<p> AMENITIES: </p>';
                    items += '<p style=\"margin-left: 2em;\" Trash Recycling Collection> : ' + dat.data[i].accessibility.trashrecyclingcollection + '</p>';
                    items += '<p style=\"margin-left: 2em;\" Toilets> : ' + dat.data[i].accessibility.toilets[0] + '</p>';
                    items += '<p style=\"margin-left: 2em;\" Internet Connectivity> : ' + dat.data[i].accessibility.internetconnectivity[0] + '</p>';
                    items += '<p style=\"margin-left: 2em;\" Showers> : ' + dat.data[i].accessibility.showers[0] + '</p>';
                    items += '<p style=\"margin-left: 2em;\" Cell Phone Reception> : ' + dat.data[i].accessibility.cellphonereception + '</p>';
                    items += '<p style=\"margin-left: 2em;\" Laundry> : ' + dat.data[i].accessibility.laundry + '</p>';
                    items += '<p style=\"margin-left: 2em;\" Amphitheater> : ' + dat.data[i].accessibility.amphitheater + '</p>';
                    items += '<p style=\"margin-left: 2em;\" Dump Station> : ' + dat.data[i].accessibility.dumpstation + '</p>';
                    items += '<p style=\"margin-left: 2em;\" Camp Store> : ' + dat.data[i].accessibility.campstore + '</p>';
                    items += '<p style=\"margin-left: 2em;\" Staff for Volunteer Host on Site> : ' + dat.data[i].accessibility.stafforvolunteerhostonsite + '</p>';                    
                    items += '<p style=\"margin-left: 2em;\" Potable Water> : ' + dat.data[i].accessibility.potablewater[0] + '</p>';
                    items += '<p style=\"margin-left: 2em;\" Ice Available for Sale> : ' + dat.data[i].accessibility.iceavailableforsale + '</p>';
                    items += '<p style=\"margin-left: 2em;\" Firewood for Sale> : ' + dat.data[i].accessibility.firewoodforsale + '</p>';
                    items += '<p style=\"margin-left: 2em;\" Amphitheater> : ' + dat.data[i].accessibility.amphitheater + '</p>';
                    items += '<p style=\"margin-left: 2em;\" Food Storage Lockers> : ' + dat.data[i].accessibility.foodstoragelockers + '</p>';
                        */
                    //items += '<p> Category: '+dat.data[i].category + '</p>';
                    //items += '<p> Park Code: '+dat.data[i].parkCode + '</p>';
                    items += '<hr>';
                }
                function line1(url){
                    $.getJSON(url, function(data){
                        return data;
                    });
                }
                $('.general-content-container').empty();
                $('.general-content-container').append(items);
            });
        });
        //Events Content with .events-button
        $('.events-button').on('click',() => {
            q = $('.search-input').val();
            //default content upon basic search is alerts
            var alerts_url = base_url + events + 'q=' + q + '&parkCode=' + parkCode + '&stateCode=' + stateCode + '&' + app_id;
            //alerts_url = alerts_url.replace(" ", "%20");
            $.getJSON(alerts_url, function(dat){
                var items = '';
                var limit = dat.total < 10 ? dat.total : 10;
                if(limit < 1){
                    items += '<p> No Events Results </p>';
                }
                //items += '<p> Showing <b>' + limit + '</b> of <b>' + dat.total + '</b> events results.';
                //items += '<p> <a href=\"' + alerts_url + '\" target=\"_blank\">' +alerts_url+ '</a></p>';
                for(var i = 0; i < limit; i++){
                    //Title and Info Url
                    if(dat.data[i].infourl !== ""){
                        items += '<h2> <a href=\'' + dat.data[i].infourl + '\' target=\'blank\'>' + dat.data[i].title + '</a></h2>';
                    } else {
                        items += '<h2>' + dat.data[i].title + '</h2>';   
                    }
                    items += '<p> <i>' + dat.data[i].parkfullname + '</i></p>';
                    items += '<p>' + dat.data[i].description + '</p>';               
                    items += '<p> LOCATION:  ' + dat.data[i].location + ' </p>'; 
                    items += '<p> LOCATION COORDINATES:  ' + dat.data[i].latitude + ', ' + dat.data[i].longitude + ' </p>'; 
                    items += '<p> DATES: ';
                    for(var j = 0; j < dat.data[i].dates.length; j++){
                        items += dat.data[i].dates[j] + '. ';
                    }              
                    items += '<p> TIME: ' + dat.data[i].times[0].timestart + ' - ' + dat.data[i].times[0].timeend + '</p>';  
                    items += '</p>';
                    items += '<hr>';
                }
                $('.general-content-container').empty();
                $('.general-content-container').append(items);
            });
        });
        //Lessonplans Content with .lessonplans-button
        $('.lessonplans-button').on('click',() => {
            q = $('.search-input').val();
            //default content upon basic search is alerts
            var alerts_url = base_url + lessonplans + 'q=' + q + '&parkCode=' + parkCode + '&stateCode=' + stateCode + '&' + app_id;
            $.getJSON(encodeURI(alerts_url), function(dat){
                var items = '';
                var limit = dat.total < 50 ? dat.total : 50;
                if(limit < 1){
                    items += '<p> No Lessonplans Results </p>';
                }
                //items += '<p> Showing <b>' + limit + '</b> of <b>' + dat.total + '</b> lessonplans results.'
                for(var i = 0; i < limit; i++){
                    if(dat.data[i].url !== ""){
                        items += '<h3>';
                        items += '<a href=\"' + dat.data[i].url + "\" target=\"_blank\">";
                        items += dat.data[i].title;
                        items += '</a>'
                        items += '</h3>';
                    } else {
                        items += '<h3>' +dat.data[i].title+ '</h3>';
                    }  
                    items += '<p> <i> ' + dat.data[i].gradelevel + '</i> </p>';   
 
                    items += '<p> <i> OBJECTIVES: </i>' + dat.data[i].questionobjective + '</p>';
                    items += '<p> <i> ' + 'COMMON CORE: ' + '</i>' + '</p>';   
                    items += '<p> <i> ' + 'State Standards: ' + '</i>' + dat.data[i].commoncore.statestandards + '</p>';   
                    items += '<p> <i> ' + 'Math Standards: ' + '</i>';
                    for(var j = 0; j < dat.data[i].commoncore.mathstandards.length; j++){
                        items += dat.data[i].commoncore.mathstandards[j] + '. ';   
                    }
                    items += '</p>';
                    items += '<p> <i> ' + 'Additional Standards: ' + '</i>' + dat.data[i].commoncore.additionalstandards + '</p>';   
                    items += '<p> <i> ' + 'ELA Standards: ' + '</i>';
                    for(var j = 0; j < dat.data[i].commoncore.elastandards.length; j++){
                        items += dat.data[i].commoncore.elastandards[j] + '. ';   
                    }
                    items += '</p>';

                    items += '<p> <i> ' + 'PARKS: ' + '</i>';
                    for(var j = 0; j < dat.data[i].parks.length; j++){
                        items += dat.data[i].parks[j] + '. ';   
                    }
                    items += '</p>';
                    items += '<hr>';
                }
                $('.general-content-container').empty();
                $('.general-content-container').append(items);
            });
        });
        //Newsreleases Content with .newsreleases-button
        $('.newsreleases-button').on('click',() => {
            q = $('.search-input').val();
            //default content upon basic search is alerts
            var alerts_url = base_url + newsreleases + 'q=' + q + '&parkCode=' + parkCode + '&stateCode=' + stateCode + '&' + app_id;
            alerts_url = alerts_url.replace(" ", "%20");
            $.getJSON(alerts_url, function(dat){
                var items = '';
                var limit = dat.total < 50 ? dat.total : 50;
                if(limit < 1){
                    items += '<p> No Newsreleases Results </p>';
                }
                //items += '<p> Showing <b>' + limit + '</b> of <b>' + dat.total + '</b> newsreleases results.'
                for(var i = 0; i < limit; i++){
                    if(dat.data[i].url !== ""){
                        items += '<h3>';
                        items += '<a href=\"' + dat.data[i].url + "\" target=\"_blank\">";
                        items += dat.data[i].title;
                        items += '</a>'
                        items += '</h3>';
                    } else {
                        items += '<h3>' +dat.data[i].title+ '</h3>';
                    }
                    if(dat.data[i].image.url !== ""){
                        items += '<img src=\"' + dat.data[i].image.url + '\" height=\"240\" width=\"360\">';
                    }   
                    items += '<p> <i>' + dat.data[i].releasedate + '</i> </p>';
                    items += '<p> ' + dat.data[i].abstract + '</p>';                 
                    items += '<hr>';
                }
                $('.general-content-container').empty();
                $('.general-content-container').append(items);
            });
        });
        //Parks Content with .parks-button
        $('.parks-button').on('click',() => {
            q = $('.search-input').val();
            //default content upon basic search is alerts
            var alerts_url = base_url + parks + 'q=' + q + '&parkCode=' + parkCode + '&stateCode=' + stateCode + '&' + app_id;
            $.getJSON(alerts_url, function(dat){
                var items = '';
                var limit = dat.total < 50 ? dat.total : 50;
                if(limit < 1){
                    items += '<p> No Parks Results </p>';
                }
                //items += '<p> Showing <b>' + limit + '</b> of <b>' + dat.total + '</b> parks results.'
                for(var i = 0; i < limit; i++){
                    if(dat.data[i].url !== ""){
                        items += '<h3>';
                        items += '<a href=\"' + dat.data[i].url + "\" target=\"_blank\">";
                        items += dat.data[i].fullName;
                        items += '</a>'
                        items += '</h3>';
                    } else {
                        items += '<h3>' +dat.data[i].fullName+ '</h3>';
                    }   
                    items += '<p> <i>' + dat.data[i].designation + '</i> </p>';
                    items += '<p> <i>' + dat.data[i].states + '</i> </p>';
                    items += '<p> ' + dat.data[i].description + '</p>';   
                    items += '<p> <i> Weather Info: </i> ' + dat.data[i].weatherInfo + '</p>';                 
                    if(dat.data[i].directionsoverview !== ""){
                        items += '<p> <i> Directions:  </i>' + dat.data[i].directionsInfo;
                    } else {
                        items += '<p> <i> Directions:  </i>:  n/a </p>';
                    }
                    if(dat.data[i].directionsUrl !== ""){
                        items += ' For more direction information, visit the following <a href=\"' + dat.data[i].directionsUrl + '\" target=\"_blank\">link</a>. </p>';
                    }
                    if(dat.data[i].latLong !== ""){
                        var str = dat.data[i].latLong;
                        var res = str.match(/[\-0-9\.]+/g);
                        /*var mapquest_base_address = "https://www.mapquestapi.com/geocoding/v1/reverse?key=BG6lOwpqhdRpXECEtTRurrUHz59F7Vr8&location=";
                        var mapquest_url = mapquest_base_address + res[0] + "," + res[1];
                        items += '<p> LOCATION/ADDRESS: <a href=\"' +  mapquest_url + '\" target=\"_blank\">' + mapquest_url + '</a>'+' </p>';
                        items += '<p> NEW LOCATION: ' + line1(mapquest_url) + '</p>';*/
                        items += '<p> <i> Location Coordinates:  </i>: ' + res[0] + "," + res[1] + '</p>';
                    } else {
                        items += '<p> <i> Location Coordinates:  </i>  n/a </p>';
                    } 
                    items += '<hr>';

                }
                $('.general-content-container').empty();
                $('.general-content-container').append(items);
            });
        });
        //People Content with .people-button
        $('.people-button').on('click',() => {
            q = $('.search-input').val();
            //default content upon basic search is alerts
            var alerts_url = base_url + people + 'q=' + q + '&parkCode=' + parkCode + '&stateCode=' + stateCode + '&' + app_id;
            $.getJSON(alerts_url, function(dat){
                var items = '';
                var limit = dat.total < 50 ? dat.total : 50;
                if(limit < 1){
                    items += '<p> No People Results </p>';
                }
                //items += '<p> Showing <b>' + limit + '</b> of <b>' + dat.total + '</b> people results.'
                for(var i = 0; i < limit; i++){
                    if(dat.data[i].url !== ""){
                        items += '<h3>';
                        items += '<a href=\"' + dat.data[i].url + "\" target=\"_blank\">";
                        items += dat.data[i].title;
                        items += '</a>'
                        items += '</h3>';
                    } else {
                        items += '<h3>' +dat.data[i].title+ '</h3>';
                    }
                    if(dat.data[i].listingimage.url !== ""){
                        items += '<img src=\"' + dat.data[i].listingimage.url + '\" height=\"180\" width=\"270\">';
                    }   
                    items += '<p>' + dat.data[i].listingdescription + '</p>';
                    items += '<br>';

                }
                $('.general-content-container').empty();
                $('.general-content-container').append(items);
            });
        });
        //Places Content with .places-button
        $('.places-button').on('click',() => {
            q = $('.search-input').val();
            //default content upon basic search is alerts
            var alerts_url = base_url + places + 'q=' + q + '&parkCode=' + parkCode + '&stateCode=' + stateCode + '&' + app_id;
            $.getJSON(alerts_url, function(dat){
                var items = '';
                var limit = dat.total < 50 ? dat.total : 50;
                if(limit < 1){
                    items += '<p> No Places Results </p>';
                }
                //items += '<p> Showing <b>' + limit + '</b> of <b>' + dat.total + '</b> places results.'
                for(var i = 0; i < limit; i++){
                    if(dat.data[i].url !== ""){
                        items += '<h3>';
                        items += '<a href=\"' + dat.data[i].url + "\" target=\"_blank\">";
                        items += dat.data[i].title;
                        items += '</a>'
                        items += '</h3>';
                    } else {
                        items += '<h3>' +dat.data[i].title+ '</h3>';
                    }   
                    if(dat.data[i].listingimage.url !== ""){
                        items += '<img src=\"' + dat.data[i].listingimage.url + '\" height=\"240\" width=\"360\">';
                    }
                    items += '<p>' + dat.data[i].listingdescription + '</p>';
                    if(dat.data[i].latLong !== ""){
                        var str = dat.data[i].latLong;
                        var res = str.match(/[\-0-9\.]+/g);
                        /*var mapquest_base_address = "https://www.mapquestapi.com/geocoding/v1/reverse?key=BG6lOwpqhdRpXECEtTRurrUHz59F7Vr8&location=";
                        var mapquest_url = mapquest_base_address + res[0] + "," + res[1];
                        items += '<p> LOCATION/ADDRESS: <a href=\"' +  mapquest_url + '\" target=\"_blank\">' + mapquest_url + '</a>'+' </p>';
                        items += '<p> NEW LOCATION: ' + line1(mapquest_url) + '</p>';*/
                        items += '<p> <i> Location Coordinates:  </i> ' + res[0] + "," + res[1] + '</p>';
                    } else {
                        items += '<p> <i> Location Coordinates:  </i>  n/a </p>';
                    }
                    items += '<hr>';

                }
                $('.general-content-container').empty();
                $('.general-content-container').append(items);
            });
        });

        //Visitor Center Content with .places-button
        $('.visitor-center-button').on('click',() => {
            q = $('.search-input').val();
            //default content upon basic search is alerts
            var alerts_url = base_url + visitor_center + 'q=' + q + '&parkCode=' + parkCode + '&stateCode=' + stateCode + '&' + app_id;
            $.getJSON(alerts_url, function(dat){
                var items = '';
                var limit = dat.total < 50 ? dat.total : 50;
                if(limit < 1){
                    items += '<p> No Visitor Center Results </p>';
                }
                //items += '<p> Showing <b>' + limit + '</b> of <b>' + dat.total + '</b> visitor center results.'
                for(var i = 0; i < limit; i++){
                    if(dat.data[i].url !== ""){
                        items += '<h3>';
                        items += '<a href=\"' + dat.data[i].url + "\" target=\"_blank\">";
                        items += dat.data[i].name;
                        items += '</a>'
                        items += '</h3>';
                    } else {
                        items += '<h3>' +dat.data[i].name+ '</h3>';
                    }   
                    items += '<p>' + dat.data[i].description + '</p>';
                    if(dat.data[i].directionsInfo !== ""){
                        items += '<p> <i> Directions: </i>' + dat.data[i].directionsInfo + '</p>';

                    } else {
                        items += '<p> <i> Directions: </i>  n/a </p>';
                    }

                    if(dat.data[i].latLong !== ""){
                        var str = dat.data[i].latLong;
                        var res = str.match(/[\-0-9\.]+/g);
                        /*var mapquest_base_address = "https://www.mapquestapi.com/geocoding/v1/reverse?key=BG6lOwpqhdRpXECEtTRurrUHz59F7Vr8&location=";
                        var mapquest_url = mapquest_base_address + res[0] + "," + res[1];
                        items += '<p> LOCATION/ADDRESS: <a href=\"' +  mapquest_url + '\" target=\"_blank\">' + mapquest_url + '</a>'+' </p>';
                        items += '<p> NEW LOCATION: ' + line1(mapquest_url) + '</p>';*/
                        items += '<p> <i> Location Coordinates:  </i> ' + res[0] + "," + res[1] + '</p>';
                    } else {
                        items += '<p> <i> Location Coordinates:  </i>  n/a </p>';
                    }
                    items += '<br>';

                }
                $('.general-content-container').empty();
                $('.general-content-container').append(items);
            });
        });
    });
    
});
