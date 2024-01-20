import React from "react";
import ReactDOM from "react-dom/client";

const IMAGE_URL = "https://e7.pngegg.com/pngimages/664/210/png-clipart-uber-eats-muncheez-delivery-online-food-ordering-food-delivery-food-logo.png"

const HeaderComponent = () => {
    return (
    <div className="header">
        <div className="logo-container">
            <img className="logo" src={IMAGE_URL} alt="LOGO"/>
        </div>
        <div className="nav-items">
            <ul>
                <li>Home</li>
                <li>Cart</li>
                <li>Contact</li>
                <li>About Us</li>
            </ul>
        </div>
    </div>
    );
}

const restaurentData = [
    {
    "info": {
    "id": "18772",
    "name": "California Burrito",
    "cloudinaryImageId": "zwwvf8n0jlo1bjx19qzg",
    "locality": "Marathahalli",
    "areaName": "Marathahalli",
    "costForTwo": "₹250 for two",
    "cuisines": [
    "Mexican",
    "American",
    "Salads",
    "Continental",
    "Keto",
    "Healthy Food"
    ],
    "avgRating": 4.5,
    "parentId": "1252",
    "avgRatingString": "4.5",
    "totalRatingsString": "10K+",
    "sla": {
    "deliveryTime": 25,
    "lastMileTravel": 2.7,
    "serviceability": "SERVICEABLE",
    "slaString": "25 mins",
    "lastMileTravelString": "2.7 km",
    "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
    "nextCloseTime": "2024-01-21 00:00:00",
    "opened": true
    },
    "badges": {
    "textExtendedBadges": [
    {
    "iconId": "guiltfree/GF_Logo_android_3x",
    "shortDescription": "options available",
    "fontColor": "#7E808C"
    }
    ]
    },
    "isOpen": true,
    "type": "F",
    "badgesV2": {
    "entityBadges": {
    "imageBased": {},
    "textBased": {},
    "textExtendedBadges": {
    "badgeObject": [
    {
    "attributes": {
    "description": "",
    "fontColor": "#7E808C",
    "iconId": "guiltfree/GF_Logo_android_3x",
    "shortDescription": "options available"
    }
    }
    ]
    }
    }
    },
    "aggregatedDiscountInfoV3": {
    "header": "₹120 OFF",
    "subHeader": "ABOVE ₹199",
    "discountTag": "FLAT DEAL"
    },
    "differentiatedUi": {
    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    "differentiatedUiMediaDetails": {
    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
    "lottie": {},
    "video": {}
    }
    },
    "reviewsSummary": {},
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {}
    },
    "analytics": {},
    "cta": {
    "link": "https://www.swiggy.com/restaurants/california-burrito-marathahalli-bangalore-18772",
    "type": "WEBLINK"
    }
    },
    {
    "info": {
    "id": "18976",
    "name": "Nandhana Palace",
    "cloudinaryImageId": "195876a3181ef63f76e45e3a7b49b585",
    "locality": "Marathahalli",
    "areaName": "Marathahalli",
    "costForTwo": "₹500 for two",
    "cuisines": [
    "Biryani",
    "Andhra",
    "South Indian",
    "North Indian"
    ],
    "avgRating": 4.2,
    "parentId": "2120",
    "avgRatingString": "4.2",
    "totalRatingsString": "10K+",
    "sla": {
    "deliveryTime": 33,
    "lastMileTravel": 4.8,
    "serviceability": "SERVICEABLE",
    "slaString": "33 mins",
    "lastMileTravelString": "4.8 km",
    "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
    "nextCloseTime": "2024-01-21 02:00:00",
    "opened": true
    },
    "badges": {},
    "isOpen": true,
    "type": "F",
    "badgesV2": {
    "entityBadges": {
    "imageBased": {},
    "textBased": {},
    "textExtendedBadges": {}
    }
    },
    "aggregatedDiscountInfoV3": {
    "header": "₹120 OFF",
    "subHeader": "ABOVE ₹199",
    "discountTag": "FLAT DEAL"
    },
    "differentiatedUi": {
    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    "differentiatedUiMediaDetails": {
    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
    "lottie": {},
    "video": {}
    }
    },
    "reviewsSummary": {},
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {}
    },
    "analytics": {},
    "cta": {
    "link": "https://www.swiggy.com/restaurants/nandhana-palace-marathahalli-bangalore-18976",
    "type": "WEBLINK"
    }
    },
    {
    "info": {
    "id": "360",
    "name": "Beijing Bites",
    "cloudinaryImageId": "ca0eb08d0635fd6da2e5a480fec897d0",
    "locality": "Whitefield",
    "areaName": "Whitefield",
    "costForTwo": "₹450 for two",
    "cuisines": [
    "Chinese",
    "Thai"
    ],
    "avgRating": 4.2,
    "parentId": "103",
    "avgRatingString": "4.2",
    "totalRatingsString": "10K+",
    "sla": {
    "deliveryTime": 33,
    "lastMileTravel": 6.4,
    "serviceability": "SERVICEABLE",
    "slaString": "33 mins",
    "lastMileTravelString": "6.4 km",
    "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
    "nextCloseTime": "2024-01-21 01:00:00",
    "opened": true
    },
    "badges": {
    "textExtendedBadges": [
    {
    "iconId": "guiltfree/GF_Logo_android_3x",
    "shortDescription": "options available",
    "fontColor": "#7E808C"
    }
    ]
    },
    "isOpen": true,
    "type": "F",
    "badgesV2": {
    "entityBadges": {
    "imageBased": {},
    "textBased": {},
    "textExtendedBadges": {
    "badgeObject": [
    {
    "attributes": {
    "description": "",
    "fontColor": "#7E808C",
    "iconId": "guiltfree/GF_Logo_android_3x",
    "shortDescription": "options available"
    }
    }
    ]
    }
    }
    },
    "aggregatedDiscountInfoV3": {
    "header": "₹120 OFF",
    "subHeader": "ABOVE ₹199",
    "discountTag": "FLAT DEAL"
    },
    "differentiatedUi": {
    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    "differentiatedUiMediaDetails": {
    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
    "lottie": {},
    "video": {}
    }
    },
    "reviewsSummary": {},
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {}
    },
    "analytics": {},
    "cta": {
    "link": "https://www.swiggy.com/restaurants/beijing-bites-whitefield-bangalore-360",
    "type": "WEBLINK"
    }
    },
    {
    "info": {
    "id": "234631",
    "name": "Truffles",
    "cloudinaryImageId": "cd832b6167eb9f88aeb1ccdebf38d942",
    "locality": "Kaveri Nagar",
    "areaName": "Garudacharpalya",
    "costForTwo": "₹350 for two",
    "cuisines": [
    "American",
    "Continental",
    "Desserts",
    "Bakery",
    "Beverages",
    "Pastas",
    "Italian"
    ],
    "avgRating": 4.5,
    "parentId": "218065",
    "avgRatingString": "4.5",
    "totalRatingsString": "10K+",
    "sla": {
    "deliveryTime": 29,
    "lastMileTravel": 5,
    "serviceability": "SERVICEABLE",
    "slaString": "29 mins",
    "lastMileTravelString": "5.0 km",
    "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
    "nextCloseTime": "2024-01-21 00:00:00",
    "opened": true
    },
    "badges": {},
    "select": true,
    "isOpen": true,
    "type": "F",
    "badgesV2": {
    "entityBadges": {
    "imageBased": {},
    "textBased": {},
    "textExtendedBadges": {}
    }
    },
    "aggregatedDiscountInfoV3": {
    "header": "₹120 OFF",
    "subHeader": "ABOVE ₹199",
    "discountTag": "FLAT DEAL"
    },
    "differentiatedUi": {
    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    "differentiatedUiMediaDetails": {
    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
    "lottie": {},
    "video": {}
    }
    },
    "reviewsSummary": {},
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {}
    },
    "analytics": {},
    "cta": {
    "link": "https://www.swiggy.com/restaurants/truffles-kaveri-nagar-garudacharpalya-bangalore-234631",
    "type": "WEBLINK"
    }
    },
    {
    "info": {
    "id": "113317",
    "name": "Bakingo",
    "cloudinaryImageId": "05994df0e49725bd230146c320b8f7aa",
    "locality": "Brookefield",
    "areaName": "Bengaluru Urban",
    "costForTwo": "₹300 for two",
    "cuisines": [
    "Bakery",
    "Desserts",
    "Beverages",
    "Snacks"
    ],
    "avgRating": 4.3,
    "parentId": "3818",
    "avgRatingString": "4.3",
    "totalRatingsString": "5K+",
    "sla": {
    "deliveryTime": 25,
    "lastMileTravel": 2.1,
    "serviceability": "SERVICEABLE",
    "slaString": "25 mins",
    "lastMileTravelString": "2.1 km",
    "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
    "nextCloseTime": "2024-01-21 01:00:00",
    "opened": true
    },
    "badges": {},
    "isOpen": true,
    "type": "F",
    "badgesV2": {
    "entityBadges": {
    "imageBased": {},
    "textBased": {},
    "textExtendedBadges": {}
    }
    },
    "aggregatedDiscountInfoV3": {
    "header": "₹120 OFF",
    "subHeader": "ABOVE ₹199",
    "discountTag": "FLAT DEAL"
    },
    "differentiatedUi": {
    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    "differentiatedUiMediaDetails": {
    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
    "lottie": {},
    "video": {}
    }
    },
    "reviewsSummary": {},
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {}
    },
    "analytics": {},
    "cta": {
    "link": "https://www.swiggy.com/restaurants/bakingo-brookefield-bengaluru-urban-bangalore-113317",
    "type": "WEBLINK"
    }
    },
    {
    "info": {
    "id": "21668",
    "name": "Subway",
    "cloudinaryImageId": "63178e3e64d503a479f2a2048a474552",
    "locality": "Kundanahalli",
    "areaName": "Marathahalli",
    "costForTwo": "₹350 for two",
    "cuisines": [
    "Salads",
    "Snacks",
    "Desserts",
    "Beverages"
    ],
    "avgRating": 4.2,
    "parentId": "2",
    "avgRatingString": "4.2",
    "totalRatingsString": "10K+",
    "sla": {
    "deliveryTime": 27,
    "lastMileTravel": 2.7,
    "serviceability": "SERVICEABLE",
    "slaString": "27 mins",
    "lastMileTravelString": "2.7 km",
    "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
    "nextCloseTime": "2024-01-21 03:00:00",
    "opened": true
    },
    "badges": {
    "textExtendedBadges": [
    {
    "iconId": "guiltfree/GF_Logo_android_3x",
    "shortDescription": "options available",
    "fontColor": "#7E808C"
    }
    ]
    },
    "isOpen": true,
    "type": "F",
    "badgesV2": {
    "entityBadges": {
    "imageBased": {},
    "textBased": {},
    "textExtendedBadges": {
    "badgeObject": [
    {
    "attributes": {
    "description": "",
    "fontColor": "#7E808C",
    "iconId": "guiltfree/GF_Logo_android_3x",
    "shortDescription": "options available"
    }
    }
    ]
    }
    }
    },
    "aggregatedDiscountInfoV3": {
    "header": "₹120 OFF",
    "subHeader": "ABOVE ₹199",
    "discountTag": "FLAT DEAL"
    },
    "differentiatedUi": {
    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    "differentiatedUiMediaDetails": {
    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
    "lottie": {},
    "video": {}
    }
    },
    "reviewsSummary": {},
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {}
    },
    "analytics": {},
    "cta": {
    "link": "https://www.swiggy.com/restaurants/subway-kundanahalli-marathahalli-bangalore-21668",
    "type": "WEBLINK"
    }
    },
    {
    "info": {
    "id": "237665",
    "name": "McDonald's",
    "cloudinaryImageId": "405645b3118d83e89db4c65361e43733",
    "locality": "Preatige Tech park",
    "areaName": "Kadubeesanahalli",
    "costForTwo": "₹400 for two",
    "cuisines": [
    "Burgers",
    "Beverages",
    "Cafe",
    "Desserts"
    ],
    "avgRating": 4.3,
    "parentId": "630",
    "avgRatingString": "4.3",
    "totalRatingsString": "5K+",
    "sla": {
    "deliveryTime": 26,
    "lastMileTravel": 1.9,
    "serviceability": "SERVICEABLE",
    "slaString": "26 mins",
    "lastMileTravelString": "1.9 km",
    "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
    "nextCloseTime": "2024-01-21 00:45:00",
    "opened": true
    },
    "badges": {
    "textExtendedBadges": [
    {
    "iconId": "guiltfree/GF_Logo_android_3x",
    "shortDescription": "options available",
    "fontColor": "#7E808C"
    }
    ]
    },
    "isOpen": true,
    "type": "F",
    "badgesV2": {
    "entityBadges": {
    "imageBased": {},
    "textBased": {},
    "textExtendedBadges": {
    "badgeObject": [
    {
    "attributes": {
    "description": "",
    "fontColor": "#7E808C",
    "iconId": "guiltfree/GF_Logo_android_3x",
    "shortDescription": "options available"
    }
    }
    ]
    }
    }
    },
    "aggregatedDiscountInfoV3": {
    "header": "₹120 OFF",
    "subHeader": "ABOVE ₹199",
    "discountTag": "FLAT DEAL"
    },
    "differentiatedUi": {
    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    "differentiatedUiMediaDetails": {
    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
    "lottie": {},
    "video": {}
    }
    },
    "reviewsSummary": {},
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {}
    },
    "analytics": {},
    "cta": {
    "link": "https://www.swiggy.com/restaurants/mcdonalds-preatige-tech-park-kadubeesanahalli-bangalore-237665",
    "type": "WEBLINK"
    }
    },
    {
    "info": {
    "id": "10866",
    "name": "Pizza Hut",
    "cloudinaryImageId": "2b4f62d606d1b2bfba9ba9e5386fabb7",
    "locality": "Munnekolalu Village",
    "areaName": "Marathahalli",
    "costForTwo": "₹350 for two",
    "cuisines": [
    "Pizzas"
    ],
    "avgRating": 3.9,
    "parentId": "721",
    "avgRatingString": "3.9",
    "totalRatingsString": "10K+",
    "sla": {
    "deliveryTime": 29,
    "lastMileTravel": 1.9,
    "serviceability": "SERVICEABLE",
    "slaString": "29 mins",
    "lastMileTravelString": "1.9 km",
    "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
    "nextCloseTime": "2024-01-21 02:00:00",
    "opened": true
    },
    "badges": {},
    "isOpen": true,
    "type": "F",
    "badgesV2": {
    "entityBadges": {
    "imageBased": {},
    "textBased": {},
    "textExtendedBadges": {}
    }
    },
    "aggregatedDiscountInfoV3": {
    "header": "₹120 OFF",
    "subHeader": "ABOVE ₹199",
    "discountTag": "FLAT DEAL"
    },
    "differentiatedUi": {
    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    "differentiatedUiMediaDetails": {
    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
    "lottie": {},
    "video": {}
    }
    },
    "reviewsSummary": {},
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {}
    },
    "analytics": {},
    "cta": {
    "link": "https://www.swiggy.com/restaurants/pizza-hut-munnekolalu-village-marathahalli-bangalore-10866",
    "type": "WEBLINK"
    }
    },
    {
    "info": {
    "id": "29972",
    "name": "Domino's Pizza",
    "cloudinaryImageId": "hkefhqm8lmn4tjdoashe",
    "locality": "Outer Ring Road",
    "areaName": "Marathahalli",
    "costForTwo": "₹400 for two",
    "cuisines": [
    "Pizzas",
    "Italian",
    "Pastas",
    "Desserts"
    ],
    "avgRating": 4.4,
    "parentId": "2456",
    "avgRatingString": "4.4",
    "totalRatingsString": "10K+",
    "sla": {
    "deliveryTime": 30,
    "serviceability": "SERVICEABLE",
    "slaString": "30 mins",
    "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
    "nextCloseTime": "2024-01-20 23:59:00",
    "opened": true
    },
    "badges": {},
    "isOpen": true,
    "type": "F",
    "badgesV2": {
    "entityBadges": {
    "imageBased": {},
    "textBased": {},
    "textExtendedBadges": {}
    }
    },
    "aggregatedDiscountInfoV3": {
    "header": "₹120 OFF",
    "subHeader": "ABOVE ₹199",
    "discountTag": "FLAT DEAL"
    },
    "differentiatedUi": {
    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    "differentiatedUiMediaDetails": {
    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
    "lottie": {},
    "video": {}
    }
    },
    "reviewsSummary": {},
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {}
    },
    "analytics": {},
    "cta": {
    "link": "https://www.swiggy.com/restaurants/dominos-pizza-outer-ring-road-marathahalli-bangalore-29972",
    "type": "WEBLINK"
    }
    },
    {
    "info": {
    "id": "5931",
    "name": "Burger King",
    "cloudinaryImageId": "e33e1d3ba7d6b2bb0d45e1001b731fcf",
    "locality": "Phoenix Market City Mall",
    "areaName": "Krishnarajapura",
    "costForTwo": "₹350 for two",
    "cuisines": [
    "Burgers",
    "American"
    ],
    "avgRating": 4.1,
    "parentId": "166",
    "avgRatingString": "4.1",
    "totalRatingsString": "10K+",
    "sla": {
    "deliveryTime": 41,
    "lastMileTravel": 6.1,
    "serviceability": "SERVICEABLE",
    "slaString": "41 mins",
    "lastMileTravelString": "6.1 km",
    "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
    "nextCloseTime": "2024-01-21 00:00:00",
    "opened": true
    },
    "badges": {},
    "isOpen": true,
    "type": "F",
    "badgesV2": {
    "entityBadges": {
    "imageBased": {},
    "textBased": {},
    "textExtendedBadges": {}
    }
    },
    "aggregatedDiscountInfoV3": {
    "header": "₹120 OFF",
    "subHeader": "ABOVE ₹199",
    "discountTag": "FLAT DEAL"
    },
    "differentiatedUi": {
    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    "differentiatedUiMediaDetails": {
    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
    "lottie": {},
    "video": {}
    }
    },
    "reviewsSummary": {},
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {}
    },
    "analytics": {},
    "cta": {
    "link": "https://www.swiggy.com/restaurants/burger-king-phoenix-market-city-mall-krishnarajapura-bangalore-5931",
    "type": "WEBLINK"
    }
    },
    {
    "info": {
    "id": "43910",
    "name": "KFC",
    "cloudinaryImageId": "f01666ac73626461d7455d9c24005cd4",
    "locality": "Marathahalli",
    "areaName": "Marathahalli",
    "costForTwo": "₹400 for two",
    "cuisines": [
    "Burgers",
    "Biryani",
    "American",
    "Snacks",
    "Fast Food"
    ],
    "avgRating": 4.1,
    "parentId": "547",
    "avgRatingString": "4.1",
    "totalRatingsString": "10K+",
    "sla": {
    "deliveryTime": 34,
    "lastMileTravel": 4.6,
    "serviceability": "SERVICEABLE",
    "slaString": "34 mins",
    "lastMileTravelString": "4.6 km",
    "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
    "nextCloseTime": "2024-01-21 01:00:00",
    "opened": true
    },
    "badges": {},
    "isOpen": true,
    "type": "F",
    "badgesV2": {
    "entityBadges": {
    "imageBased": {},
    "textBased": {},
    "textExtendedBadges": {}
    }
    },
    "aggregatedDiscountInfoV3": {
    "header": "₹120 OFF",
    "subHeader": "ABOVE ₹199",
    "discountTag": "FLAT DEAL"
    },
    "differentiatedUi": {
    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    "differentiatedUiMediaDetails": {
    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
    "lottie": {},
    "video": {}
    }
    },
    "reviewsSummary": {},
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {}
    },
    "analytics": {},
    "cta": {
    "link": "https://www.swiggy.com/restaurants/kfc-marathahalli-bangalore-43910",
    "type": "WEBLINK"
    }
    },
    {
    "info": {
    "id": "249717",
    "name": "The Good Bowl",
    "cloudinaryImageId": "6e04be27387483a7c00444f8e8241108",
    "locality": "Tulasi theater",
    "areaName": "Marathahalli",
    "costForTwo": "₹400 for two",
    "cuisines": [
    "Biryani",
    "Pastas",
    "Punjabi",
    "Desserts",
    "Beverages"
    ],
    "avgRating": 4,
    "parentId": "7918",
    "avgRatingString": "4.0",
    "totalRatingsString": "500+",
    "sla": {
    "deliveryTime": 29,
    "lastMileTravel": 1.7,
    "serviceability": "SERVICEABLE",
    "slaString": "29 mins",
    "lastMileTravelString": "1.7 km",
    "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
    "nextCloseTime": "2024-01-20 23:59:00",
    "opened": true
    },
    "badges": {
    "textExtendedBadges": [
    {
    "iconId": "guiltfree/GF_Logo_android_3x",
    "shortDescription": "options available",
    "fontColor": "#7E808C"
    }
    ]
    },
    "isOpen": true,
    "type": "F",
    "badgesV2": {
    "entityBadges": {
    "imageBased": {},
    "textBased": {},
    "textExtendedBadges": {
    "badgeObject": [
    {
    "attributes": {
    "description": "",
    "fontColor": "#7E808C",
    "iconId": "guiltfree/GF_Logo_android_3x",
    "shortDescription": "options available"
    }
    }
    ]
    }
    }
    },
    "aggregatedDiscountInfoV3": {
    "header": "₹120 OFF",
    "subHeader": "ABOVE ₹199",
    "discountTag": "FLAT DEAL"
    },
    "differentiatedUi": {
    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    "differentiatedUiMediaDetails": {
    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
    "lottie": {},
    "video": {}
    }
    },
    "reviewsSummary": {},
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {}
    },
    "analytics": {},
    "cta": {
    "link": "https://www.swiggy.com/restaurants/the-good-bowl-tulasi-theater-marathahalli-bangalore-249717",
    "type": "WEBLINK"
    }
    },
    {
    "info": {
    "id": "457821",
    "name": "Istah - The Mediterranean Way",
    "cloudinaryImageId": "67d4a416bf932f850b0a15ad33aae762",
    "locality": "Munnekolala",
    "areaName": "Marathahalli",
    "costForTwo": "₹250 for two",
    "cuisines": [
    "Mediterranean",
    "Snacks",
    "Biryani",
    "Grill",
    "Kebabs",
    "Arabian",
    "Lebanese",
    "Beverages",
    "Desserts",
    "Italian",
    "Turkish"
    ],
    "avgRating": 4.4,
    "parentId": "3518",
    "avgRatingString": "4.4",
    "totalRatingsString": "5K+",
    "sla": {
    "deliveryTime": 22,
    "lastMileTravel": 1.3,
    "serviceability": "SERVICEABLE",
    "slaString": "22 mins",
    "lastMileTravelString": "1.3 km",
    "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
    "nextCloseTime": "2024-01-21 02:00:00",
    "opened": true
    },
    "badges": {
    "imageBadges": [
    {
    "imageId": "v1690360529/Ratnesh_Badges/Only_on_swiggy_badge_4x.png",
    "description": "OnlyOnSwiggy"
    }
    ],
    "textExtendedBadges": [
    {
    "iconId": "guiltfree/GF_Logo_android_3x",
    "shortDescription": "options available",
    "fontColor": "#7E808C"
    }
    ]
    },
    "isOpen": true,
    "type": "F",
    "badgesV2": {
    "entityBadges": {
    "imageBased": {
    "badgeObject": [
    {
    "attributes": {
    "description": "OnlyOnSwiggy",
    "imageId": "v1690360529/Ratnesh_Badges/Only_on_swiggy_badge_4x.png"
    }
    }
    ]
    },
    "textBased": {},
    "textExtendedBadges": {
    "badgeObject": [
    {
    "attributes": {
    "description": "",
    "fontColor": "#7E808C",
    "iconId": "guiltfree/GF_Logo_android_3x",
    "shortDescription": "options available"
    }
    }
    ]
    }
    }
    },
    "aggregatedDiscountInfoV3": {
    "header": "EVERY ITEM",
    "subHeader": "@ ₹139"
    },
    "differentiatedUi": {
    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    "differentiatedUiMediaDetails": {
    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
    "lottie": {},
    "video": {}
    }
    },
    "reviewsSummary": {},
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {}
    },
    "analytics": {},
    "cta": {
    "link": "https://www.swiggy.com/restaurants/istah-the-mediterranean-way-munnekolala-marathahalli-bangalore-457821",
    "type": "WEBLINK"
    }
    },
    {
    "info": {
    "id": "249713",
    "name": "Behrouz Biryani",
    "cloudinaryImageId": "89fccaa76f2f760e2742b9e53d32bb69",
    "locality": "Tulasi theater",
    "areaName": "Marathahalli",
    "costForTwo": "₹500 for two",
    "cuisines": [
    "Biryani",
    "North Indian",
    "Kebabs",
    "Mughlai",
    "Lucknowi",
    "Hyderabadi",
    "Desserts",
    "Beverages"
    ],
    "avgRating": 4.2,
    "parentId": "1803",
    "avgRatingString": "4.2",
    "totalRatingsString": "1K+",
    "sla": {
    "deliveryTime": 34,
    "lastMileTravel": 1.7,
    "serviceability": "SERVICEABLE",
    "slaString": "34 mins",
    "lastMileTravelString": "1.7 km",
    "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
    "nextCloseTime": "2024-01-20 23:59:00",
    "opened": true
    },
    "badges": {
    "textExtendedBadges": [
    {
    "iconId": "guiltfree/GF_Logo_android_3x",
    "shortDescription": "options available",
    "fontColor": "#7E808C"
    }
    ]
    },
    "isOpen": true,
    "type": "F",
    "badgesV2": {
    "entityBadges": {
    "imageBased": {},
    "textBased": {},
    "textExtendedBadges": {
    "badgeObject": [
    {
    "attributes": {
    "description": "",
    "fontColor": "#7E808C",
    "iconId": "guiltfree/GF_Logo_android_3x",
    "shortDescription": "options available"
    }
    }
    ]
    }
    }
    },
    "aggregatedDiscountInfoV3": {
    "header": "₹120 OFF",
    "subHeader": "ABOVE ₹199",
    "discountTag": "FLAT DEAL"
    },
    "differentiatedUi": {
    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    "differentiatedUiMediaDetails": {
    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
    "lottie": {},
    "video": {}
    }
    },
    "reviewsSummary": {},
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {}
    },
    "analytics": {},
    "cta": {
    "link": "https://www.swiggy.com/restaurants/behrouz-biryani-tulasi-theater-marathahalli-bangalore-249713",
    "type": "WEBLINK"
    }
    },
    {
    "info": {
    "id": "6911",
    "name": "FreshMenu",
    "cloudinaryImageId": "6c4de7b481d3614370e5062b2f33e7d6",
    "locality": "Gulmohar road",
    "areaName": "Marathahalli",
    "costForTwo": "₹250 for two",
    "cuisines": [
    "Continental",
    "Chinese",
    "Oriental",
    "Asian",
    "Healthy Food",
    "Fast Food",
    "Indian",
    "Desserts"
    ],
    "avgRating": 4.1,
    "parentId": "398",
    "avgRatingString": "4.1",
    "totalRatingsString": "10K+",
    "sla": {
    "deliveryTime": 26,
    "lastMileTravel": 1.3,
    "serviceability": "SERVICEABLE",
    "slaString": "26 mins",
    "lastMileTravelString": "1.3 km",
    "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
    "nextCloseTime": "2024-01-21 01:00:00",
    "opened": true
    },
    "badges": {
    "textExtendedBadges": [
    {
    "iconId": "guiltfree/GF_Logo_android_3x",
    "shortDescription": "options available",
    "fontColor": "#7E808C"
    }
    ]
    },
    "isOpen": true,
    "type": "F",
    "badgesV2": {
    "entityBadges": {
    "imageBased": {},
    "textBased": {},
    "textExtendedBadges": {
    "badgeObject": [
    {
    "attributes": {
    "description": "",
    "fontColor": "#7E808C",
    "iconId": "guiltfree/GF_Logo_android_3x",
    "shortDescription": "options available"
    }
    }
    ]
    }
    }
    },
    "aggregatedDiscountInfoV3": {
    "header": "EVERY ITEM",
    "subHeader": "@ ₹133"
    },
    "differentiatedUi": {
    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    "differentiatedUiMediaDetails": {
    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
    "lottie": {},
    "video": {}
    }
    },
    "reviewsSummary": {},
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {}
    },
    "analytics": {},
    "cta": {
    "link": "https://www.swiggy.com/restaurants/freshmenu-gulmohar-road-marathahalli-bangalore-6911",
    "type": "WEBLINK"
    }
    },
    {
    "info": {
    "id": "390620",
    "name": "The Belgian Waffle Co.",
    "cloudinaryImageId": "5116a385bac0548e06c33c08350fbf11",
    "locality": "Tulasi Theater Road",
    "areaName": "Marathahalli",
    "costForTwo": "₹200 for two",
    "cuisines": [
    "Waffle",
    "Desserts",
    "Ice Cream"
    ],
    "avgRating": 4.2,
    "veg": true,
    "parentId": "2233",
    "avgRatingString": "4.2",
    "totalRatingsString": "1K+",
    "sla": {
    "deliveryTime": 35,
    "lastMileTravel": 1.7,
    "serviceability": "SERVICEABLE",
    "slaString": "35 mins",
    "lastMileTravelString": "1.7 km",
    "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
    "nextCloseTime": "2024-01-20 23:59:00",
    "opened": true
    },
    "badges": {},
    "isOpen": true,
    "type": "F",
    "badgesV2": {
    "entityBadges": {
    "imageBased": {},
    "textBased": {},
    "textExtendedBadges": {}
    }
    },
    "aggregatedDiscountInfoV3": {
    "header": "₹120 OFF",
    "subHeader": "ABOVE ₹199",
    "discountTag": "FLAT DEAL"
    },
    "differentiatedUi": {
    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    "differentiatedUiMediaDetails": {
    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
    "lottie": {},
    "video": {}
    }
    },
    "reviewsSummary": {},
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {}
    },
    "analytics": {},
    "cta": {
    "link": "https://www.swiggy.com/restaurants/the-belgian-waffle-co-tulasi-theater-road-marathahalli-bangalore-390620",
    "type": "WEBLINK"
    }
    },
    {
    "info": {
    "id": "32398",
    "name": "The Bowl Company",
    "cloudinaryImageId": "bb6049fae59b8a2413a9177eb0338b49",
    "locality": "Munnekollal",
    "areaName": "Marathahalli",
    "costForTwo": "₹300 for two",
    "cuisines": [
    "Pan-Asian",
    "Continental",
    "North Indian",
    "Desserts",
    "American",
    "Asian",
    "Beverages",
    "Biryani",
    "Chinese",
    "European",
    "Grill",
    "Hyderabadi",
    "Indian",
    "Italian",
    "Kebabs",
    "Lucknowi",
    "Mediterranean",
    "Mexican",
    "Mughlai",
    "Oriental",
    "Pastas",
    "Punjabi",
    "Raja"
    ],
    "avgRating": 4.4,
    "parentId": "4317",
    "avgRatingString": "4.4",
    "totalRatingsString": "10K+",
    "sla": {
    "deliveryTime": 20,
    "lastMileTravel": 1.3,
    "serviceability": "SERVICEABLE",
    "slaString": "20 mins",
    "lastMileTravelString": "1.3 km",
    "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
    "nextCloseTime": "2024-01-21 02:00:00",
    "opened": true
    },
    "badges": {
    "imageBadges": [
    {
    "imageId": "v1690360529/Ratnesh_Badges/Only_on_swiggy_badge_4x.png",
    "description": "OnlyOnSwiggy"
    }
    ]
    },
    "isOpen": true,
    "type": "F",
    "badgesV2": {
    "entityBadges": {
    "imageBased": {
    "badgeObject": [
    {
    "attributes": {
    "description": "OnlyOnSwiggy",
    "imageId": "v1690360529/Ratnesh_Badges/Only_on_swiggy_badge_4x.png"
    }
    }
    ]
    },
    "textBased": {},
    "textExtendedBadges": {}
    }
    },
    "aggregatedDiscountInfoV3": {
    "header": "₹120 OFF",
    "subHeader": "ABOVE ₹199",
    "discountTag": "FLAT DEAL"
    },
    "differentiatedUi": {
    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    "differentiatedUiMediaDetails": {
    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
    "lottie": {},
    "video": {}
    }
    },
    "reviewsSummary": {},
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {}
    },
    "analytics": {},
    "cta": {
    "link": "https://www.swiggy.com/restaurants/the-bowl-company-munnekollal-marathahalli-bangalore-32398",
    "type": "WEBLINK"
    }
    },
    {
    "info": {
    "id": "249712",
    "name": "Faasos - Wraps, Rolls & Shawarma",
    "cloudinaryImageId": "af33b81798b11deba338e94b7585d348",
    "locality": "Tulasi theater",
    "areaName": "Marathahalli",
    "costForTwo": "₹200 for two",
    "cuisines": [
    "Kebabs",
    "Fast Food",
    "Snacks",
    "American",
    "Healthy Food",
    "Desserts",
    "Beverages"
    ],
    "avgRating": 4.2,
    "parentId": "21809",
    "avgRatingString": "4.2",
    "totalRatingsString": "1K+",
    "sla": {
    "deliveryTime": 30,
    "lastMileTravel": 1.7,
    "serviceability": "SERVICEABLE",
    "slaString": "30 mins",
    "lastMileTravelString": "1.7 km",
    "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
    "nextCloseTime": "2024-01-20 23:59:00",
    "opened": true
    },
    "badges": {
    "textExtendedBadges": [
    {
    "iconId": "guiltfree/GF_Logo_android_3x",
    "shortDescription": "options available",
    "fontColor": "#7E808C"
    }
    ]
    },
    "isOpen": true,
    "type": "F",
    "badgesV2": {
    "entityBadges": {
    "imageBased": {},
    "textBased": {},
    "textExtendedBadges": {
    "badgeObject": [
    {
    "attributes": {
    "description": "",
    "fontColor": "#7E808C",
    "iconId": "guiltfree/GF_Logo_android_3x",
    "shortDescription": "options available"
    }
    }
    ]
    }
    }
    },
    "aggregatedDiscountInfoV3": {
    "header": "₹120 OFF",
    "subHeader": "ABOVE ₹199",
    "discountTag": "FLAT DEAL"
    },
    "differentiatedUi": {
    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    "differentiatedUiMediaDetails": {
    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
    "lottie": {},
    "video": {}
    }
    },
    "reviewsSummary": {},
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {}
    },
    "analytics": {},
    "cta": {
    "link": "https://www.swiggy.com/restaurants/faasos-wraps-rolls-and-shawarma-tulasi-theater-marathahalli-bangalore-249712",
    "type": "WEBLINK"
    }
    },
    {
    "info": {
    "id": "29668",
    "name": "Natural Ice Cream",
    "cloudinaryImageId": "fmdguoqdtuu2vihs3iez",
    "locality": "Indiranagar",
    "areaName": "Indiranagar",
    "costForTwo": "₹150 for two",
    "cuisines": [
    "Ice Cream",
    "Desserts"
    ],
    "avgRating": 4.7,
    "parentId": "2093",
    "avgRatingString": "4.7",
    "totalRatingsString": "10K+",
    "sla": {
    "deliveryTime": 34,
    "lastMileTravel": 7.7,
    "serviceability": "SERVICEABLE",
    "slaString": "34 mins",
    "lastMileTravelString": "7.7 km",
    "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
    "nextCloseTime": "2024-01-20 23:55:00",
    "opened": true
    },
    "badges": {},
    "isOpen": true,
    "type": "F",
    "badgesV2": {
    "entityBadges": {
    "imageBased": {},
    "textBased": {},
    "textExtendedBadges": {}
    }
    },
    "aggregatedDiscountInfoV3": {
    "header": "₹120 OFF",
    "subHeader": "ABOVE ₹199",
    "discountTag": "FLAT DEAL"
    },
    "differentiatedUi": {
    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    "differentiatedUiMediaDetails": {
    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
    "lottie": {},
    "video": {}
    }
    },
    "reviewsSummary": {},
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {}
    },
    "analytics": {},
    "cta": {
    "link": "https://www.swiggy.com/restaurants/natural-ice-cream-indiranagar-bangalore-29668",
    "type": "WEBLINK"
    }
    },
    {
    "info": {
    "id": "89710",
    "name": "NIC Ice Creams",
    "cloudinaryImageId": "85825a6d74b1059a63a9b688de9f67ce",
    "locality": "Marathahalli",
    "areaName": "Chinnappanhalli",
    "costForTwo": "₹120 for two",
    "cuisines": [
    "Ice Cream",
    "Desserts"
    ],
    "avgRating": 4.6,
    "veg": true,
    "parentId": "6249",
    "avgRatingString": "4.6",
    "totalRatingsString": "10K+",
    "sla": {
    "deliveryTime": 19,
    "lastMileTravel": 1.9,
    "serviceability": "SERVICEABLE",
    "slaString": "19 mins",
    "lastMileTravelString": "1.9 km",
    "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
    "nextCloseTime": "2024-01-21 02:00:00",
    "opened": true
    },
    "badges": {
    "textExtendedBadges": [
    {
    "iconId": "guiltfree/GF_Logo_android_3x",
    "shortDescription": "brand",
    "fontColor": "#7E808C"
    }
    ]
    },
    "isOpen": true,
    "type": "F",
    "badgesV2": {
    "entityBadges": {
    "imageBased": {},
    "textBased": {},
    "textExtendedBadges": {
    "badgeObject": [
    {
    "attributes": {
    "description": "",
    "fontColor": "#7E808C",
    "iconId": "guiltfree/GF_Logo_android_3x",
    "shortDescription": "brand"
    }
    }
    ]
    }
    }
    },
    "aggregatedDiscountInfoV3": {
    "header": "ITEMS",
    "subHeader": "AT ₹169"
    },
    "differentiatedUi": {
    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    "differentiatedUiMediaDetails": {
    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
    "lottie": {},
    "video": {}
    }
    },
    "reviewsSummary": {},
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {}
    },
    "analytics": {},
    "cta": {
    "link": "https://www.swiggy.com/restaurants/nic-ice-creams-marathahalli-chinnappanhalli-bangalore-89710",
    "type": "WEBLINK"
    }
    }
]


const RestaurentCard = (props) => {
    const {name, cuisines, avgRating, costForTwo, cloudinaryImageId} = props?.data?.info;
    return (
        <div className="rest-card">
            <img width="100%" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + cloudinaryImageId}/>
            <h3>{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{avgRating} stars</h4>
            <h4>{costForTwo}</h4>
        </div>
    );
}

const BodyComponent = () => {
    return (
        <div className="body">
            <div className="search">Search</div>
            <div className="rest-container">
                {restaurentData.map((data) => <RestaurentCard key={data.info.id} data={data} />)}
            </div>
        </div>
    );
}

const AppComponent = () => {
    return (
        <div className="app">
            <HeaderComponent />
            <BodyComponent />
        </div>
    );
}


ReactDOM.createRoot(document.getElementById("root")).render(<AppComponent/>);