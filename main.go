package main

import (
	"html/template"
	"log"
	"net/http"
)

var tmpl *template.Template

type pageData struct {
	Title    string
	PageName string
}

func init() {
	tmpl = template.Must(template.ParseGlob("pub/*.html"))

	http.HandleFunc("/", index)
	http.HandleFunc("/about", about)
	http.HandleFunc("/contact", contact)
	http.HandleFunc("/expo", expo)
	http.HandleFunc("/schedule", schedule)

	http.Handle("/src/", http.StripPrefix("/src/", http.FileServer(http.Dir("src"))))

	//log.Fatal(http.ListenAndServe(":8080", nil))
}

func index(w http.ResponseWriter, r *http.Request) {
	pd := pageData{
		Title: "Society of Competitive Programmers",
	}

	err := tmpl.ExecuteTemplate(w, "index.html", pd)

	if err != nil {
		log.Println(err)
		http.Error(w, "Internal Server Error", http.StatusInternalServerError)
		return
	}
}

func about(w http.ResponseWriter, r *http.Request) {
	pd := pageData{
		Title: "About Us",
	}

	err := tmpl.ExecuteTemplate(w, "about.html", pd)

	if err != nil {
		log.Println(err)
		http.Error(w, "Internal Server Error", http.StatusInternalServerError)
		return
	}
}

func contact(w http.ResponseWriter, r *http.Request) {
	pd := pageData{
		Title: "Contact Us",
	}

	err := tmpl.ExecuteTemplate(w, "contact.html", pd)

	if err != nil {
		log.Println(err)
		http.Error(w, "Internal Server Error", http.StatusInternalServerError)
		return
	}
}

func expo(w http.ResponseWriter, r *http.Request) {
	pd := pageData{
		Title: "Engineering Expo",
	}

	err := tmpl.ExecuteTemplate(w, "expo.html", pd)

	if err != nil {
		log.Println(err)
		http.Error(w, "Internal Server Error", http.StatusInternalServerError)
		return
	}
}

func schedule(w http.ResponseWriter, r *http.Request) {
	pd := pageData{
		Title: "Schedule",
	}

	err := tmpl.ExecuteTemplate(w, "schedule.html", pd)

	if err != nil {
		log.Println(err)
		http.Error(w, "Internal Server Error", http.StatusInternalServerError)
		return
	}
}
