-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Hôte : localhost
-- Généré le : ven. 10 fév. 2023 à 14:27
-- Version du serveur : 8.0.17
-- Version de PHP : 8.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;


-- --------------------------------------------------------

--
-- Structure de la table `filiere`
--

CREATE TABLE `filiere` (
  `ID` int(11) NOT NULL,
  `nom` varchar(255) COLLATE utf8mb4_general_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `filiere`
--

INSERT INTO `filiere` (`ID`, `nom`) VALUES
(1, 'BUT INFO 1A'),
(2, 'BUT INFO 2A'),
(4, 'LP CPL'),
(3, 'LP ISAM');

-- --------------------------------------------------------

--
-- Structure de la table `logiciel`
--

CREATE TABLE `logiciel` (
  `ID` int(11) NOT NULL,
  `nom` varchar(64) COLLATE utf8mb4_general_ci NOT NULL,
  `version` varchar(32) COLLATE utf8mb4_general_ci NOT NULL,
  `urlsetup` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `urltuto` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `comment` varchar(1024) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `visible` int(11) NOT NULL,
  `Utilisateurlogin` varchar(16) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `type` varchar(128) COLLATE utf8mb4_general_ci NOT NULL,
  `urlPort` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `urlImage` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `obsolete` int(1) NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `logiciel`
--

INSERT INTO `logiciel` (`ID`, `nom`, `version`, `urlsetup`, `urltuto`, `comment`, `visible`, `Utilisateurlogin`, `type`, `urlPort`, `urlImage`, `obsolete`) VALUES
(3, 'Visual Studio', '2022', NULL, 'files/vs.pdf', 'Visual Studio 2022 est un EDI spécialisé pour l\'environnement Windows, mais il est également utilisable pour Android, Linux, macOS, iOS... Nombreuses possibilités d\'extension, nombreux langages disponibles...', 1, 'aguidet', 'EDI', NULL, 'files/vs.jpg', 0),
(5, 'Anaconda', '3 2022.05', NULL, 'files/anaconda.pdf', 'Anaconda est un ensemble d\'outils pour le calcul, basé sur Python et de nombreuses bibliothèques.', 1, 'aguidet', 'EDI', NULL, '', 0),
(6, 'Android Studio', '2021 2.1.15', NULL, 'files/astudio.pdf', 'Android Studio est un EDI pour le développement d\'applications pour Android.', 1, 'aguidet', 'EDI', NULL, 'files/astudio.PNG', 0),
(7, 'Lazarus', '2', NULL, 'files/lazarus.pdf', 'Lazarus est un EDI permettant d\'utiliser la version \"free\" du langage Pascal. Il contient en outre un framework applicatif graphique (LCL) compatible avec Delphi (Borland).', 1, 'aguidet', 'EDI', NULL, 'files/lazarus.jpg', 0),
(10, 'Access', '2021', NULL, 'files/office365.pdf', 'Base de donnée. Fourni avec la suite Office. ', 1, 'aguidet', 'Bureautique', NULL, 'files/access.png', 0),
(11, 'BaseX', '9.7.2', NULL, 'files/basex.pdf', 'Outil XML', 1, 'aguidet', 'Editeur XML', NULL, '', 1),
(12, 'Cordova', '10', NULL, 'files/cordova.pdf', 'Ensemble d\'outils pour le développement mobile multiplateforme (Android, iOS, Windows UWP) en utilisant les langages du web (HTML, CSS, JavaScript). Nécessite certains prérequis (Node.JS, Android SDK, SDK Windows 10…).', 1, 'aguidet', 'Développement mobile', NULL, '', 0),
(13, 'Doxygen', '1.9.4', NULL, 'files/doxygen.pdf', 'Générateur de documentation', 1, 'aguidet', 'Utilitaire de développement', NULL, '', 0),
(14, 'Flutter', '3.0', NULL, 'files/flutter.pdf', 'Développement mobile multiplateforme (langage Dart)', 1, 'aguidet', 'Framework mobile', NULL, '', 1),
(15, 'Freeplane', '1.10.2', NULL, 'files/freeplane.pdf', 'Cartes mentales', 1, 'aguidet', 'Carte mentale', NULL, '', 0),
(16, 'Git', '2.36', NULL, 'files/git4win.pdf', 'Outil de suivi de version', 1, 'aguidet', 'Suivi de versions', NULL, 'files/git.png', 0),
(17, 'Hex editor neo', '6.54', NULL, 'files/hex_editor.pdf', 'éditeur hexa', 1, 'aguidet', 'Editeur hexadécimal', NULL, '', 1),
(18, 'IntelliJ IDEA education', '2022', NULL, 'files/idea.pdf', 'EDI Java. Version éducation, gratuite (la version standard est payante).', 1, 'aguidet', 'EDI Java', NULL, '', 0),
(19, 'Java JDK', '17', NULL, 'files/jdk12.pdf', 'Un Java Development Kit est indispensable pour le développement Java', 1, 'aguidet', 'Kit de développement Java Standard', NULL, 'files/java.jpg', 0),
(20, 'Java JDK', '8', NULL, '', 'Un Java Development Kit est indispensable pour le développement Java', 1, 'aguidet', 'Kit de développement Java Standard', NULL, 'files/java.jpg', 0),
(21, 'MongoDB', '', NULL, '', 'Serveur NoSQL, en version portable.', 1, 'aguidet', 'Serveur de base de données', NULL, NULL, 0),
(22, 'MonoGame', '3.7', NULL, 'files/monogame.pdf', 'Bibliothèque multiplateforme (Windows, Android, iOS, Xbox, Switch…) pour création de jeux vidéos en C#/.NET', 1, 'aguidet', 'Bibiliothèque', NULL, '', 1),
(23, 'MS Office', '365', NULL, 'files/office365.pdf', 'Suite bureautique complète, comprenant traitement de texte (Word), tableur (Excel), PréAO (Powerpoint), PAO (Publisher), courrier (Outlook) et bases de données (Access).', 1, 'aguidet', 'Bureautique', NULL, 'files/office.png', 0),
(24, 'MySQL', '8.0.29', NULL, 'files/mysql.pdf', 'Ensemble d\'outils pour base de données MySQL (serveur, workbench, connecteurs, etc.).\nLa version portable ne contient que le MySQL Workbench (le client). Pour un serveur portable, voir Uwamp.', 1, 'aguidet', 'SGBDR', NULL, 'files/mysql.png', 0),
(25, 'Netbeans', '8.2', NULL, 'files/netbeans.pdf', 'Environnement de développement intégré, spécialisé dans le langage Java mais pouvant également servir pour HTML5/JavaScript, PHP, ou d\'autres (avec plugins). Contient Java SE et Java EE.', 1, 'aguidet', 'EDI Java', NULL, '', 0),
(26, 'Node.JS', '16.15', NULL, 'files/node.pdf', 'Serveur d\'exécution Javascript.', 1, 'aguidet', 'Environnement d\'exécution JS ', NULL, 'files/nodejs.png', 0),
(27, 'Octave', '4.4.0', NULL, '', 'Logiciel calcul numérique', 1, 'aguidet', 'Calcul numérique', NULL, '', 1),
(28, 'Open Cobol IDE', '4.7.3', NULL, 'files/opencobol.pdf', 'Environnement de développement intégré pour le langage Cobol.', 1, 'aguidet', 'EDI Cobol', NULL, '', 1),
(29, 'OpenCV', '', NULL, 'files/opencv.pdf', 'OpenCV (pour Open Computer Vision) est une bibliothèque graphique libre, initialement développée par Intel, spécialisée dans le traitement d\'images en temps réel.', 1, 'aguidet', 'Bibiliothèque', NULL, '', 1),
(30, 'Oracle instant client', '19.11', NULL, 'files/oracle.pdf', 'Client pour la base de données Oracle; contient également les outils comme SQL*Plus', 1, 'aguidet', 'Utilitaire de bases de données', NULL, '', 1),
(31, 'Pencil', '3.1', NULL, 'files/pencil.pdf', 'Pencil permet d\'éditer simplement des maquettes d\'IHM, soit en mode \"fil de fer\" soit en mode \"réel\". Des modèles pour le web, le développement mobile (Android et iOS) et le bureau (windows) sont fournis.', 1, 'aguidet', 'Editeur de maquettes', NULL, NULL, 0),
(32, 'PostgreSQL', '', NULL, '#', 'Ensemble d\'outils pour PostgreSQL, notamment le client PGAdmin, l\'installateur standard PostgreSQL, une version portable du serveur.', 1, 'aguidet', 'Utilitaire de bases de données', NULL, '', 1),
(33, 'Project', '2021', NULL, 'https://iutdijon.u-bourgogne.fr/siav/acces-a-microsoft-azure-dev-tools-for-teaching-de-liut-de-dijon-auxerre/', 'Gestion de projet', 1, 'aguidet', 'Gestion de projet', NULL, '', 0),
(34, 'Protégé', '5.5', NULL, 'files/protege.pdf', 'Outil de web sémantique', 1, 'aguidet', 'Editeur d\'ontologies', NULL, '', 1),
(35, 'Qt', '6.3.2', NULL, 'files/qt.pdf', 'Qt est un framework multiplateforme (Windows, macOS, iOS, Android, Linux…) permettant de développer, en C++ notamment, des applications complètes. L\'EDI QtCreator et le compilateur MinGW sont compris.', 1, 'aguidet', 'Framework et EDI', NULL, 'files/qt-logo.svg', 0),
(37, 'Studio 3T', '1.4.3', NULL, '#', 'Client pour MongoDB (ancien Robot3T)', 1, 'aguidet', 'Client SGBD ', NULL, '', 0),
(38, 'SciLab', '6.1', NULL, 'files/scilab.pdf', 'Logiciel calcul numérique', 1, 'aguidet', 'Calcul numérique', NULL, '', 1),
(39, 'SQLDeveloper', '21.4.3', NULL, 'files/sqldeveloper.pdf', 'Client Oracle', 1, 'aguidet', 'Utilitaire de bases de données', NULL, 'files/oracle.png', 0),
(40, 'SublimeText', '4.1', NULL, '#', 'Editeur de texte', 1, 'aguidet', 'Editeur de texte', NULL, '', 0),
(41, 'Talend Open Studio', '8.0', NULL, '#', 'ETL open source et intégration de données.', 1, 'aguidet', 'Utilitaire de bases de données', NULL, '', 0),
(42, 'VirtualBox', '6.1.34', NULL, '#', 'Logiciel permettant d\'excuter des machines virtuelles, avec différents systèmes d\'exploitation.', 1, 'aguidet', 'Hyperviseur', NULL, 'files/virtualbox.jpg', 0),
(43, 'Visio', '2021', NULL, 'https://iutdijon.u-bourgogne.fr/siav/acces-a-microsoft-azure-dev-tools-for-teaching-de-liut-de-dijon-auxerre/', 'Utilitaire de dessin vectoriel; permet notamment de réaliser des diagrammes UML, des plans de réseau, des diagrammes divers.', 1, 'aguidet', 'Dessin vectoriel', NULL, 'files/visio.jpg', 0),
(44, 'Visual Paradigm', '16.3', NULL, 'files/vp.pdf', 'Editeur complet UML pour l\'analyse, la conception et le maquettage de projet informatique. Comprend tous les diagrammes UML, plus des diagrammes de maquettage, de gestion de projet, etc.', 1, 'aguidet', 'Editeur UML', NULL, 'files/vp.jpg', 0),
(45, 'VMWare Player', '16.2.3', NULL, '#', 'Logiciel permettant d\'excuter des machines virtuelles, avec différents systèmes d\'exploitation.', 1, 'aguidet', 'Hyperviseur', NULL, '', 0),
(46, 'WinDesign', '16.1', NULL, 'files/windesign.pdf', 'Editeur de modèle conceptuel de données (méthode Merise)', 1, 'aguidet', 'Utilitaire de bases de données', NULL, '', 1),
(47, 'WireShark', '3.6.6', NULL, '#', 'Utilitaire réseau permettant de lire les différentes trames échangées.', 1, 'aguidet', 'Utilitaire réseau', NULL, 'files/wireshark_logo.png', 0),
(49, 'Visual Studio Code', '1.67.2', NULL, '#', 'Editeur de texte orienté programmation, avec de (très) nombreuses extensions permettant de coder avec de nombreux langages. Coloration syntaxique, extraits de code, pilotage de la chaîne de compilation et de déboguage, etc.', 1, 'aguidet', 'Editeur de code', NULL, 'files/vscode.jpg', 0),
(57, 'PHP', '8.1', NULL, 'files/php.pdf', 'PHP est un langage spécialisé dans la programmation web coté client. L\'installation portable permet de tester rapidement son code directement avec VSCode, par exemple.', 0, 'aguidet', 'Interpréteur', NULL, 'files/php.svg', 0),
(58, 'Color Contrast Analyser', '0.9', NULL, '', 'Appli de calcul de ratio de contraste. Prérequis : .NET 5.0', 1, NULL, 'Accessoire', NULL, 'files/picker.png', 0),
(59, 'WSL', '2', NULL, 'files/wsl2.pdf', 'Windows Subsystem for Linux : intégration à Windows 10 d\'un système basé sur le noyau Linux.', 0, NULL, 'Utilitaire système', NULL, 'files/wsl.jpg', 0),
(60, 'Neo4J', '1.4.15', NULL, 'files/neo4j.pdf', '<p>Ensemble d\'outils pour les bases de données orientée Graphes. <br>Clé à utiliser pour activer : </p><code>eyJhbGciOiJQUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Ii4rQC4rIiwibWl4cGFuZWxJZCI6IjE4MWE5OTVmOWMyOTkyLTBiNzZmZDMzNjcxOTM5LTRmNjE3ZjViLTFmYTQwMC0xODFhOTk1ZjljM2IwOCIsIm1peHBhbmVsUHJvamVjdElkIjoiNGJmYjI0MTRhYjk3M2M3NDFiNmYwNjdiZjA2ZDU1NzUiLCJvcmciOiIuKiIsInB1YiI6Im5lbzRqLmNvbSIsInJlZyI6IiAiLCJzdWIiOiJuZW80ai1kZXNrdG9wIiwiZXhwIjoxNjg3OTQzNjQ0LCJ2ZXIiOiIqIiwiaXNzIjoibmVvNGouY29tIiwibmJmIjoxNjU2NDA3NjQ0LCJpYXQiOjE2NTY0MDc2NDQsImp0aSI6IldmU3N5Y0VIQiJ9.klT8he-ob6ZfNbt1v4_oiy8clQoRJI2lKyWbAyKRKCZ8I_xP-d8T40ilOlhXNpdo3eJLStffI0Zfs7TZbUr41jLdF1pdxmDDH1xW2V65GmYMMQW-iGigxgkLKz09djBsCPbqxBZu6gM54Q1cv8x3SB1QmXrIkj2CNGNqapnfI3Y79HV_V-8qjioich1Du_Vk2gOsKcTG-1Is1e5XDmkmXFiwfkwFIHrrzfsLPvITmpW7aqzuimD_XudBya4FDwm18Cz_QkJ0Z6cTYYKYiK0Gr7Zd2RDCtnU3d81jMObP9KRhOkX9sdQbYkigOF3W4UTf5ZmGHUik0lSMUuNjuUPGnQ</code>', 0, NULL, '', NULL, 'files/neo4J.png', 0),
(61, 'UWAMP', '3.1.0', NULL, '', 'UWAMP contient un ensemble d\'outils pour le développement web et/ou la gestion des bases de données. Le logiciel comprend : un serveur web (Apache 2.4), un interpréteur PHP (5.0 et 7.0) avec xDebug, un système de gestion de bases de données (MySQL 5.7) , SQLiteBrowser (client SQLite).', 0, NULL, 'Gestion de BDD', NULL, 'files/uwamp.png', 0),
(63, 'R studio', '2022.02.3', NULL, '', 'analyse de données, visualisation. R Studio est un EDI pour R. L\'archive contient R et R Studio (R doit être installé avant)', 0, NULL, 'analyse de données, statistique', NULL, 'files/logo_R.svg', 0),
(64, 'ADOBE', 'CS6', NULL, '', 'Attention : peu de licences disponibles à l\'IUT, 1 seule salle possible, pas d\'installation à la maison possible.', 0, NULL, 'Photoshop, illustrator', NULL, '', 0),
(65, 'The GIMP', '2.10.32', NULL, '', 'Utilitaire permettant le traitement d\'images', 0, NULL, 'Accessoire', NULL, '', 0),
(66, 'Paint .NET', '', NULL, '', 'Logiciel léger permettant le traitement des images', 0, NULL, 'Accessoire', NULL, '', 0),
(67, 'Openshot video editor', '2.6.1', NULL, '', 'Logiciel de montage vidéo', 0, NULL, 'Accessoire', NULL, '', 0),
(68, 'Audacity', '', NULL, '', 'Logiciel d\'édition Audio', 0, NULL, 'Accessoire', NULL, '', 0),
(69, 'PHPStorm', '', NULL, '', 'https://www.jetbrains.com/community/education/#classrooms', 0, NULL, 'EDI', NULL, '', 0),
(70, 'Inno Setup', '6.2.1', NULL, 'files/InnoSetup.pdf', 'Permet de réaliser des scripts d\'installation (<i>setup wizard</i>) pour des logiciels.', 0, NULL, 'Gestion de projet', NULL, '', 0),
(71, 'Dbeaver', '22.1', NULL, 'files/DBeaver.pdf', 'client bdd universel', 0, NULL, 'Gestion de BDD', NULL, 'files/beaver-head.png', 0),
(72, 'HxD Hex Editor', '2.5', NULL, '', 'Editeur hexadécimal simple', 0, NULL, 'Utilitaire système', NULL, '', 0),
(73, 'Vagrant', '2.2.19', NULL, '', 'Outil de virtualisation', 0, NULL, 'Utilitaire système', NULL, '', 0),
(74, 'XMing', '6.9', NULL, '', 'Serveur X pour Windows, permet notamment d\'utiliser des applications graphiques en WSL.', 0, NULL, 'Utilitaire système', NULL, '', 0),
(75, 'Looping', '4.0', NULL, '', 'Petit logiciel simple permettant d\'éditer des MCD (Merise), des MLD, des diagrammes E/R', 0, NULL, 'Accessoire', NULL, '', 0),
(76, 'DB Browser for SQLite', '3.12.2', NULL, '', 'Client simple pour administrer des bases de données SQLite', 0, NULL, 'Gestion de BDD', NULL, '', 0);

-- --------------------------------------------------------

--
-- Structure de la table `logiciel_filiere`
--

CREATE TABLE `logiciel_filiere` (
  `LogicielID` int(11) NOT NULL,
  `FiliereID` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `logiciel_filiere`
--

INSERT INTO `logiciel_filiere` (`LogicielID`, `FiliereID`) VALUES
(3, 1),
(7, 1),
(10, 1),
(13, 1),
(15, 1),
(16, 1),
(23, 1),
(24, 1),
(31, 1),
(33, 1),
(42, 1),
(43, 1),
(44, 1),
(47, 1),
(49, 1),
(58, 1),
(59, 1),
(61, 1),
(63, 1),
(72, 1),
(3, 2),
(5, 2),
(6, 2),
(12, 2),
(13, 2),
(16, 2),
(18, 2),
(19, 2),
(20, 2),
(21, 2),
(23, 2),
(24, 2),
(25, 2),
(26, 2),
(35, 2),
(37, 2),
(39, 2),
(44, 2),
(45, 2),
(49, 2),
(57, 2),
(59, 2),
(60, 2),
(61, 2),
(63, 2),
(69, 2),
(71, 2),
(76, 2),
(3, 3),
(5, 3),
(18, 3),
(20, 3),
(21, 3),
(23, 3),
(24, 3),
(25, 3),
(37, 3),
(40, 3),
(41, 3),
(42, 3),
(49, 3),
(59, 3),
(60, 3),
(63, 3),
(73, 3),
(12, 4),
(23, 4),
(26, 4),
(49, 4),
(58, 4),
(61, 4),
(64, 4);

-- --------------------------------------------------------

--
-- Structure de la table `logiciel_matiere`
--

CREATE TABLE `logiciel_matiere` (
  `LogicielID` int(11) NOT NULL,
  `MatiereID` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `logiciel_matiere`
--

INSERT INTO `logiciel_matiere` (`LogicielID`, `MatiereID`) VALUES
(3, 1),
(5, 1),
(6, 1),
(7, 1),
(12, 1),
(13, 1),
(16, 1),
(18, 1),
(19, 1),
(20, 1),
(22, 1),
(25, 1),
(26, 1),
(31, 1),
(35, 1),
(40, 1),
(43, 1),
(44, 1),
(49, 1),
(57, 1),
(58, 1),
(61, 1),
(65, 1),
(66, 1),
(68, 1),
(69, 1),
(70, 1),
(76, 1),
(3, 2),
(7, 2),
(22, 2),
(35, 2),
(42, 3),
(43, 3),
(45, 3),
(47, 3),
(59, 3),
(72, 3),
(73, 3),
(74, 3),
(5, 4),
(10, 4),
(21, 4),
(24, 4),
(37, 4),
(39, 4),
(60, 4),
(61, 4),
(63, 4),
(71, 4),
(75, 4),
(76, 4),
(15, 5),
(16, 5),
(23, 5),
(33, 5),
(44, 5),
(64, 5),
(70, 5),
(15, 6),
(16, 6),
(23, 6),
(43, 6),
(44, 6),
(65, 6),
(66, 6),
(67, 6),
(68, 6);

-- --------------------------------------------------------

--
-- Structure de la table `matiere`
--

CREATE TABLE `matiere` (
  `ID` int(11) NOT NULL,
  `Code` varchar(16) COLLATE utf8mb4_general_ci NOT NULL,
  `Nom` varchar(255) COLLATE utf8mb4_general_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `matiere`
--

INSERT INTO `matiere` (`ID`, `Code`, `Nom`) VALUES
(1, 'C1', 'Développement d\'applications'),
(2, 'C2', 'Optimiser des applications'),
(3, 'C3', 'Administrer des systèmes'),
(4, 'C4', 'Gérer des données'),
(5, 'C5', 'Conduire un projet'),
(6, 'C6', 'Travailler dans une équipe');

-- --------------------------------------------------------

--
-- Structure de la table `utilisateur`
--

CREATE TABLE `utilisateur` (
  `login` varchar(16) COLLATE utf8mb4_general_ci NOT NULL,
  `role` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `utilisateur`
--

INSERT INTO `utilisateur` (`login`, `role`) VALUES
('aguidet', 1);

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `filiere`
--
ALTER TABLE `filiere`
  ADD PRIMARY KEY (`ID`),
  ADD UNIQUE KEY `nom` (`nom`);

--
-- Index pour la table `logiciel`
--
ALTER TABLE `logiciel`
  ADD PRIMARY KEY (`ID`),
  ADD KEY `nom` (`nom`),
  ADD KEY `FKLogiciel494130` (`Utilisateurlogin`);

--
-- Index pour la table `logiciel_filiere`
--
ALTER TABLE `logiciel_filiere`
  ADD PRIMARY KEY (`LogicielID`,`FiliereID`),
  ADD KEY `FKLogiciel_F972294` (`FiliereID`);

--
-- Index pour la table `logiciel_matiere`
--
ALTER TABLE `logiciel_matiere`
  ADD PRIMARY KEY (`LogicielID`,`MatiereID`),
  ADD KEY `FKLogiciel_M909644` (`MatiereID`);

--
-- Index pour la table `matiere`
--
ALTER TABLE `matiere`
  ADD PRIMARY KEY (`ID`),
  ADD UNIQUE KEY `Code` (`Code`);

--
-- Index pour la table `utilisateur`
--
ALTER TABLE `utilisateur`
  ADD PRIMARY KEY (`login`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `filiere`
--
ALTER TABLE `filiere`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT pour la table `logiciel`
--
ALTER TABLE `logiciel`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=77;

--
-- AUTO_INCREMENT pour la table `matiere`
--
ALTER TABLE `matiere`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `logiciel`
--
ALTER TABLE `logiciel`
  ADD CONSTRAINT `FKLogiciel494130` FOREIGN KEY (`Utilisateurlogin`) REFERENCES `utilisateur` (`login`);

--
-- Contraintes pour la table `logiciel_filiere`
--
ALTER TABLE `logiciel_filiere`
  ADD CONSTRAINT `FKLogiciel_F636153` FOREIGN KEY (`LogicielID`) REFERENCES `logiciel` (`ID`),
  ADD CONSTRAINT `FKLogiciel_F972294` FOREIGN KEY (`FiliereID`) REFERENCES `filiere` (`ID`);

--
-- Contraintes pour la table `logiciel_matiere`
--
ALTER TABLE `logiciel_matiere`
  ADD CONSTRAINT `FKLogiciel_M278973` FOREIGN KEY (`LogicielID`) REFERENCES `logiciel` (`ID`),
  ADD CONSTRAINT `FKLogiciel_M909644` FOREIGN KEY (`MatiereID`) REFERENCES `matiere` (`ID`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
