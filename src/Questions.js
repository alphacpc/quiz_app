const Quiz = [
    {   
        sujet: "Un projet d'application quiz (des questions relatives à l'afrique)",
        quiz:{
            Debutant:[
               
                {
                    id: 1,
                    question:"Quelle est la capitale du Sénégal ?",
                    options:["Accra","Abuja","Dakar","Libreville"],
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
                    options:["Le fleuve Orange","Le fleuve du Nil", "Le fleuve Niger","Le fleuve Congo"],
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
                    options:[10, 11, 12, 13],
                    answer:13,
                    complement: {
                        img: "",
                        infos:`Les couleurs panafricaines sont trois couleurs ; le rouge, le jaune et le vert : utilisées par beaucoup 
                        de pays d'Afrique dans leurs drapeaux, en particulier en Afrique de l'Ouest. Ces couleurs proviennent du drapeau 
                        de l'Éthiopie, l’une des seules nations d’Afrique à avoir conservé sa souveraineté pendant le démembrement de 
                        l’Afrique au 19e siècle. Le Ghana est le premier pays à arborer ces couleurs lors de son accession à 
                        l'indépendance en 1957. Ainsi, le vert représente l’espoir mais aussi la verdure du continent africain. 
                        Le rouge, lui, rappelle le courage des ancêtres du pays en symbolisant le sang versé par les esclaves. 
                        Le jaune est le symbole de la puissance et de l’or, richesses de l’Afrique. De nos jours, on peut lister 
                        ces pays comme ayant les couleurs: la Mauritanie, le Mali, le Sénégal, la Guinée, Cameroun, l’Éthiopie, 
                        le Ghana, le Congo, le Sao-tome, le Burkina, le Benin, la Guinee Bissau et le Togo.`
                    }
                },
                {
                    id: 12,
                    question:"Quelle est la capitale du Maroc ?",
                    options:["Dagana", "Alger","Accra","Rabat"],
                    answer:"Rabat",
                    complement: {
                        img: "",
                        infos:`Le Nigeria  en forme longue la république fédérale du Nigeria, est un pays d'Afrique de l'Ouest situé dans le golfe de Guinée. Avec plus de 219 millions d'habitants en 2021, le Nigeria est le pays le plus peuplé d'Afrique et le septième pays du monde par son nombre d'habitants.
                        Situé au bord du golfe de Guinée, le Nigeria possède 4047km de frontières terrestres, et 853km de littoral. Il est bordé à l'ouest par le Bénin (773km), à l'est-sud-est par le Cameroun (1690km), au nord par le Niger (1497km) et à l'est-nord-est par le Tchad (84km).
                        Le pays est la première puissance économique du continent africain en 2016. Le poids économique et démographique du Nigeria lui ont valu le surnom de « Géant d'Afrique ». Toutefois, malgré une production de pétrole importante et une économie diversifiée, le pays demeure relativement pauvre, notamment en raison d'une forte corruption. 
                        Depuis 1991, la capitale du Nigeria est la ville nouvelle d'Abuja. Le pays fait partie de la Communauté économique des États de l'Afrique de l'Ouest (CEDEAO) et de l'Organisation de la coopération islamique (OCI). Ses habitants sont les Nigérians.
                        Le Nigeria reste l'un des pays pilotes et phares de la CEDEAO : il a envoyé des soldats au Liberia et en Sierra Leone, et a proposé son aide pour résoudre de nombreuses crises. Récemment, il a proposé l'envoi de soldats pour résoudre le problème de la crise de la partition du Mali, où dans le nord de ce pays un mouvement fondamentaliste islamique avait tenté d'instaurer un État islamique indépendant. Le Nigeria est lui-même confronté à la secte islamique Boko Haram qui souhaite la partition du Nigeria, ce qui explique la forte implication de ce dernier au sein de la CEDEAO, sans pour autant que la langue soit une barrière.
                        Les Igbos, les Yorubas et les Haoussas sont les trois ethnies majoritaires du pays soumis à de fortes tensions entre musulmans et chrétiens.`
                    }
                },
                {
                    id: 13,
                    question:"Dans quel océan se jette le fleuve Zambèze ?",
                    options:["Océan Indien","Océan Atlantique","Océan Pacifique","Océan Antarctique"],
                    answer:"Océan Indien",
                    complement: {
                        img: "",
                        infos:`Le Nigeria  en forme longue la république fédérale du Nigeria, est un pays d'Afrique de l'Ouest situé dans le golfe de Guinée. Avec plus de 219 millions d'habitants en 2021, le Nigeria est le pays le plus peuplé d'Afrique et le septième pays du monde par son nombre d'habitants.
                        Situé au bord du golfe de Guinée, le Nigeria possède 4047km de frontières terrestres, et 853km de littoral. Il est bordé à l'ouest par le Bénin (773km), à l'est-sud-est par le Cameroun (1690km), au nord par le Niger (1497km) et à l'est-nord-est par le Tchad (84km).
                        Le pays est la première puissance économique du continent africain en 2016. Le poids économique et démographique du Nigeria lui ont valu le surnom de « Géant d'Afrique ». Toutefois, malgré une production de pétrole importante et une économie diversifiée, le pays demeure relativement pauvre, notamment en raison d'une forte corruption. 
                        Depuis 1991, la capitale du Nigeria est la ville nouvelle d'Abuja. Le pays fait partie de la Communauté économique des États de l'Afrique de l'Ouest (CEDEAO) et de l'Organisation de la coopération islamique (OCI). Ses habitants sont les Nigérians.
                        Le Nigeria reste l'un des pays pilotes et phares de la CEDEAO : il a envoyé des soldats au Liberia et en Sierra Leone, et a proposé son aide pour résoudre de nombreuses crises. Récemment, il a proposé l'envoi de soldats pour résoudre le problème de la crise de la partition du Mali, où dans le nord de ce pays un mouvement fondamentaliste islamique avait tenté d'instaurer un État islamique indépendant. Le Nigeria est lui-même confronté à la secte islamique Boko Haram qui souhaite la partition du Nigeria, ce qui explique la forte implication de ce dernier au sein de la CEDEAO, sans pour autant que la langue soit une barrière.
                        Les Igbos, les Yorubas et les Haoussas sont les trois ethnies majoritaires du pays soumis à de fortes tensions entre musulmans et chrétiens.`
                    }
                },
                {
                    id: 14,
                    question:"Quelle est la langue la plus parle en Afrique ?",
                    options:["L'Arabe", "Le Swahili", "Le Haoussa","Le Yoruba"],
                    answer:"Le Swahili",
                    complement: {
                        img: "",
                        infos:`Le swahili, également connu sous le nom de Kiswahili dans la langue maternelle, est une langue bantoue parlée par quelque 150 millions d’Africains dans la région des 
                        Grands Lacs africains en Afrique centrale et australe. C’est la langue officielle en Tanzanie, au Kenya, en Ouganda, au Rwanda, 
                        au Mozambique, au Burundi et en République démocratique du Congo. Le swahili est très attrayant pour de nombreux apprenants 
                        de langues en raison du grand nombre de personnes parlant cette langue et de sa riche histoire. De nombreux critiques 
                        critiquent la décision de l’Union africaine de ne pas inclure le swahili comme langue de travail dans la commission.`
                    }
                },
                {
                    id: 15,
                    question:"Quelle est le capitale du Kenya ?",
                    options:["Nairobi", "Abuja", "Kigali", "Alger"],
                    answer: "Nairobi",
                    complement: {
                        img: "",
                        infos:`Le Kenya, en forme longue la république du Kenya est un pays d’Afrique de l'Est. Il est limitrophe du 
                        Soudan du Sud au nord-ouest, de l’Éthiopie au nord, de la Somalie à l’est, de l’Ouganda à l’ouest et de la 
                        Tanzanie au sud-sud-ouest. Il est baigné par l’océan Indien au sud-est. Son nom provient de celui de son plus 
                        haut sommet, le mont Kenya, que les Kamba appellent Kiinyaa, ce qui signifie « montagne de l'autruche ». Ce 
                        dernier nom renvoie à la couleur des pics, qui sont blancs avec la neige et noirs avec les rochers, ressemblant 
                        au plumage du mâle. Sa capitale, et plus grande ville, est Nairobi. La vallée du Grand Rift est souvent désignée 
                        comme le « berceau de l'humanité » en raison des nombreux fossiles d'hominidés qui y ont été trouvés. Les plus 
                        anciens, des Proconsuls datant du Miocène, ont été découverts sur l'île d'origine volcanique de Rusinga par 
                        Louis Leakey. D'autres découvertes indiquent que des hominidés comme Homo habilis et Homo ergaster vécurent 
                        au Kenya il y a 2,5 millions d'années (Plaisancien). Le Kenya compte 70 groupes tribaux issus de trois ethnies 
                        différentes. Le groupe ethnique le plus important est d'origine bantoue (Kikuyu, Luhya, Meru, Embu). À part 
                        presque égale, le groupe d'origine nilotique (Maasaï, Luo, Kalenjin, Samburu, Pokot, Turkana). Vient ensuite 
                        le groupe d'origine couchitique (Orma, Somali, Borana).Certains groupes, bien que considérés d'origine bantoue, 
                        ont une culture mixte (Kamba, Taita, les tribus swahilies formées par les Mijikenda).
                        Le pays compte aussi des minorités indiennes et européennes issues de la colonisation (les premiers ayant été 
                        enrôlés par les seconds). Il doit aussi faire face à l'exode de populations victimes des conflits en 
                        Somalie ou de la guerre civile au Soudan.`
                    }
                },
                {
                    id: 16,
                    question:"Qui est l’homme le plus riche d’Afrique ?",
                    options:["Patrice Motsepe","Youssef Mansour","Nassef Sawiris","Aliko Dangote"],
                    answer:"Aliko Dangote",
                    complement: {
                        img: "",
                        infos:`Né dans une famille de commerçants, le père d'Aliko Dangote, Mohammed Dangote, est un riche exportateur d'arachide. À sa disparition en 1965, c'est son grand-père maternel, Sanusi Dantata, fondateur du marché Dawanau, et fils de Alhassan Dantata, qui fut à son époque considéré comme l'homme le plus riche d'Afrique de l'Ouest, qui le prend sous son aile et lui apprend les ficelles du monde des affaires. Aliko Dangoté débute dans le monde des affaires en 1977 grâce à un apport de son oncle de 500000 nairas et 3 camions de ciments provenant de son grand-père et d'un prêt remboursable sur deux ans.
                        Le ciment étant un bien rare et cher à l'époque dans le pays, son entreprise se développe très rapidement pour devenir « Dangote Cement ». En 1980, Aliko Dangote s'installe à Lagos pour développer son entreprise. Le coup d'état de 1983 s'avère être une aubaine, la junte militaire ayant emprisonné tous les grands hommes d'affaires de la ville, libérant ainsi de vastes marchés. En 1981, le Dangoté Group est créé. Il investit alors dans le sucre, l'importation de riz, et également dans une banque qui fera ensuite faillite. À la fin des années 1980, inspiré par le modèle industriel brésilien, 
                        il se lance dans l'industrie. Son groupe construit une raffinerie de sucre et une usine d'emballage pour les pâtes alimentaires que le groupe importe au Nigeria. Au premier semestre 2007, Aliko Dangote a introduit deux de ses treize sociétés sur le NSE (Nigerian Stock Exchange, la bourse nigériane) et la valeur de ses parts dans celles-ci a été estimée par les analystes à 10 milliards de dollars.L’une des deux sociétés cotées, Dangote Cement, est devenue la plus grosse capitalisation boursière du Nigeria. La valorisation de ses participations place directement Dangote parmi les 
                        hommes les plus riches d’Afrique, sachant que 11 de ses sociétés demeurent non cotées en bourse. En 2013, son groupe possède la plus grande usine de production de ciment subsaharienne, Obajana Cement Plant. Ses projets d’investissement atteignent 10 milliards de dollars dont une part sur la construction de cimenteries en Afrique (Afrique du Sud, Zambie, Éthiopie, Sénégal, Mozambique et Cameroun). En 2013, avec un conglomérat de banques, l'homme d'affaires investit dans la construction d'une nouvelle raffinerie de pétrole d'une capacité de 400 000 barils par jour, pour un coût total de 8 milliards de dollars.
                        En 2018, il est classé à la 100e place du classement Forbes des plus riches milliardaires, avec une fortune évaluée à 14,1 milliards de dollars. Sa fortune s'accroit de 16,8 milliards de dollars au cours des six premiers mois de l'année 2019. En janvier 2020, le milliardaire Aliko Dangote annonce vouloir acheter le club de football anglais londonien d'Arsenal. L'opération n'aboutit pas mais un an plus tard, les fans du club implorent Aliko Dangote d'investir dans Arsenal afin d'écarter la direction actuelle.`
                    }
                },
                {
                    id: 17,
                    question:"Combien y a-t-il de langues vivantes sur le continent africain ?",
                    options:["Environ 500","Environ 1000","Environ 2000","Environ 4000"],
                    answer:"Environ 2000",
                    complement: {
                        img: "",
                        infos:`Le nombre de langues en Afrique est généralement estimé à environ 2 000 pour un milliard d'habitants, mais les langues d'une certaine importance sont bien moins nombreuses et beaucoup sont en fait des variantes dialectales. Selon la méthode employée, les estimations des spécialistes varient entre 200 et 2 000. Une cinquantaine seulement sont parlées par plus d'un million de locuteurs. 
                        Les langues africaines sont classées en cinq familles de langues : langues afro-asiatiques, langues nilo-sahariennes, nigéro-congolaises, langues khoïsan et 
                        langues austronésiennes. Par exemple : Les langues nilo-sahariennes sont parlées en Afrique subsaharienne : au Tchad, au Soudan, au Niger, dans le Nord du Cameroun, en République centrafricaine, au Ghana, au Kenya, en Éthiopie et en Tanzanie. Elles comprennent notamment le masaï, les langues nilotiques, les langues nubiennes et les langues songhaï. Les Langues nigéro-congolaises
                        Notamment, le groupe bantoïde (dont les langues bantoues) constituent une importante sous-famille, incluant le swahili, le zoulou et le lingala parmi d'autres. l'Ewe et le Kotafon font parties du groupe Kwa. Et l'Ewe est importé avec le peuple lors de leur exode depuis l'Afrique de l'est passant par le Nigeria; jusqu’à ce qu'il ne s’installe au sud du Benin; Togo et Ghana.`
                    }
                },
                {
                    id: 18,
                    question:"Dans quels pays se situent les chutes Victoria ?",
                    options:["Kenya et Tanzanie","Mozambique et Malawi","Zambie et Zimbabwe", "La Guinee et Le liberia"],
                    answer:"Zambie et Zimbabwe",
                    complement: {
                        img: "",
                        infos:`Les chutes Victoria sont des chutes d'eau situées sur le fleuve Zambèze (qui constitue à cet endroit la frontière entre la Zambie, à proximité de la ville de Livingstone, et le Zimbabwe). Le fleuve se jette dans la cataracte sur environ 1 700 mètres 
                        de largeur et d'une hauteur qui peut atteindre un maximum de 108m. Elles donnent un spectacle remarquable par leur 
                        disposition particulière : elles se jettent dans une longue faille du plateau, pour s'échapper par un étroit canyon. 
                        Elles ne peuvent ainsi être vues de face qu'à une distance d'une centaine de mètres seulement. En prenant en 
                        compte leur largeur, leur hauteur et leur débit, elles font partie des cataractes les plus importantes du monde avec 
                        les chutes du Niagara et de celles d'Iguazú.`
                    }
                },
                {
                    id: 19,
                    question:"Quel est le bon classement des 3 pays les plus riches en afrique (de l'année 2021) ?",
                    options:[
                        "Nigeria, Afrique du Sud, Egypte",
                        "Afrique du Sud, Nigeria, Egypte",
                        "Afrique du Sud, Egypte, Algerie",
                        "Nigeria, Angola, Ethiopie"
                    ],
                    answer: "Nigeria, Afrique du Sud, Egypte",
                    complement: {
                        img: "",
                        infos:`Pour quantifier la valeur totale de la production de richesse annuelle effectuée par les ménages, 
                        les entreprises publiques ou privées résidant à l’intérieur d’un territoire, le produit intérieur brut (PIB) est
                        l’indicateur économique le mieux utilisé. Grâce à une croissance et à des améliorations constantes, 
                        on estime que l’économie africaine atteindra un PIB de 29 000 milliards de dollars d’ici 2050, jouant ainsi un 
                        rôle majeur dans l’économie mondiale. La Banque mondiale s’attend à ce que la plupart des pays de ce continent 
                        atteignent le statut de « revenu moyen », avec un PIB par habitant d’au moins 1 000 dollars au cours de la prochaine 
                        décennie. En 2021, le top 4 du classement par PIB des pays africains est constitue du Nigeria, l’Afrique du Sud, 
                        L’Égypte et l’Algérie.`
                    }
                },
                {
                    id: 20,
                    question:"Quel est le plus haut tour d’Afrique ? ",
                    options:["The Leonardo","Britam Tower","Tour Ponte City","Britam Tower"],
                    answer:"The Leonardo",
                    complement: {
                        img: "",
                        infos:`The Leonardo est un gratte-ciel de 227 mètres de hauteur construit à Sandton dans la banlieue de Johannesburg en 
                        Afrique du Sud de 2015 à 2019. Il comprend des bureaux, 241 appartements, 128 chambres d'hôtel, sur 55 étages 
                        desservis par 14 ascenseurs ainsi qu'un atrium, une piscine, un centre de conditionnement physique, et des commerces. 
                        Haut de 223 mètres c'est l'une des plus haute tours du continent africain et c'est le plus haut gratte-ciel d'Afrique 
                        du sud, devant le Carlton Centre construit en 1973.L'immeuble a été conçu par l'agence Co-Arc International Architects.`
                    }
                },

            ],
            Expert:[
                {
                    id: 21,
                    question:"Quel est le classement du continent africain par rapport aux autres continents, en terme de population de l’année de 2021?",
                    options:["1er","2e", "3e","4e"],
                    answer:"2e",
                    complement: {
                        img: "",
                        infos: `La démographie de l'Afrique est l'ensemble des données et des études concernant la population de l'Afrique à toutes les époques. De 100 millions d’habitants en 1900, la population de l'Afrique est passée à environ 275 millions dans les années 1950-1960, puis à 640 millions en 1990 et à 1,3 milliard en 2019 soit 17 % de la population mondiale.
                        Depuis 1950, les projections de l'ONU à 30 ou 50 ans se sont révélées relativement correctes. La population de l'Afrique subsaharienne uniquement pourrait tripler entre 2020 et la fin du siècle, passant de 1 à 3 milliards d'habitants.
                        Selon la projection démographique intermédiaire de l'ONU tenant compte des scénarios moyens d'évolution prévue, principalement de la mortalité, 
                        de la fécondité et de la structure par âge, dans les années 2050 la population de l'Afrique se situerait aux environs de 2,5 milliards puis, projection beaucoup plus incertaine, vers 4,4 milliards en 2100 ce qui entraînerait des bouleversements politiques, culturels et écologiques majeurs à l’échelle de la planète tout entière.`
                    }
                },
                {
                    id: 22,
                    question:"Quelle était la ville la plus propre d’Afrique en 2020 ?",
                    options:["Alger","Nairobi", "Kigali","Conakry"],
                    answer:"Kigali",
                    complement: {
                        img: "",          
                        infos: `Le Rwanda, en forme longue la république du Rwanda, surnommé le « pays des mille collines », 
                        est un pays d'Afrique de l'Est. Le Rwanda étend ses 26 338 km2 dans la région des Grands Lacs. Il partage des 
                        frontières avec, au nord, l'Ouganda, à l'est, la Tanzanie, au sud, le Burundi, et à l'ouest, la république 
                        démocratique du Congo. Sa capitale Kigali est située au centre du pays. Les Rwandais parlent le kinyarwanda, 
                        et vivent dans les collines qui constituent la localisation de référence des habitats. Les Banyarwandas, 
                        le groupe culturel du pays est divisé en trois sous-groupes, les Twa, les Hutu et les Tutsi, qui constituent 
                        respectivement 1%, 84%, et 15% de la population. Kigali est le centre économique et administratif du pays. 
                        Sa population est d'environ un million d'habitants. La ville est construite sur plusieurs collines. La ville 
                        est reliée par le transport aérien avec l'Aéroport international de Kigali situé à environ 10  à l'est de cette 
                        ville. Un nouvel aéroport est en construction à Bugesera depuis 2017. La ville (comme pratiquement tout le Rwanda) 
                        est desservie par de nombreuses "moto-taxi", plus chères que les transports en commun mais meilleur marché et 
                        souvent plus rapides que les "taxi-voitures". C’est pourtant lui qui a connu les progrès les plus fulgurants au 
                        cours des 25 dernières années, devant la Chine. En 2008 déjà la capitale rwandaise est récompensée par les 
                        Nations-Unies pour son programme de modernisation : éradiction de bidonvilles, nouveaux équipements, réseau de 
                        transports publics, etc. La municipalité ne lésine pas sur les moyens et joue sur tous les fronts. La propreté 
                        pour commencer : depuis 2008 le pays a banni les sacs en plastique ; la municipalité a mis en place un système 
                        de ramassage des déchets performant, elle emploie de nombreux travailleurs assignés à la propreté des rues et 
                        des squares. Officiellement, jeter des déchets peut vous coûter cher. Ville propre et verte, Kigali se rêve aussi 
                        leader de la scène tech africaine. Une innovation city est en cours de construction à quelques kilomètres de la capitale. `
                    }
                },
                {
                    id: 23,
                    question:"Qui est Thomas Sankara ?",
                    options:["Un homme d'Etat Americain","Scientifique Africain", "Un homme d'Etat Africain","Un celebre producteur de cereales"],
                    answer:"Un homme d'Etat Africain",
                    complement: {
                        img: "",
                        infos: `Thomas Sankara est né le 21 décembre 1949 à Yako, en Haute-Volta, d’un père gendarme soucieux de l’éducation de ses enfants. 
                        « Pour Thomas, le sens de l’intégrité était poussé à l’extrême, assure Valentin Sankara, frère cadet de Thomas. S’il tombait sur 
                        quelqu’un de malhonnête, il lui faisait la leçon. Il était franc avec tout le monde et détestait les injustices. » Thomas Sankara 
                        est le troisième enfant dans une fratrie de onze et il est l’aîné des garçons. Très vite, il va acquérir le sens des responsabilités. 
                        Dès sa prise de pouvoir le 4 août 1983, Thomas Sankara fait de la bonne gouvernance l’un des piliers de sa révolution. Avec l’autorité 
                        d’un capitaine, il impose l’exemplarité autour de lui. En quatre ans, il a su relevé le pays par ses réalisations. Il a vacciné 2,5 
                        millions d’enfants contre la méningite, la fièvre jaune et la rougeole en quelques semaines. Il a lancé une campagne nationale 
                        d’alphabétisation, faisant passer le taux d’alphabétisation de 13% en 1983 à 73% en 1987. Il a planté plus de 10 millions d’arbres 
                        pour prévenir la désertification. Il a construit des routes et un chemin de fer pour unir la nation, sans aide étrangère. Il a nommé 
                        des femmes à des postes gouvernementaux, les encourageant à travailler. Il a lancé des recrutements pour les femmes dans l’armée et 
                        elles avaient droit à un congé de maternité pendant leurs études. Il a interdit les mutilations génitales féminines, les mariages 
                        forcés et la polygamie. Il a vendu la flotte gouvernementale de voitures Mercedes et a fait de la Renault 5 (la voiture la plus moins 
                        chère vendue au Burkina Faso à l’époque) la voiture de service officielle des ministres. Il a réduit les salaires de tous les 
                        fonctionnaires, y compris les siens, et a interdit aux membres du gouvernement l’utilisation des chauffeurs et des billets d’avion 
                        de première classe. Il a redistribué les terres des propriétaires féodaux  pour les offrir aux paysans. En trois ans, la production 
                        de blé est passée de 1700 kg par hectare à 3800 kg par hectare, ce qui a rendu le pays autosuffisant sur le plan alimentaire. Il 
                        s’est opposé à l’aide étrangère, affirmant que « celui qui vous nourrit, vous contrôle ». Il a obligé les fonctionnaires à offrir 
                        un mois de leur salaire pour des projets publics. Il a refusé d’utiliser la climatisation de son bureau au motif que ce luxe 
                        n’était accessible qu’à une poignée de Burkinabés. En tant que président, il a réduit son salaire à 450 $ par mois et limité ses 
                        biens à une voiture, quatre bicyclettes, trois guitares, un réfrigérateur et un congélateur etc.`
                    }
                },
                {
                    id: 24,
                    question:"Quel est le plus vieux jeux africain ? ",
                    options:["La CAN(Coupe d'Afrique des Nations)","Le Yoté", "L'Awalé","Le Targui"],
                    answer:"L'Awalé",
                    complement: {
                        img: "",
                        infos: `L'awalé ou awélé est un jeu de société combinatoire abstrait créé en Afrique.
                        C'est le plus répandu des jeux de la famille mancala, ensemble de jeux africains de type « compter et capturer » dans lesquels on distribue des cailloux, 
                        graines ou coquillages dans des coupelles ou des trous, parfois creusés à même le sol. L’awalé appartient à la grande famille des jeux 
                        de semailles africains. Ces jeux au mécanisme très particulier et sans hasard ne peuvent s’apparenter au Senet égyptien qui, lui, 
                        est un jeu de parcours (avec dés) et a une stratégie très différente. Les égyptologues n’ont jamais rencontré de jeu comparable à 
                        l’awalé parmi les jeux, très bien conservés et connus, de l’Égypte antique. Les premiers tabliers d’awalé datables ont été découverts 
                        lors de fouilles archéologiques en Éthiopie (royaume d'Aksoum) et semblent remonter au 8e siècle.
                        L'awalé se retrouve dans toute l’Afrique, mais à partir du 9e siècle il s'est propagé aussi au Moyen-Orient, dans la péninsule 
                        Arabique, en Inde, en Indonésie et jusqu'en Chine. La forme awalé, typique de l'Afrique de l'Ouest et notamment en Côte d'Ivoire, a 
                        suivi quant à elle les routes de l’esclavage. On retrouve les traces de ce jeu en Amérique latine mais surtout aux Caraïbes. L’awalé 
                        fait appel à des capacités cognitives et stratégiques élevées et aujourd’hui on trouve d’excellents joueurs originaires du Ghana et 
                        d’Antigua-et-Barbuda. Des tournois d'awalé sont organisés régulièrement à Cannes (France) durant le Festival des jeux en février-mars, 
                        ainsi qu'au musée suisse du jeu à La Tour-de-Peilz (Suisse) en automne.`
                    }
                },
                {
                    id: 25,
                    question:"Quelle est la ville la plus peuple d’Afrique de l’année 2021?",
                    options:["Le Caire(Égypte)","Lagos(Nigeria)", "Kinshasa(R.D.Congo)","Khartoum(Soudan)"],
                    answer:"Le Caire(Égypte)",
                    complement: {
                        img: "",
                        infos: `Le Caire est la capitale de l'Égypte. Avec une population d'environ 25 millions d'habitants, elle est aussi la plus grande ville 
                        du pays et l'une des plus peuplées du continent africain. Selon une estimation de 2015, elle serait également la sixième agglomération 
                        du monde. Bien qu'Al-Qāhira soit le nom officiel en arabe égyptien, elle est plus souvent appelée Masr (le nom arabe de l'Égypte) ou 
                        el-Qahéra. Carrefour du Moyen-Orient et de l'Afrique situé en amont du delta du Nil, sur les rives du fleuve ainsi que sur quelques 
                        îles adjacentes, elle se trouve au nord du pays, à 178  au sud-est d'Alexandrie et 127  à l'ouest du canal de Suez. Les habitants du 
                        Caire sont appelés les Cairotes.
                        La région de Memphis a longtemps été un centre majeur de l'Égypte antique. Vers le 4e siècle, les Romains établirent la cité-forteresse 
                        de Babylone le long de la rive est du Nil. Dès la conquête de l'Égypte par les Arabes en 641, Al-Fustat devient un centre administratif 
                        et religieux. Les Fatimides et leur troupes composées de Berbères ketamas venus du l'Ifriqiya fondent le noyau urbain actuel, alors 
                        nommé Al-Mansûriyyah, pour en faire leur nouvelle capitale. Située sur la route des épices entre l'Europe et l'Asie, la ville connaît 
                        une longue période de prospérité : vers 1340, la population du Caire atteint un demi-million d'habitants, ce qui en faisait déjà l'une 
                        des plus grandes villes du monde arabe. La peste noire frappe toutefois la cité plus de cinquante fois entre 1348 et 1517. Sous l'Empire 
                        ottoman, la ville perd son statut de capitale au profit d'Istanbul. Devenue capitale de l'Égypte moderne en 1922, elle connaît une 
                        forte poussée démographique et devient le centre politique et économique de l'Afrique du Nord et du monde arabe, abritant aujourd'hui 
                        un grand nombre de compagnies et d'organisations multinationales, dont la Ligue arabe.
                        La ville actuelle présente une grande diversité urbanistique et architecturale. Le centre historique de la ville comprend le Vieux 
                        Caire (quartier copte où se trouvent la forteresse de Babylone et le musée copte) ainsi que le quartier islamique, classé au 
                        patrimoine mondial de l'humanité, où se trouvent la citadelle de Saladin et le grand souk (Khân al-Khalili). Le Caire compte également 
                        de nombreuses mosquées, dont la mosquée Al-Azhar qui abrite également l'une des plus anciennes universités au monde. Centre névralgique
                        de la ville moderne, la place Tahrir est devenue l'emblème de la révolution égyptienne de 2011. À l'ouest se trouve la ville de Gizeh 
                        et la nécropole antique de Memphis, avec ses trois grandes pyramides, dont la pyramide de Khéops. Au sud, se trouve le site de 
                        l'antique ville égyptienne de Memphis.`
                    }
                },
                {
                    id: 26,
                    question:"Quel est le plus grand désert d’Afrique ?",
                    options:["Désert du Kalahari","Desert du Sahara", "Désert de Simpson", "Désert de Sonora"],
                    answer:"Desert du Sahara",
                    complement: {
                        img: "",
                        infos: `Le Sahara , « le grand désert », est un vaste désert chaud situé dans la partie nord du continent africain. Il s'étend sur 
                        5000 km2 d'ouest en est, de l'océan Atlantique à la mer Rouge, et couvre plus de 8,5 km2 (soit près de 30 % de la surface du 
                            continent africain), ce qui en fait la plus grande étendue de terre aride d'un seul tenant dans le monde. Le Sahara peut même 
                            être prolongé au-delà de la mer Rouge, les géographes parlant alors d'un grand « désert saharo-arabique ». Plus largement encore, 
                            le Sahara constitue la partie occidentale d'une vaste diagonale sèche qui s'étend des abords du fleuve Sénégal à la Mongolie. 
                            Plus vaste désert chaud du monde, il divise le continent d'est en ouest. Il couvre d'immenses étendues et s'étend sur le 
                            territoire de dix États : le Mali, la Mauritanie, le Niger, le Tchad, le Soudan, l'Algérie, la Tunisie, le Maroc, la Libye, 
                            et l'Égypte, ainsi que sur le territoire contesté du Sahara occidental. Le désert de sable ne couvre que 20 % de sa superficie, 
                            les 80 % restant sont constitués de surfaces rocheuses où dominent des roches sédimentaires. La zone géographique comprenant 
                            plusieurs paysages et climats ; on y trouve des déserts de sable (Grand Erg oriental et Grand Erg occidental), des montagnes 
                            (Hoggar, Tassili, Tibesti), des hamadas (plateaux rocailleux) et des regs (déserts de pierre) tel le Tanezrouft. Le mot 
                            « Sahārā », qui signifie « vaste zone dépourvue de végétation » en arabe, désigne dans toutes les langues le grand désert 
                            nord-africain. Avant l'arabisation de l'Afrique du Nord, le nom Tiniri (ou Ténéré) qui signifie « grande plaine étendue, 
                            sans montagne ni dune, désert plat » en langue tamacheq, la langue tamazight des autochtones Berbères (Touaregs), désignait 
                            la région la plus aride de ce désert ; ce mot était utilisé dans la plupart des régions du nord pour désigner le grand Sahara, 
                            en Kabylie et au Rif. L'hypothèse ancienne selon laquelle « Sahara » pourrait également provenir de l'addition des mots 
                            égyptiens « sah » (pays) et « ka » (hauteur, élévation, colline) n'est pas confirmée. L'aridité particulière du Sahara tient 
                            à la vigueur et surtout à la permanence des hautes pressions. Dans ces conditions, l'air surchauffé au sol ne peut s'élever ; il 
                            renforce l'anticyclone en se comprimant. `
                    }
                },
                {
                    id: 27,
                    question:"Qui est Mansa Moussa ?",
                    options:["Un villagois malien","Un professeur d'universite", "Un historien","Un roi de l'empire du Mali"],
                    answer:"Un roi de l'empire du Mali",
                    complement: {
                        img: "",
                        infos: `Mansa Moussa, Kanga Moussa est le dixième « mansa » (roi des rois) de l'empire du Mali de 1312 à 1332. Lors de son accession au trône, 
                        l'empire du Mali est constitué de territoires ayant appartenu à l'empire du Ghana et à Melle (Mali) ainsi que les zones environnantes. 
                        Moussa porte de nombreux titres, émir de Melle, seigneur des mines de Wangara, ou conquérant de Ghanata, de Fouta-Djalon et d'au moins 
                        une douzaine d'autres régions. Richissime grâce à une extraction d'or malien évaluée entre 3 et 4 tonnes par an, Mansa Moussa est 
                        considéré parmi les plus riches hommes ayant existé, voire le plus riche pour certaines sources. Il porte l’empire du Mali à son 
                        apogée, du Fouta-Djalon à Agadez et sur les terres de l'ancien empire du Ghana. Il établit des relations diplomatiques suivies avec 
                        le Portugal, le Maroc, l'Algérie, la Tunisie et l’Égypte. Son règne correspond à l'âge d'or de l'empire malien. Kankou Moussa signifie 
                        « Moussa, fils de Kankou Hamidou » en référence à sa mère, les Malinkes étant à cette époque une société matrilinéaire ; d'autres 
                        variantes de ce nom sont Kankou Moussa, Kanga Moussa et Kankan Moussa. Il est la plupart du temps désigné sous le nom de Mansa Moussa 
                        dans les textes historiques européens et dans la littérature. Mansa Moussa est considéré comme l'un des hommes les plus riches de 
                        l'Histoire, voire le plus riche, même si cette affirmation reste contestée ; il n'existe en effet aucune donnée exacte concernant sa 
                        richesse réelle. En 2021, un documentaire de la chaîne Histoire TV indique que le Mali extrayait alors 3 à 4 tonnes d'or par an et 
                        que Mansa Moussa en avait emporté 12 tonnes pour son seul pèlerinage. Moussa fait construire de nombreuses mosquées et madrasas à 
                        Tombouctou et à Gao, son œuvre la plus connue restant la médersa de Sankoré. À Niani, il fait construire une salle d'audience, un 
                        bâtiment communiquant par une porte intérieure avec le palais royal. L'édifice « construit en pierre de taille est surmonté d'un 
                         décoré d'arabesques colorées. Les fenêtres de l'étage supérieur sont ornées d'argent, celles de l'étage inférieur d'or » (il n'en 
                         reste aucun vestige)`
                    }
                },
                {
                    id: 28,
                    question:"Quel est le plus grand foret d’Afrique ?",
                    options:["La forêt du bassin du Congo","La forêt ...", "La forêt ...","La forêt ..."],
                    answer:"La forêt du bassin du Congo",
                    complement: {
                        img: "",
                        infos: `La forêt du bassin du Congo en Afrique centrale est le deuxième massif forestier tropical après la forêt amazonienne. 
                        Elle couvre près de trois millions de km2 et est partagée entre six pays, le Cameroun, la République centrafricaine, la République 
                        du Congo, la République démocratique du Congo, le Gabon et la Guinée équatoriale. En raison de la surexploitation du bois, notamment 
                        par les entreprises étrangères, la déforestation est importante. Les dégâts sont écologiques avec une diminution de la biodiversité 
                        mais les conséquences sont aussi économiques avec la perte de ressources financières à long terme. En 2013, le bassin du Congo 
                        présente un couvert forestier de plus de 268 millions d’hectares. Il dispose de plus de 170 millions d’hectares de forêt dense 
                        humide et plus de 116 millions d’hectares d’autres types de couverts forestiers (forêts claires, savanes arborées).Les forêts du 
                        bassin du Congo forment l'une des dernières réserves de biodiversité où les forêts primaires sont interconnectées et permettent 
                        des mécanismes biologiques sans perturbation.La pratique de la culture sur brûlis et l'extension des terres agricoles a notamment 
                        été analysée comme l'un des facteurs principaux de la déforestation en République démocratique du Congo.`
                    }
                },
                {
                    id: 29,
                    question:"Quel est ce Lac tres celebre(par la couleur de l'eau) du Senegal ?",
                    options:["Lac Turkana","Lac Victoria", "Lac Tanganyika ","Lac Rose"],
                    answer:"Lac Rose",
                    complement: {
                        img: "",
                        infos: `Le lac Rose, de son vrai nom lac Retba, est l'un des sites les plus visités du Sénégal.
                        Ce lac salé doit sa renommée à la teinte originale et changeante de son eau, mais aussi au rallye Paris-Dakar 
                        dont il constituait l’ultime étape.L'eau est particulièrement salée : 380grammes par litre. Le sel est exploité 
                        depuis les années 1970. Les hommes, dans l'eau jusqu'à la poitrine, cassent avec un piquet le sel déposé sur le 
                        fond avant de le ramasser à la pelle pour remplir des pirogues d'une capacité d'une tonne. Les femmes sont chargées 
                        de débarquer les pirogues et d'entasser le sel sur les bords pour le sécher et le blanchir au soleil. Tous 
                        s'enduisent le corps de beurre de karité pour se protéger de la salinité corrosive. Le sel est destiné 
                        aux conserveries de poisson ou exporté. Le lac Rose est un grand lagon de 3 km2, peu profond, entouré de dunes et 
                        situé à quelques centaines de mètres de l’océan Atlantique.
                        Sa couleur rose orangé est due à Dunaliella salina, une algue verte halophile, organisme microscopique qui fabrique, 
                        surtout quand le ciel n'est pas couvert (donc plutôt en période sèche de novembre à juin), l'astaxanthine, un pigment rouge 
                        de la famille des carotènes qui lui permet de mieux résister aux forts rayons solaires et à la concentration de sel. 
                        La couleur rose est moins visible pendant la saison des pluies (juillet à octobre) car le rayonnement solaire est limitée 
                        par la couverture nuageuse.`
                    }
                },
                {
                    id: 30,
                    question:"Qui est Wangari Maathai ?",
                    options:["Elle a eu le Prix Noble de la paix","Une actrice Ivoirienne", "Une historienne","Une Geographe"],
                    answer:"Elle a eu le Prix Noble de la paix",
                    complement: {
                        img: "",
                        infos: `La Kenyane Wangari Muta Maathai, surnommée la femme qui plantait des arbres, née le 1er avril 1940 à 
                        Ihithe (colonie du Kenya) est une biologiste, professeure d'anatomie en médecine vétérinaire et militante 
                        politique et écologiste. Wangari Maathai fonde en 1977 le Mouvement de la ceinture verte (Green Belt Movement), 
                        en réaction au phénomène de déforestation et d'érosion des sols, et en étroite collaboration avec les femmes 
                        des villages kényans. En effet au Kenya, ce sont les femmes qui sont chargées de collecter le bois pour alimenter 
                        le foyer et le fourrage pour les animaux. Ou avec la déforestation, ces ressources se raréfient, obligeant les 
                        femmes à parcourir des distances de plus en plus grandes. Les plantations d'arbres, véritables ceintures vertes 
                        autour des villes et des villages, ont donc pour but de répondre à ce problème quotidien des femmes kényanes. 
                        À l'époque, Maathai commence par planter sept arbres le jour de la Terre, en l'honneur des femmes engagées dans 
                        le mouvement environnementaliste kényan. Les femmes sont ensuite placées au centre du processus, et le sont 
                        encore aujourd'hui, restant responsables de la gestion de leurs plantations. Ce mouvement a permis de planter 
                        plus de cinquante millions d'arbres. Maathai est parfois affectueusement surnommée «la femme des arbres» 
                        (tree woman). Elle est active aussi bien dans le domaine de l'environnement que dans celui des droits des femmes.`
                    }
                },
            ]
        } 
    }
]



export default Quiz;
