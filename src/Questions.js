const Quiz = [
    {   
        sujet: "Un projet d'application quiz (des questions relatives à l'afrique)",
        quiz:{
            Debutant:[
               
                {
                    id: 1,
                    question:"Quelle est la capitale du Sénégal ?",
                    options:["Accra","Abuja","Dakar","Livre-ville"],
                    answer:"Dakar",
                    complement: {
                        img: "",
                        infos: `Le Sénégal se situe à l'avancée la plus occidentale du continent africain dans l'Océan Atlantique, au confluent de l'Europe, de l'Afrique et des Amériques, et à un carrefour de grandes routes maritimes et aériennes.
                        D’une superficie de 196 722 km2, il est limité au nord par la Mauritanie, à l’est par le Mali, au sud par la Guinée et la Guinée Bissau, à l’ouest par la Gambie, et par l’Océan Atlantique sur une façade de 500 km. Dakar (550 km2), la capitale, est une presqu’île située à l’extrême Ouest.
                        Pays plat aux sols sablonneux ne dépassant pas 130 m d’altitude sauf à la frontière sud-est vers la Guinée. Trois fleuves traversent le pays d’est en ouest : le Sénégal (1700 km) au nord, la Gambie (750 km) et la Casamance (300 km) au sud.
                        Climat tropical sec caractérisé par deux saisons : une saison sèche de novembre à juin et une saison des pluies de juillet à octobre. Trois types de végétation : forêt au sud, savane au centre et steppe au nord.
                        La République du Sénégal est laïque, démocratique et sociale. Elle assure l’égalité devant la loi de tous les citoyens, sans distinction d’origine, de race, de sexe, de religion. Elle respecte toutes les croyances.
                        La langue officielle de la République du Sénégal est le français. Les langues nationales sont le Diola, le Malinké, le Pular, le Sérère, le Soninké, le Wolof et toute autre langue nationale qui sera codifiée.
                        Quatorze régions dont les chefs-lieux sont les principales villes : Dakar, Diourbel, Fatick, Kaffrine, Kédougou, Kaolack, Kolda, Louga, Matam, Saint Louis, Sédhiou, Tambacounda, Thiès, Ziguinchor.`
                    }
                },
                {
                    id: 2,
                    question:"Quel est ce fleuve africain d'une longueur de 6700km ?",
                    options:["Le fleuve de...","Le fleuve du Nil", "Le fleuve...","Le fleuve Amazone"],
                    answer:"Le fleuve du Nil",
                    complement: {
                        img: require("./assets/images/nil.jpg"),
                        infos: `Le Nil est un fleuve d'Afrique. Avec une longueur d'environ 6 700km, c'est avec le fleuve Amazone, le plus long fleuve du monde. Il est issu de la rencontre du Nil Blanc et du Nil Bleu. Le Nil Blanc prend sa source au lac Victoria (Ouganda, Kenya, Tanzanie) ; le Nil Bleu est issu du lac Tana (Éthiopie). Ses deux branches s'unissant à Khartoum, capitale du Soudan actuel, le Nil se jette dans la Méditerranée en formant un delta au nord de l'Égypte. En comptant ses deux branches, le Nil traverse le Rwanda, le Burundi, la Tanzanie, l'Ouganda, l'Éthiopie, le Soudan du Sud, le Soudan et l'Égypte. Il longe également le Kenya et la République démocratique du Congo (respectivement avec les lacs Victoria et Albert), et son bassin versant concerne aussi l'Érythrée grâce à son affluent du Tekezé.
                        Le Nil est la voie qu'empruntaient les Égyptiens pour se déplacer. Il apporte la vie en fertilisant la terre et garantit l'abondance. Il joua un rôle très important dans l'Égypte antique, du point de vue économique, social, agricole et religieux. Fleuve nourricier de cette civilisation, il fut divinisé sous le nom d'Hâpy, personnifiant la crue du Nil dans la mythologie égyptienne.
                        La crue du Nil, qui avait lieu chaque été et qui apportait le limon noir permettant la culture de ses rives, est restée longtemps un phénomène inexpliqué. C'est de ce limon noir que vient le nom antique de l'Égypte, Kemet, qui veut dire « la terre noire ».
                        De nos jours, les eaux limoneuses du Nil sont captées et redistribuées sur les terres agricoles grâce aux barrages de Ziftah, d'Assiout, d'Hammadi, d'Esna et surtout aux deux barrages géants d'Assouan, l'ancien et le grand barrage, dont la construction dans les années 1970 a nécessité le déplacement de plusieurs temples dont ceux d'Abou Simbel, qui auraient été noyés dans la retenue du lac Nasser.`
                    }
                },
                {
                    id: 3,
                    question:"Quel est cet empire africain(du 3e au 13e siecle), dont un pays africain porte le meme nom ?",
                    options:["L'empire du mali","L'empire du songhai", "L'empire du Djolof", "L'empire du Ghana"],
                    answer:"L'empire du Ghana",
                    complement:{
                        img: require("./assets/images/empire-ghana.jpg"),
                        infos:`L'empire du Ghana est un ancien empire africain qui a existé du 3e au 13e siècle de notre ère dont le centre se trouve dans la zone frontalière actuelle entre le Mali et la Mauritanie. Deux thèses existent néanmoins sur ses origines.
                        D’après la première issue de la tradition orale, la fondation du royaume qui aurait eu lieu vers le 5e siècle avant Jésus-Christ, d’un homme venu de l’Est nommé DINGA CISSE. Selon la seconde issue des sources médiévales, rédigées par les chroniqueurs arabophones, et attestées par les historiens africains comme CHEICKH ANTA DIOP, le royaume aurait été fondé par les Soninké ou Sarakollé vivant à la limite Sud du Sahara. Désigné par ses habitants comme l’empire Wagadou qui signifie « ville des troupeaux ». Ce royaume s’est constitué au 7e siècle avant Jésus-Christ avec l’exportation d’or et de sel qui s’étendait du moyen Sénégal à la région actuelle Tombouctou. L’occupation du Maghreb par les arabes favorise le trafic de l’or et des esclaves entre le Ghana et le Sijilmassa et du même coup son expansion et sa richesse.
                        L’empire connait sa plus grande puissance fin 10e siècle et début 11e siècle sous le règne du souverain KHAYA-MAGHAN CISSE. Au 11e siècle l’empire s’étendait jusqu’aux mines d’or de la Falème et du Bambouck, touchait les rives du Niger et atteignait la région du Tombouctou. A l’Ouest, il couvrait les parties orientales et centrales de la Mauritanie actuelle. Au Nord, il se perdait dans le Sahara.
                        Son organisation politique était comme suit : L’empereur du clan des Cissé portait le titre de KHAYA-MAGHAN ce qui signifie « le roi de l’or ». Son pouvoir absolu et divin revenait à son neveu après sa mort.
                        Le gouvernement composé de nombreux ministres et dirigé par le premier ministre, le confident de l’empereur formait avec les anciens le conseil impérial qui décidait sur Tout.
                        L’organisation militaire très précise était constituée de 12 patriarches conseillers, 18 généraux Nana, 12 Fado, gouverneurs militaires responsables des régions, 12 Hida officiers supérieurs, 18 éclaireurs, 7 notables, 4 responsables de la police.
                        Les activités économiques reposaient sur l’agriculture (mil, blé dur, riz), l’élevage (petit bétail) et le commerce particulièrement de l’or, du sel sahélien, du cuivre et des esclaves.
                        La société également était parfaitement organisée, la famille étant la cellule de base. Plusieurs familles formaient des clans organisés en tribus. L’empire était composé de deux cités : l’une musulmane constituée d’arabo-berbères vivant à l’écart dans leurs propres quartiers et l’autre où résidait le TOUNKARA d’autochtones « animistes » adorait les phénomènes de la nature, le Ougadou Bida (python) et croyaient à l’immortalité de l’âme.`
                    }
                },
                {
                    id: 4,
                    question:"L’Afrique est le berceau de l’humanité !",
                    options:["Vrai","Faux","Je passe", "C'est plutot l'Europe"],
                    answer:"Vrai",
                    complement: {
                        img: "",
                        infos: `L’Afrique est le berceau de l’humanité. L’homme tel que nous le connaissons dans sa diversité actuelle, 
                        de toutes les couleurs et avec différents phénotypes (Homo Sapiens) a évidemment des ancêtres. Les ancêtres d’Homo 
                        Sapiens apparaissent en Afrique parmi les primates il y a au moins 7 millions d’années. Mais Homo Sapiens, 
                        leur descendant, lui aussi est apparu en Afrique il y a au moins 300 000 ans et il était noir 
                        (pour des raisons climatiques évidentes).`
                    }
                },
                {
                    id: 5,
                    question:"Qui est Sékou Touré ?",
                    options:["Un footballeur béninois","Le premier président de la Guinée Conakry","Un artiste malien","L'avocat de Nelson Mandela"],
                    answer:"Le premier président de la Guinée Conakry",
                    complement: {
                        img: require("./assets/images/sekou-toure.jpg"),
                        infos: `Homme d'État guinéen (Faranah 1922-Cleveland, Ohio, 1984). Secrétaire général de la C.G.T. en Afrique 
                        noire, et du parti démocratique de Guinée, section locale du Rassemblement démocratique africain (1952), il 
                        fut élu à l'Assemblée nationale française en1956 et devint la même année président de la Confédération générale 
                        des travailleurs d'Afrique noire avant d’accéder en 1957 à la vice-présidence du Conseil de Guinée. Lors du 
                        référendum de 1958 sur l'institution de la Communauté française organisé par le général de Gaulle, il appela 
                        à voter non, ce qui entraîna la sortie de la Guinée de l'Union française et la rupture avec la 
                        France. Élu en 1958, il demeura chef de l'État et du gouvernement jusqu'en 1984.`
                    }
                },
                {
                    id : 6,
                    question : "Combien de pays africain n'ont jamais été colonisés ?",
                    options : ["0", "1", "2" ,"3"],
                    answer : "2",
                    complement : {
                        img : "",
                        infos : `L'Éthiopie et le Libéria sont généralement considérés comme les deux seuls pays africains à n'avoir jamais été colonisés. Leur emplacement, leur viabilité économique et leur unité ont aidé l'Éthiopie et le Libéria à éviter la colonisation.
                        L'Éthiopie a été officiellement reconnue comme un État indépendant en 1896, après avoir vaincu de manière décisive les forces d'invasion italiennes lors de la bataille d'Adwa. Pendant sa brève occupation militaire pendant la Seconde Guerre mondiale, l'Italie n'a jamais établi de contrôle colonial sur l'Éthiopie.
                        Bien qu'il ait été fondé par les États-Unis en 1821 pour envoyer ses résidents noirs libres, le Libéria n'a jamais été colonisé après avoir obtenu sa pleine indépendance en 1847.`
                    }
                },
                {
                    id: 7,
                    question:"Qu'est ce que le panafricanisme ?",
                    options:[
                        "C'est une religion pratiquée essentiellement en Afrique australe",
                        "C'est une langue, sorte d'esperanto qui ne mélange que des langues africaines",
                        "C'est une méthode pour la recolte d'arachide",
                        "C'est mouvement qui vise à unifier les Africains."
                    ],
                    answer:"C'est mouvement qui vise à unifier les Africains.",
                    complement : {
                        img: "",
                        infos: `Le panafricanisme est un mouvement et une idéologie politiques qui promeut l'indépendance totale du continent africain et encourage la pratique de la solidarité entre les Africains et les personnes d'ascendance africaine, où qu'ils soient dans le monde, indépendamment 
                        de leurs origines ethniques, leurs appartenances religieuses, ou leurs apparences physiques
                        Le panafricanisme est à la fois une vision sociale, économique, culturelle et politique d'émancipation des Africains et un mouvement qui vise à unifier les Africains du continent et de la diaspora africaine en une communauté africaine mondiale. Le cœur de son principe consiste en la 
                        certitude que les peuples d'Afrique et de la diaspora partagent une histoire et une destinée commune et que leur progrès social, économique et politique est lié à leur unité. Son objectif ultime est la réalisation d'une organisation politique intégrée de toutes les nations et peuples d'Afrique.
                        A l'origine, le Panafricanisme était un mouvement politique et idéologique de l'intelligentsia afro-américaine qui a vu le jour dès le 18ème siècle, parmi l'élite africaine émergente autour des forteresses coloniales de la côte Ouest de l'Afrique et la colonie du Cap en Afrique du Sud.
                        Kwame Nkrumah est le premier à constituer une grande formation politique panafricaine en reprenant un ancien projet d'union ouest-africaine.
                        L'expansion du panafricanisme se retrouve dans les écrits et discours de quelques figures fondatrices, parmi lesquelles Edward Wilmot Blyden et Anténor Firmin. Au début du xxe siècle, d'autres figures telles que Bénito 
                        Sylvain, W. E. B. Du Bois ou Joel Augustus Rogers contribuent à l'affirmation politique du projet panafricain. Avec la décolonisation, celui-ci prend une ampleur nouvelle et se retrouve incarné par des dirigeants tels 
                        que Kwame Nkrumah. Encore aujourd'hui, le panafricanisme s'exprime en Afrique comme dans les anciennes puissances coloniales dans les domaines politique, économique, littéraire ou encore culturel. La plus large organisation panafricaine aujourd'hui est l'Union africaine.`
                    }
                },
                {
                    id: 8,
                    question:"Qu'est ce que la négritude ?",
                    options:[
                        "Un chant de libération du Niger",
                        "Un mouvement littéraire et politique",
                        "Une methode de travail",
                        "Une therapie medicale"
                    ],
                    answer:"Un mouvement littéraire et politique",
                    complement:{
                        img: "",
                        infos: `La négritude est un courant littéraire et politique, créé durant l'entre-deux-guerres, rassemblant des écrivains et des écrivaines francophones noirs, comme les sœurs Paulette et Jeanne Nardal 
                        (considérées comme les figures inspiratrices du mouvement), Aimé Césaire, Léopold Sédar Senghor, Jacques Rabemananjara, Léon-Gontran Damas, Guy Tirolien, Birago Diop et René Depestre. Lié notamment 
                        à l'anticolonialisme, le mouvement influença par la suite de nombreuses personnes proches du Black nationalism, s'étendant bien au-delà de l'espace francophone.
                        `
                    }
                },
                {
                    id: 9,
                    question:"Quel est l'ancien nom du Mali ?",
                    options:["Le Dahomey","La Haute-volta","L'Ile de France", "Le Soudan français"],
                    answer:"Le Dahomey",
                    complement: {
                        img: "",
                        infos: `Le Mali, en forme longue la république du Mali, avec ses 1 241 238 kilomètres carrés, est le plus vaste État d'Afrique de l'Ouest après le Niger. Il est enclavé à l’intérieur de l’Afrique occidentale entre le tropique du Cancer et l'Équateur. Il est traversé par deux grands fleuves : 
                        le Sénégal et le Niger. La plus grande part de la population habite en zone 
                        rurale. La densité, très variable, passe de 90 hab./km2 dans le delta central du Niger à moins de 5 hab./km2 dans la région saharienne du Nord.
                        Le pays possède des frontières communes avec la Mauritanie, l'Algérie, le Niger, le Burkina Faso, la Côte d'Ivoire, la Guinée et le Sénégal. Outre la capitale Bamako, les villes principales sont Kayes, Ségou, Mopti, Sikasso, Koulikoro, Kidal, Gao, Tombouctou.
                        Le Mali est devenu indépendant le 22 septembre 1960, après l'éclatement de la fédération du Mali regroupant le Sénégal et la République soudanaise. Sa devise est « un peuple, un but, une foi » et son drapeau est constitué de trois bandes verticales verte, jaune et rouge.
                        La république du Mali tient son nom de l'ancien empire du Mali fondé par Soundiata Keïta au 13e siècle et qui a connu son apogée au 14e siècle.
                        En 1959, les deux colonies françaises du Soudan français et du Sénégal fondent la fédération du Mali qui obtient son indépendance. Lors de l'éclatement de cette fédération, les Soudanais conduits par Modibo Keïta, déclarent leur indépendance et donnent à leur pays le nom de république 
                        du Mali. Le projet d'un retour de la fédération du Mali n'est toujours 
                        pas abandonné, le Mali étant un pays enclavé, le Sénégal étant son accès à la mer. 
                        Avec 20 millions de résidents, la population malienne est constituée de différentes ethnies, dont les principales sont les Bambaras, les Bobos, les Bozos, les Dogons, les Khassonkés, les Malinkés, les Miniankas, les Peuls, les Sénoufos, les Soninkés (ou Sarakolés), les Sonrhaïs, les 
                        Touaregs, les Toucouleurs. Le français est la langue officielle, mais la population parle majoritairement les langues nationales, le bambara étant la plus utilisée.`
                    }
                },
                {
                    id: 10,
                    question:"Quel est ce pays africain, avec une population plus de 200 millions d'habitants, principalement producteur de pétrole ?",
                    options:["Le Niger","Le Nigéria","L'Angola","La RDC"],
                    answer:"Le Nigéria",
                    complement: {
                        img: "",
                        infos:`Le Nigeria  en forme longue la république fédérale du Nigeria, est un pays d'Afrique de l'Ouest situé dans le golfe de Guinée. Avec plus de 219 millions d'habitants en 2021, le Nigeria est le pays le plus peuplé d'Afrique et le septième pays du monde par son nombre d'habitants.
                        Situé au bord du golfe de Guinée, le Nigeria possède 4047km de frontières terrestres, et 853km de littoral. Il est bordé à l'ouest par le Bénin (773km), à l'est-sud-est par le Cameroun (1690km), au nord par le Niger (1497km) et à l'est-nord-est par le Tchad (84km).
                        Le pays est la première puissance économique du continent africain en 2016. Le poids économique et démographique du Nigeria lui ont valu le surnom de « Géant d'Afrique ». Toutefois, malgré une production de pétrole importante et une économie diversifiée, le pays demeure relativement pauvre, notamment en raison d'une forte corruption. 
                        Depuis 1991, la capitale du Nigeria est la ville nouvelle d'Abuja. Le pays fait partie de la Communauté économique des États de l'Afrique de l'Ouest (CEDEAO) et de l'Organisation de la coopération islamique (OCI). Ses habitants sont les Nigérians.
                        Le Nigeria reste l'un des pays pilotes et phares de la CEDEAO : il a envoyé des soldats au Liberia et en Sierra Leone, et a proposé son aide pour résoudre de nombreuses crises. Récemment, il a proposé l'envoi de soldats pour résoudre le problème de la crise de la partition du Mali, où dans le nord de ce pays un mouvement fondamentaliste islamique avait tenté d'instaurer un État islamique indépendant. Le Nigeria est lui-même confronté à la secte islamique Boko Haram qui souhaite la partition du Nigeria, ce qui explique la forte implication de ce dernier au sein de la CEDEAO, sans pour autant que la langue soit une barrière.
                        Les Igbos, les Yorubas et les Haoussas sont les trois ethnies majoritaires du pays soumis à de fortes tensions entre musulmans et chrétiens.`
                    }
                }

            ],
            Intermediaire:[
                {
                    id: 11,
                    question:"Combien de pays africains ont des drapeaux vert-jaune-rouge (avec 0-1-2 étoile(s)) ?",
                    options:[5, 7, 11, 17],
                    answer:""
                },
                {
                    id: 12,
                    question:"Quelle est la capitale du Maroc ?",
                    options:["Dagana", "Alger","Accra","Rabat"],
                    answer:"Rabat"
                },
                {
                    id: 13,
                    question:"Dans quel océan se jette le fleuve Zambèze ?",
                    options:["Océan Indien","Océan Atlantique","Océan Pacifique","Océan Antarctique"],
                    answer:"Océan Indien"
                },
                {
                    id: 14,
                    question:"Quelle est cette péninsule de l'Afrique de l'Est qui s'étend depuis la côte sud de la mer Rouge jusqu'à la côte ouest de la mer d'Arabie ?",
                    options:["Détroit de l'Afrique", "Corne de l'Afrique", "Le Kilimandjaro","Détroit de Gilbraltar"],
                    answer:""
                },
                {
                    id: 15,
                    question:"Combien y a-t-il de pays en Afrique ?",
                    options:[54, 68, 53, 55],
                    answer: 54
                },
                {
                    id: 16,
                    question:"Quel est le classement du continent africain par rapport aux autres continents, en terme de population ?",
                    options:["1er","2e","3e","4e"],
                    answer:"2e"
                },



                {
                    id: 17,
                    question:"Combien y a-t-il de langues vivantes sur le continent africain ?",
                    options:["Environ 500","Environ 1000","Environ 2000","Environ 4000"],
                    answer:"Environ 2000"
                },
                {
                    id: 18,
                    question:"Dans quels pays se situent les chutes Victoria ?",
                    options:["Kenya et Tanzanie","Mozambique et Malawi","Zambie et Zimbabwe"],
                    answer:""
                },
                {
                    id: 19,
                    question:"Quel est le bon classement des 4 pays les plus riches en afrique (de l'année 2021) ?",
                    options:[
                        "Nigeria, Afrique du Sud, Egypte",
                        "Afrique du Sud, Nigeria, Egypte",
                        "Afrique du Sud, Egypte, Algerie",
                        "Nigeria, Angola, Ethiopie"
                    ],
                    answer: "Nigeria, Afrique du Sud, Egypte"
                },
                {
                    id: 20,
                    question:"Quel est le vrai nom de l'Afrique",
                    options:["Afrique","Africa","Alkebulan","Terre afrique"],
                    answer:"Alkebulan"
                },

            ]
        } 
    }
]



export default Quiz;