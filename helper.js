function SpotlightInfo(ImageTitle, Hackathon, HackathonDate, Award, Team, ProjectTitle, ProjectDesc, LinkHref) {
	this.ImageTitle = ImageTitle;
	this.Hackathon = Hackathon;
	this.HackathonDate = HackathonDate;
	this.Award = Award;
	this.Team = Team;
	this.ProjectTitle = ProjectTitle;
	this.ProjectDesc = ProjectDesc;
	this.LinkHref = LinkHref;
}

function UpcomingHackathon (Name, University, EventDate, Website) {
    this.Name = Name;
	this.University = University;
	this.EventDate = EventDate;
	this.Website = Website;
}
    
function Meeting (Title, Location, DayOfWeek, EventDay) {
    this.Title = Title;
	this.Location = Location;
	this.DayOfWeek = DayOfWeek;
	this.EventDay = EventDay;
}

module.exports = {
    //RetrieveSpotlightJSON helper function
    RetrieveSpotlightJSON: function() {
        var spotlightInfoArray = []

        spotlightInfoArray.push(new SpotlightInfo(
            "qualcomm_award_hackabull.jpg",
            "Hack-A-Bull 2019",
            "March 23-24, 2019",
            "Best Hack Using a Qualcomm Device",
            "Anoop Babu, Jose-Pablo (JP) Mantilla, Jose Ramirez, Noah Hamilton",
            "Track-A-Bull",
            "A real-time inventory security system with a Qualcomm 410C Dragonboard.",
            "https://devpost.com/software/trackabull?fbclid=IwAR0AMHF4jHS_M4oZ87C8m1WIM8m_q0kBgdy2z_KUL4NvcSJiNg-J8i5AeMU"
        ));

        spotlightInfoArray.push(new SpotlightInfo(
            "hackabull_second_place.jpg",
            "Hack-A-Bull 2019",
            "March 23-24, 2019",
            "Second Place",
            "Jim Mirzakhalov, Gjergji Paco, Logan Lopez, Julia Schmidt",
            "Food4Grabs",
            "Food4grabs is able to reduce food waste by connecting local customers with food that is relatively about to be thrown away by fast food companies.",
            "https://devpost.com/software/food4grabs?fbclid=IwAR0JWdrNXZGgUC9Yd7JknwxRv4D73GRI7Wyx6ckaceZ17mI84rA9tOvrPQk",
        ));

        spotlightInfoArray.push(new SpotlightInfo(
            "best_hack_for_social_good_hackabull.jpg",
            "Hack-A-Bull 2019",
            "March 23-24, 2019",
            "JP Morgan's Best Hack for Social Good & Hack-A-Bull's Best Hardware Hack",
            "Tessy Flaitz, Willie McClinton, Brandon Wolfram, Derryk Theberge",
            "eMesh.io",
            "A hardware device that enables the users to have a long-range communications device without the need for wifi or Bluetooth. It uses the rfm69 module to send data between raspberry pis. We also have an app that allows the user to use their phone to communicate with the pis and the network via Bluetooth.",
            "https://devpost.com/software/emesh-io?fbclid=IwAR2MeWLSbd08xYySMTyL7AWf4zsAGz1L4vPdvR61_u35lNt5sA9cbJUz9U4",
        ));

        spotlightInfoArray.push(new SpotlightInfo(
            "knightHacksWinners.jpg",
            "KnightHacks 2019",
            "March 1-3, 2019",
            "First Place",
            "Jim Mirzakhalov, Willie McClinton, Anoop Babu, Tessy Flaitz",
            "Classrom.ai",
            "Classroom.ai allows students to self-report their confidence levels during class. It anonymously shares this data with teachers so they can adjust mid-lecture or look back later to see what confused students most. This data is also used to create a personalized model that recognizes individual student's faces and determines whether they are feeling confused, neutral, or confident.",
            "https://devpost.com/software/classroom-ai?fbclid=IwAR2E6msEknFmDau8eGuFw-8wsr7kDfkf9xJNzbv0j-ZqCOwF1lSoUj3jmZU",
        ));

        spotlightInfoArray.push(new SpotlightInfo(
            "mango_hacks_winners_spotlight.jpg",
            "MangoHacks 2019",
            "Februrary 1-3, 2019",
            "Best Use of Google Cloud Platform",
            "Jim Mirzakhalov, Nhi Pham, Anoop Babu, Brandon Wolfram",
            "PillEx",
            "They have developed a system of solutions for elderly patients and their caregivers. Their project involved a standalone device that can detect pills to avoid the risks of medication misuse among the elderly. In addition, a mobile application has been developed to be used by caregivers which helps them to make sure their patients take their pills accurately and in a timely manner. ",
            "https://devpost.com/software/pillex",
        ));

        spotlightInfoArray.push(new SpotlightInfo(
            "mango_hacks_more_winners_spotlight.jpg",
            "MangoHacks 2019",
            "Februrary 1-3, 2019",
            "Best Hack for Patients, Caregivers, & Physicians",
            "Si Dang, Karishma Jayaprakash, Krishna Patel, Duy Nguyen",
            "OpenMind",
            "OpenMind helps disabled people to perform simultaneously like an average individual by reducing the discomfort that disabled people encounter in their everyday life. An Emotiv headset was used to track the mind waves and convert them into a key to control a robot arm. Although we primarily focused it on robotic arms for disabled people as physical extensions, it can also be implemented on wheelchairs to create a similar situation for helping people who are paralyzed by using their brain waves to move the wheelchair. It can also be used to detect if the driver of a vehicle feels sleepy and since the system tracks the mindset in nanoseconds, it can ring an alarm to alert the driver or even stop the car.",
            "https://devpost.com/software/openmind",
        ));

        spotlightInfoArray.push(new SpotlightInfo(
            "calhacks2Spotlight.jpeg",
            "CalHacks 5.0",
            "November 2-4, 2018",
            "Best Use of Authorize.Net",
            "Madeline Collins, Muntaser Syed, Willie McClinton, Jim Mirzakhalov",
            "YakPack",
            "A mobile application that lets people in close proximity use shared online carts to make good use of discounts, coupons and shipping waivers.",
            "",
        ));

        spotlightInfoArray.push(new SpotlightInfo(
            "hackabullSpotlight.jpg",
            "Hack-A-Bull 2018",
            "March 22-23, 2018",
            "Best Hardware Hack",
            "Teresa Flaitz, Mohammed Ameen, Willie McClinton, Jim Mirzakhalov",
            "Fix8",
            "a mobile app that uses Muse to interpret brainwaves and quantify focus and drowsiness. Based on data received and user preferences, Fix8 sends notifications with sound or vibration that tell the user if they have dipped below focus or drowsiness thresholds.",
            "https://devpost.com/software/fix8",
        ));

        return spotlightInfoArray;
    },

    //RetrieveHackathonInfo helper function
    RetrieveHackathonInfo: function() {
        //TODO: GET THIS INFO FROM EITHER GOOGLE DRIVE OR MLH WEBSITE
        let upcomingHackathonInfo = [];

        upcomingHackathonInfo.push(new UpcomingHackathon('PennApps XX','University of Pennsylvania','September 7-9','http://2019f.pennapps.com/'));
        upcomingHackathonInfo.push(new UpcomingHackathon('HackMIT','MIT','September 13-15','https://hackmit.org/'));
        upcomingHackathonInfo.push(new UpcomingHackathon('ShellHacks','FIU','September 20-22','https://shellhacks.net/'));
        upcomingHackathonInfo.push(new UpcomingHackathon('HackFSU','FSU','October 18-20','https://hackfsu.com/'));
        upcomingHackathonInfo.push(new UpcomingHackathon('HackGT 6','Georgia Tech','October 25-27','https://2019.hack.gt/'));
        upcomingHackathonInfo.push(new UpcomingHackathon('PheonixHacks', 'Florida Polytechnic University', 'November 2-3', 'https://phoenixhacks.com/'));
        
        return upcomingHackathonInfo;
    },

    //RetrieveInfoFromDrive helper function
    RetrieveInfoFromDrive: function(dataToRetrieve) {
        // TODO: GET THIS INFO FROM GOOGLE DRIVE
        let meetingInfoArr = [];
        if(dataToRetrieve === 'W') {
            meetingInfoArr.push(new Meeting('Intro to Python', 'ENB 313', 'Tuesday', '9/17/19'));
            meetingInfoArr.push(new Meeting('Intro to JS', 'ENB 313', 'Tuesday', '9/24/19'));
            meetingInfoArr.push(new Meeting('DApps with Blockstack', 'ENB 313', 'Tuesday', '10/01/2019'));
            meetingInfoArr.push(new Meeting('Building apps with flutter', 'ENB 313', 'Tuesday', '10/08/2019'));
            meetingInfoArr.push(new Meeting('Automation with UIPath', 'ENB 313', 'Tuesday', '10/15/2019'));
            meetingInfoArr.push(new Meeting('Using GCP for beginners', 'ENB 313', 'Tuesday', '10/22/2019'));
            meetingInfoArr.push(new Meeting('Deploying with Azure', 'ENB 313', 'Tuesday', '10/29/2019'));
            meetingInfoArr.push(new Meeting('Intro to Raspbberry Pi', 'ENB 313', 'Tuesday', '11/05/19'));
            meetingInfoArr.push(new Meeting('Machine Learning', 'ENB 313', 'Tuesday', '11/12/2019'));
            meetingInfoArr.push(new Meeting('Introduction to R', 'ENB 313', 'Tuesday', '11/19/2019'));
        } else {
            meetingInfoArr.push(new Meeting('ShellHacks Prep Meeting', 'ENB 313', 'Thursday', '9/19/19'));
            meetingInfoArr.push(new Meeting('Hackathon Prep Meeting', 'TBD', 'Thursday', '9/26/19'));
            meetingInfoArr.push(new Meeting('Hackathon Prep Meeting', 'TBD', 'Thursday', '10/3/19'));
            meetingInfoArr.push(new Meeting('Hackathon Prep Meeting', 'TBD', 'Thursday', '10/10/19'));
            meetingInfoArr.push(new Meeting('Hackathon Prep Meeting', 'TBD', 'Thursday', '10/17/19'));
            meetingInfoArr.push(new Meeting('Hackathon Prep Meeting', 'TBD', 'Thursday', '10/24/19'));
            meetingInfoArr.push(new Meeting('Hackathon Prep Meeting', 'TBD', 'Thursday', '10/31/19'));
            meetingInfoArr.push(new Meeting('Hackathon Prep Meeting', 'TBD', 'Thursday', '11/7/19'));
            meetingInfoArr.push(new Meeting('Hackathon Prep Meeting', 'TBD', 'Thursday', '11/14/19'));
            meetingInfoArr.push(new Meeting('Hackathon Prep Meeting', 'TBD', 'Thursday', '11/21/19'));
        }
        
        
        return meetingInfoArr;
    },

}
