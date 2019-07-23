package main

/* Classes */

//SpotlightInfo for spotlight + home page
type SpotlightInfo struct {
	ImageTitle    string
	Hackathon     string
	HackathonDate string
	Award         string
	Team          string
	ProjectTitle  string
	ProjectDesc   string
	LinkHref      string
}

//Meeting for Both Workshops and HackPrepMeetings
type Meeting struct {
	Title     string
	Location  string
	DayOfWeek string
	EventDay  string
}

//UpcomingHackathon for Home Page
type UpcomingHackathon struct {
	Name       string
	University string
	EventDate  string
	Location   string
	Website    string
}
