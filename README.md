~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
~~~~~~~~~~~~~~~													~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
~~~~~~~~~~~~~~~													~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
~~~~~~~~~~~~~~~													~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
		  ____       _       _     U _____ u  __  __    ____           _       U  ___ u _____   ~~~~~~~~~~~~~~
		 / __"| uU  /"\  u  |"|    \| ___"|/U|' \/ '|u / __"| u       |"|       \/"_ \/|_ " _|  ~~~~~~~~~~~~~~
		<\___ \/  \/ _ \/ U | | u   |  _|"  \| |\/| |/<\___ \/      U | | u     | | | |  | |    ~~~~~~~~~~~~~~
		 u___) |  / ___ \  \| |/__  | |___   | |  | |  u___) |       \| |/__.-,_| |_| | /| |\   ~~~~~~~~~~~~~~
		 |____/>>/_/   \_\  |_____| |_____|  |_|  |_|  |____/>>       |_____|\_)-\___/ u |_|U   ~~~~~~~~~~~~~~
		  )(  (__)\\    >>  //  \\  <<   >> <<,-,,-.    )(  (__)      //  \\      \\   _// \\_  ~~~~~~~~~~~~~~
		 (__)    (__)  (__)(_")("_)(__) (__) (./  \.)  (__)          (_")("_)    (__) (__) (__) ~~~~~~~~~~~~~~
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
~~~~~~~~~~~~~~  		       _                  _     _  _       _                    ~~~~~~~~~~~~~~~~~~~~~~
~~~~~~~~~~~~~~			      | |                | |   | |(_)     | |                   ~~~~~~~~~~~~~~~~~~~~~~
~~~~~~~~~~~~~~			  ___ | |__    ___   ___ | | __| | _  ___ | |_                  ~~~~~~~~~~~~~~~~~~~~~~
~~~~~~~~~~~~~~			 / __|| '_ \  / _ \ / __|| |/ /| || |/ __|| __|                 ~~~~~~~~~~~~~~~~~~~~~~
~~~~~~~~~~~~~~			| (__ | | | ||  __/| (__ |   < | || |\__ \| |_                  ~~~~~~~~~~~~~~~~~~~~~~
~~~~~~~~~~~~~~			 \___||_| |_| \___| \___||_|\_\|_||_||___/ \__|                 ~~~~~~~~~~~~~~~~~~~~~~
~~~~~~~~~~~~~~			    									        ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
~~~~~~~~~~~~~~													        ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
~~~~~~~~~~~~~~													        ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~



~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
INTRODUCTION
------------

# salems-lot
CSCI 4700 (2022) Project: "Create an app/software that could take in a procedure checklist and turn it into a step by step guide"

(end)INTRODUCTION
------------
	To create a procedural checklist form for our customer's stated desire for a management system for dynamic form data and collection. 

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
REQUIREMENTS
------------

This section describes the module requirements for the following modules:
~~~~~~~~~~~~~~~						Project						~~~~~~~~~~~~~~~~~~~~
~~~~~~~~~~~~~~~													~~~~~~~~~~~~~~~~~~~~
			
$clone repo to local machine
$install most recent installation of node.js from
	https://nodejs.org/dist/v19.2.0/node-v19.2.0-x64.msi
$install mongoDB compass community edition from
	https://www.mongodb.com/products/compass
													DEV TOOLS
														POSTMAN install 							
(end)REQUIREMENTS
------------

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
INSTALLATION
------------
~~~~~~~~~~~~~~~						checklist						                        ~~~~~~~~~~~~~~~~~~
~~~~~~~~~~~~~~~													                            ~~~~~~~~~~~~~~~~~~
$cd into root directory cloned folder

								cd demo/front
 		* npm install react@latest react-dom@latest react-router-dom bootstrap@4.6.2 react-bootstrap axios react-validation validator sass file-saver

~~~~~~~~~~~~~~~						server						                        ~~~~~~~~~~~~~~~~~~
~~~~~~~~~~~~~~~													                            ~~~~~~~~~~~~~~~~~~
$cd .. (to root of project)
	cd demo/server
 * npm install express mongoose cors jsonwebtoken bcryptjs --save


(end)INSTALLATION
------------


~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
USAGE
------------
1. Home view / Notes List 
	This page is list of template forms to create instances for each study questionnaire. 
	This allows the application to hold many forms for general use with the ability to customize and add new forms as necessary.

2. Submission List holds forms for general use and submission. 

3. To create a new form to publish, Select Create Form at top
	Top section is list of sections to create. 
		Ex.
		 Pre-Session / During Session / Post-Session
	To add questions to section, 

		Add a new statement and type the section name to fill.
		Repeat as necessary
			(Choice selector soon to feature drop-down list from user options.)
		Click submit to publish to available notes. 

	To publish a form for general use and customization
		Select note in Note List View, and select Publish. 
			Note will then appear in 

	To fill a form out with questionnaire data
		Look through published notes and click Create Instance 
		Answer questions accordingly and then click submit
		File save option will prompt for location to save on local computer
		Click Ok to save


MAINTAINERS
-----------

Current maintainers:
 * Brian
 * Brice Roberts (devloren) - https://github.com/devloren
 * Gage  (Keyami) - https://github.com/Keyami
 * Jaylon
 * Pierce
 * Riley

 
This project has been sponsored by:
 * Salem's Lot
 *  ~~~ Middle Tennessee State University
 *  ~~~ Computer Science Department
 *  ~~~ Software Engineering CSCI-4700
 *  ~~~ Fall 2022 Group Project
