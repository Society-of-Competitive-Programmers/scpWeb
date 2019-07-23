package main

/* Helper Functions */

//RetrieveSpotlightJSON helper function
func RetrieveSpotlightJSON() []SpotlightInfo {
	var spotlightInfoArray []SpotlightInfo

	spotlightInfoArray = append(spotlightInfoArray, SpotlightInfo{
		"qualcomm_award_hackabull.jpg",
		"Hack-A-Bull 2019",
		"March 23-24, 2019",
		"Best Hack Using a Qualcomm Device",
		"Anoop Babu, Jose-Pablo (JP) Mantilla, Jose Ramirez, Noah Hamilton",
		"Track-A-Bull",
		"A real-time inventory security system with a Qualcomm 410C Dragonboard.",
		"https://devpost.com/software/trackabull?fbclid=IwAR0AMHF4jHS_M4oZ87C8m1WIM8m_q0kBgdy2z_KUL4NvcSJiNg-J8i5AeMU",
	})

	spotlightInfoArray = append(spotlightInfoArray, SpotlightInfo{
		"hackabull_second_place.jpg",
		"Hack-A-Bull 2019",
		"March 23-24, 2019",
		"Second Place",
		"Jim Mirzakhalov, Gjergji Paco, Logan Lopez, Julia Schmidt",
		"Food4Grabs",
		"Food4grabs is able to reduce food waste by connecting local customers with food that is relatively about to be thrown away by fast food companies.",
		"https://devpost.com/software/food4grabs?fbclid=IwAR0JWdrNXZGgUC9Yd7JknwxRv4D73GRI7Wyx6ckaceZ17mI84rA9tOvrPQk",
	})

	spotlightInfoArray = append(spotlightInfoArray, SpotlightInfo{
		"best_hack_for_social_good_hackabull.jpg",
		"Hack-A-Bull 2019",
		"March 23-24, 2019",
		"JP Morgan's Best Hack for Social Good & Hack-A-Bull's Best Hardware Hack",
		"Tessy Flaitz, Willie McClinton, Brandon Wolfram, Derryk Theberge",
		"eMesh.io",
		"A hardware device that enables the users to have a long-range communications device without the need for wifi or Bluetooth. It uses the rfm69 module to send data between raspberry pis. We also have an app that allows the user to use their phone to communicate with the pis and the network via Bluetooth.",
		"https://devpost.com/software/emesh-io?fbclid=IwAR2MeWLSbd08xYySMTyL7AWf4zsAGz1L4vPdvR61_u35lNt5sA9cbJUz9U4",
	})

	spotlightInfoArray = append(spotlightInfoArray, SpotlightInfo{
		"knightHacksWinners.jpg",
		"KnightHacks 2019",
		"March 1-3, 2019",
		"First Place",
		"Jim Mirzakhalov, Willie McClinton, Anoop Babu, Tessy Flaitz",
		"Classrom.ai",
		"Classroom.ai allows students to self-report their confidence levels during class. It anonymously shares this data with teachers so they can adjust mid-lecture or look back later to see what confused students most. This data is also used to create a personalized model that recognizes individual student's faces and determines whether they are feeling confused, neutral, or confident.",
		"https://devpost.com/software/classroom-ai?fbclid=IwAR2E6msEknFmDau8eGuFw-8wsr7kDfkf9xJNzbv0j-ZqCOwF1lSoUj3jmZU",
	})

	spotlightInfoArray = append(spotlightInfoArray, SpotlightInfo{
		"mango_hacks_winners_spotlight.jpg",
		"MangoHacks 2019",
		"Februrary 1-3, 2019",
		"Best Use of Google Cloud Platform",
		"Jim Mirzakhalov, Nhi Pham, Anoop Babu, Brandon Wolfram",
		"PillEx",
		"They have developed a system of solutions for elderly patients and their caregivers. Their project involved a standalone device that can detect pills to avoid the risks of medication misuse among the elderly. In addition, a mobile application has been developed to be used by caregivers which helps them to make sure their patients take their pills accurately and in a timely manner. ",
		"https://devpost.com/software/pillex",
	})

	spotlightInfoArray = append(spotlightInfoArray, SpotlightInfo{
		"mango_hacks_more_winners_spotlight.jpg",
		"MangoHacks 2019",
		"Februrary 1-3, 2019",
		"Best Hack for Patients, Caregivers, & Physicians",
		"Si Dang, Karishma Jayaprakash, Krishna Patel, Duy Nguyen",
		"OpenMind",
		"OpenMind helps disabled people to perform simultaneously like an average individual by reducing the discomfort that disabled people encounter in their everyday life. An Emotiv headset was used to track the mind waves and convert them into a key to control a robot arm. Although we primarily focused it on robotic arms for disabled people as physical extensions, it can also be implemented on wheelchairs to create a similar situation for helping people who are paralyzed by using their brain waves to move the wheelchair. It can also be used to detect if the driver of a vehicle feels sleepy and since the system tracks the mindset in nanoseconds, it can ring an alarm to alert the driver or even stop the car.",
		"https://devpost.com/software/openmind",
	})

	spotlightInfoArray = append(spotlightInfoArray, SpotlightInfo{
		"calhacks2Spotlight.jpeg",
		"CalHacks 5.0",
		"November 2-4, 2018",
		"Best Use of Authorize.Net",
		"Madeline Collins, Muntaser Syed, Willie McClinton, Jim Mirzakhalov",
		"YakPack",
		"A mobile application that lets people in close proximity use shared online carts to make good use of discounts, coupons and shipping waivers.",
		"",
	})

	spotlightInfoArray = append(spotlightInfoArray, SpotlightInfo{
		"hackabullSpotlight.jpg",
		"Hack-A-Bull 2018",
		"March 22-23, 2018",
		"Best Hardware Hack",
		"Teresa Flaitz, Mohammed Ameen, Willie McClinton, Jim Mirzakhalov",
		"Fix8",
		"a mobile app that uses Muse to interpret brainwaves and quantify focus and drowsiness. Based on data received and user preferences, Fix8 sends notifications with sound or vibration that tell the user if they have dipped below focus or drowsiness thresholds.",
		"https://devpost.com/software/fix8",
	})

	return spotlightInfoArray
}

//RetrieveHackathonInfo helper function
func RetrieveHackathonInfo() []UpcomingHackathon {
	//TODO: GET THIS INFO FROM EITHER GOOGLE DRIVE OR MLH WEBSITE

	return []UpcomingHackathon{}
}

//RetrieveInfoFromDrive helper function
func RetrieveInfoFromDrive(dataToRetrieve string) []Meeting {
	// TODO: GET THIS INFO FROM GOOGLE DRIVE

	return []Meeting{}
}
