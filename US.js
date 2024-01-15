".country": "United States",

"27.enabled": true,
"54.enabled": true,
"55.enabled": true,
"90.enabled": true,
"106.enabled": true,
"112.enabled": false,
"150.enabled": true,
"150.params": {"n": 2},
"170.enabled": true,
"170.params": {
    "regexp": "/^(?!(to) [^a-z])((S|N|W|E) )?[a-z]/",
},
//  #171 ## Check for improper use of a period (.) that is not on the USA
//          recommended abbreviations list (PesachZ)
"171.enabled": true,
"171.solutionLink": "P:USA/Abbreviations_and_acronyms#Recommended_abbreviations_and_acronyms",
"171.params": {
    "regexp": "/((?!(\\bPhila|\\bPenna|.(\\bWash|\\bCmdr|\\bProf|\\bPres)|..(\\bAdm|\\bSte|\\bCpl|\\bMaj|\\bSgt|\\bRe[vc]|\\bR\\.R|\\bGov|\\bGen|\\bHon|\\bCpl)|...(\\bSt|\\b[JSD]r|\\bLt|\\bFt)|...(#| )[NEWSR])).{5}\\.|((?!(hila|enna|(\\bWash|\\bCmdr|\\bProf|\\bPres)|.(\\bAdm|\\bSte|\\bCpl|\\bMaj|\\bSgt|\\bRe[vc]|\\bR\\.R|\\bGov|\\bGen|\\bHon|\\bCpl)|..(\\bSt|\\b[JSD]r|\\bLt|\\bFt)|..(#| )[NEWSR])).{4}|(\\bhila|\\benna))\\.|((?!(ila|nna|(ash|mdr|rof|res)|(\\bAdm|\\bSte|\\bCpl|\\bMaj|\\bSgt|\\bRe[vc]|\\bR\\.R|\\bGov|\\bGen|\\bHon|\\bCpl)|.(\\bSt|\\b[JSD]r|\\bLt|\\bFt)|.(#| )[NEWSR])).{3}|\\b(ila|nna|ash|mdr|rof|res))\\.|((?!(la|na|(sh|dr|of|es)|(dm|te|pl|aj|gt|e[vc]|\\.R|ov|en|on|pl)|(\\bSt|\\b[JSD]r|\\bLt|\\bFt)|(#| )[NEWSR])).{2}|\\b(la|na|sh|dr|of|es|dm|te|pl|aj|gt|e[vc]|\\.R|ov|en|on|pl))\\.|(#|^)[^NEWSR]?\\.)|(((?!\\b(D|O|L)).|#|^)\'(?![sl]\\b)|(#|^)\'s|(?!\\b(In|Na)t).{3}\'l|(#|^).{0,2}\'l)|(Dr|St)\\.(#|$)|,|;|\\\\|((?!\\.( |#|$|R))\\..|(?!\\.( .|#.|$|R\\.))\\..{2}|\\.R(#|$|\\.R))|[Ee]x(p|w)y\\b|\\b[Ee]x[dn]\\b|Tunl\\b|Long Is\\b|Brg\\b/",
    "problemEN": "The street name has incorrect abbreviation, or character",
    "solutionEN": "Check upper/lower case, a space before/after the abbreviation and the accordance with the abbreviation table. Remove any comma (,), backslash (\\), or semicolon (;)"
},
"29.problem": "Verify if roundabout should be named",
"29.problemLink": "P:USA/Roundabout#Creation_from_an_intersection",
"29.solution": "If the roundabout doesn't have a name, which is usually the case, click the None box next to Street. If the roundabout is a named circle on local signs, its segments can be named just like any other road.",
"29.solutionLink": "P:Global/Creating_and_editing_road_segments#Address_Properties",
"257.params": {
    "regexp.title": "{string} regular expression to match categories that should be a area",
    "regexp": "/^(GAS_STATION|PARKING_LOT|AIRPORT|BRIDGE|JUNCTION_INTERCHANGE|REST_AREAS|SEAPORT_MARINA_HARBOR|TUNNEL|CEMETERY|COLLEGE_UNIVERSITY|CONVENTIONS_EVENT_CENTER|EMBASSY_CONSULATE|FIRE_DEPARTMENT|HOSPITAL_URGENT_CARE|MILITARY|POLICE_STATION|PRISON_CORRECTIONAL_FACILITY|SCHOOL|SHOPPING_CENTER|CASINO|RACING_TRACK|STADIUM_ARENA|THEME_PARK|ZOO_AQUARIUM|CONSTRUCTION_SITE|BEACH|GOLF_COURSE|PARK|SKI_AREA|FOREST_GROVE|ISLAND|SEA_LAKE_POOL|RIVER_STREAM|CANAL|SWAMP_MARSH|DAM)$/",
},
"258.params": {
    "regexp.title": "{string} regular expression to match categories that should be a point",
    "regexp": "/^(GARAGE_AUTOMOTIVE_SHOP|CAR_WASH|CHARGING_STATION|BUS_STATION|FERRY_PIER|SUBWAY_STATION|TRAIN_STATION|TAXI_STATION|GOVERNMENT|LIBRARY|CITY_HALL|ORGANIZATION_OR_ASSOCIATION|COURTHOUSE|DOCTOR_CLINIC|OFFICES|POST_OFFICE|RELIGIOUS_CENTER|KINDERGARDEN|FACTORY_INDUSTRIAL|INFORMATION_POINT|EMERGENCY_SHELTER|TRASH_AND_RECYCLING_FACILITIES|ARTS_AND_CRAFTS|BANK_FINANCIAL|SPORTING_GOODS|BOOKSTORE|PHOTOGRAPHY|CAR_DEALERSHIP|FASHION_AND_CLOTHING|CONVENIENCE_STORE|PERSONAL_CARE|DEPARTMENT_STORE|PHARMACY|ELECTRONICS|FLOWERS|FURNITURE_HOME_STORE|GIFTS|GYM_FITNESS|SWIMMING_POOL|HARDWARE_STORE|MARKET|SUPERMARKET_GROCERY|JEWELRY|LAUNDRY_DRY_CLEAN|MUSIC_STORE|PET_STORE_VETERINARIAN_SERVICES|TOY_STORE|TRAVEL_AGENCY|ATM|CURRENCY_EXCHANGE|CAR_RENTAL|TELECOM|RESTAURANT|BAKERY|DESSERT|CAFE|FAST_FOOD|FOOD_COURT|BAR|ICE_CREAM|ART_GALLERY|CLUB|TOURIST_ATTRACTION_HISTORIC_SITE|MOVIE_THEATER|MUSEUM|MUSIC_VENUE|PERFORMING_ARTS_VENUE|GAME_CLUB|THEATER|HOTEL|HOSTEL|COTTAGE_CABIN|BED_AND_BREAKFAST|PLAYGROUND|SPORTS_COURT|PLAZA|PROMENADE|POOL|SCENIC_LOOKOUT_VIEWPOINT)$/",
},
