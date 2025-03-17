// general


// Json Accueil

if(window.location.pathname === "/index.html"){
    fetch("luxdrive_site_data_full.json")
        .then(function(response){
            if(!response.ok){
                throw new Error("le fichier Json n'a pas pu etre charger.");
            }
            return response.json();
        })
        
        .then(function(data){
            // banner
            let banner = document.getElementById("banner");
            let accueil = data.pagesContent.Accueil.heroBanner;
            let title = document.createElement("h1");
            let subtitle = document.createElement("h2");
            let cta = document.createElement("button");

            title.textContent = accueil.title;
            subtitle.textContent = accueil.subtitle;
            cta.innerHTML = "<a href='pages/catalogue.html'>" + accueil.cta + "</a>";

            banner.appendChild(title);
            banner.appendChild(subtitle);
            banner.appendChild(cta);

            // stats
            let stats = document.getElementById("stats");
            let accueilStats = data.pagesContent.Accueil.stats;
            let label = [document.createElement("h3"), document.createElement("h3"), document.createElement("h3")];
            let value = [document.createElement("p"), document.createElement("p"), document.createElement("p")];
            let divLabel = [document.createElement("div"), document.createElement("div"), document.createElement("div")];

            for(i=0; i<accueilStats.length; i++){
                label[i].textContent = accueilStats[i].label;
                value[i].textContent = accueilStats[i].value;
                stats.appendChild(divLabel[i]);

                divLabel[i].appendChild(label[i]);
                divLabel[i].appendChild(value[i]);
            };

            // footer - links
            let links = document.getElementById("links");
            let footerLinks = data.footer.links;
            let divLinks = [document.createElement("div"), document.createElement("div"), document.createElement("div")];
            let labelLinks = [document.createElement("h4"), document.createElement("h4"), document.createElement("h4")];
            let url = [document.createElement("p"), document.createElement("p"), document.createElement("p")];

            for(j=0; j<footerLinks.length; j++){
                labelLinks[j].textContent = footerLinks[j].label;
                url[j].textContent = footerLinks[j].url;
                links.appendChild(divLinks[j]);

                divLinks[j].appendChild(labelLinks[j]);
                divLinks[j].appendChild(url[j]);
            };

            // footer - socials
            let socials = document.getElementById("socials");
            let footerSocials = data.footer.socials;
            let instagram = document.createElement("div");
            let youtube = document.createElement("div");
            let twitter = document.createElement("div");

            instagram.innerHTML = "<a Href='" + footerSocials.instagram + "'>instagram</a>";
            youtube.innerHTML = "<a Href='" + footerSocials.youtube + "'>youtube</a>";
            twitter.innerHTML = "<a Href='" + footerSocials.twitter + "'>twitter</a>";

            socials.appendChild(instagram);
            socials.appendChild(youtube);
            socials.appendChild(twitter);
        });
};



// Json Catalogue avec carrousel

if(window.location.pathname === "/pages/catalogue.html"){
    fetch("../luxdrive_site_data_full.json")
        .then(function(response){
            if(!response.ok){
                throw new Error("le fichier Json n'a pas pu etre charger.");
            }
            return response.json();
        })

        .then(function(data){   // nommer les elements et tableau
            let carrousel = document.getElementById("carrousel");
            let BtnBack = document.querySelector(".Btn-back");
            let BtnForward = document.querySelector(".Btn-forward");

            let carsList = data.cars
            let brandId = data.brands;

            let nameCar = [];
            let description = [];
            let price = [];
            let stock = [];
            let features = [];
            let nameBrand = [];
            let image = [];
            let logo = [];
            let slide = [];
            let divSlide =[];
            let divImageSlide = [];
            let divLegendSlide = [];
            let divLogoSlide = [];
            let divDescriptionSlide = [];

            for(k=0; k<carsList.length; k++){ 
                
        //création de k-element par tableau 

                nameCar.push(document.createElement("h4"));
                description.push(document.createElement("p"));
                price.push(document.createElement("p"));
                stock.push(document.createElement("p"));
                features.push(document.createElement("p"));
                nameBrand.push(document.createElement("p"));

                image.push(document.createElement("div"));
                logo.push(document.createElement("div"));
                slide.push(document.createElement("div"));
                divImageSlide.push(document.createElement("div"));
                divLegendSlide.push(document.createElement("div"));
                divLogoSlide.push(document.createElement("div"));
                divDescriptionSlide.push(document.createElement("div"));
                divSlide.push(document.createElement("div"));


        //attribution texte/html par element du tableau

                nameCar[k].textContent = "Modéle: " + carsList[k].name;
                description[k].textContent = carsList[k].description;
                price[k].textContent = carsList[k].price + " €";
                stock[k].textContent = carsList[k].stock + " en stock";
                features[k].textContent = "Spécificité: " + carsList[k].features;
                nameBrand[k].textContent = "Marque: " + brandId[k].name;
                image[k].innerHTML = "<img src='" + carsList[k].image + "'>";
                logo[k].innerHTML = "<img src ='"  + brandId[k].logo + "'>";


        // carrousel

                carrousel.appendChild(slide[k]);
                slide[k].id = "slide" + k;

                let l = 0;
                function visibleSlide(){
                    slide[l].appendChild(divImageSlide[l]);
                    divImageSlide[l].id = "divImageSlide";

                    slide[l].appendChild(divLegendSlide[l]);
                    divLegendSlide[l].id = "divLegendSlide";
                    divLegendSlide[l].appendChild(divDescriptionSlide[l]);
                    divLegendSlide[l].appendChild(divLogoSlide[l]);

                    divImageSlide[l].appendChild(image[l]);
                    divLogoSlide[l].appendChild(logo[l]);
                    divLogoSlide[l].id = "divLogoSlide";
                    
                    divDescriptionSlide[l].appendChild(nameCar[l]);
                    divDescriptionSlide[l].appendChild(description[l]);
                    divDescriptionSlide[l].appendChild(price[l]);
                    divDescriptionSlide[l].appendChild(stock[l]);
                    divDescriptionSlide[l].appendChild(features[l]);
                    divDescriptionSlide[l].appendChild(nameBrand[l]);
                    divDescriptionSlide[l].id = "divDescriptionSlide";

                };

                function hiddenSlide(){
                    slide[l].removeChild(divImageSlide[l]);
                    slide[l].removeChild(divLegendSlide[l]);
                    divLegendSlide[l].removeChild(divLogoSlide[l]);
                    divLegendSlide[l].removeChild(divDescriptionSlide[l]);
                    divImageSlide[l].removeChild(image[l]);
                    divLogoSlide[l].removeChild(logo[l]);
                    divDescriptionSlide[l].removeChild(nameCar[l]);
                    divDescriptionSlide[l].removeChild(description[l]);
                    divDescriptionSlide[l].removeChild(price[l]);
                    divDescriptionSlide[l].removeChild(stock[l]);
                    divDescriptionSlide[l].removeChild(features[l]);
                    divDescriptionSlide[l].removeChild(nameBrand[l]);
                }
                visibleSlide(l);

                BtnBack.addEventListener("click",function(){
                    hiddenSlide(l);
                    if(l>0){
                        l--;
                    } else {
                        l = slide.length-1;
                    };
                    visibleSlide(l);
                });
                
                BtnForward.addEventListener("click",function(){
                    hiddenSlide(l);
                    if(l <slide.length-1){
                        l++;
                    } else {
                        l =0;
                    };
                    visibleSlide(l);
                });
            };
        });   
};