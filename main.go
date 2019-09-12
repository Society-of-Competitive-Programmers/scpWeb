package main

//Project-Id: scp-website-227103

import (
	//"google.golang.org/api/calendar/v3"
	//"encoding/json"
	//"fmt"
	"html/template"
	"log"
	"net/http"
	//"os"
	//"reflect"
	//"time"
	//"golang.org/x/net/context"
	//"golang.org/x/oauth2"
	//"golang.org/x/oauth2/google"
	//"google.golang.org/api/gmail/v1"
	//"cloud.google.com/go/storage"
	//"google.golang.org/api/cloudkms/v1"
)

var tmpl *template.Template

type pageData struct {
	Title    string
	PageName string
}

func init() { //main (debug) -> init(deploy) //gcloud app deploy from within the gcloud terminal
	tmpl = template.Must(template.ParseGlob("pub/*.html"))

	http.HandleFunc("/", index)
	http.HandleFunc("/about", about)
	http.HandleFunc("/contact", contact)
	http.HandleFunc("/expo", expo)
	http.HandleFunc("/schedule", schedule)
	http.HandleFunc("/spotlight", spotlight)

	http.Handle("/src/", http.StripPrefix("/src/", http.FileServer(http.Dir("src"))))

	log.Fatal(http.ListenAndServe(":8080", nil))
	//comment to deploy ^
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

func spotlight(w http.ResponseWriter, r *http.Request) {
	pd := pageData{
		Title: "Spotlight",
	}

	err := tmpl.ExecuteTemplate(w, "spotlight.html", pd)

	if err != nil {
		log.Println(err)
		http.Error(w, "Internal Server Error", http.StatusInternalServerError)
		return
	}

	// ctx := context.Background()

	// // // For API packages whose import path is starting with "cloud.google.com/go",
	// // // such as cloud.google.com/go/storage in this case, if there are no credentials
	// // // provided, the client library will look for credentials in the environment.
	// creds, err := google.FindDefaultCredentials(ctx, storage.ScopeReadOnly)
	// if err != nil {
	// 	log.Fatal(err)
	// }
	// client, err := storage.NewClient(ctx, option.WithCredentials(creds))
	// if err != nil {
	// 	log.Fatal(err)
	// }
	// fmt.Println("Buckets:")
	// it := client.Buckets(ctx, "scp-website-227103")
	// for {
	// 	battrs, err := it.Next()
	// 	if err == iterator.Done {
	// 		break
	// 	}
	// 	if err != nil {
	// 		log.Fatal(err)
	// 	}
	// 	fmt.Println(battrs.Name)
	// }
	// storageClient, err := storage.NewClient(ctx)
	// if err != nil {
	// 	log.Fatal(err)
	// }

	// it := storageClient.Buckets(ctx, "scp-website-227103")
	// for {
	// 	bucketAttrs, err := it.Next()
	// 	// if err == iterator.Done {
	// 	// 	break
	// 	// }
	// 	if err != nil {
	// 		log.Fatal(err)
	// 	}
	// 	fmt.Println
	// 	(bucketAttrs.Name)
}

// For packages whose import path is starting with "google.golang.org/api",
// such as google.golang.org/api/cloudkms/v1, use the
// golang.org/x/oauth2/google package as shown below.
// oauthClient, err := google.DefaultClient(ctx, cloudkms.CloudPlatformScope)
// if err != nil {
// 	log.Fatal(err)
// }

// srv, err := calendar.New(oauthClient)
// if err != nil {
// 	log.Fatal(err)
// }

// t := time.Now().Format(time.RFC3339)
// events, err := srv.Events.List("primary").ShowDeleted(false).
// 	SingleEvents(true).TimeMin(t).MaxResults(10).OrderBy("startTime").Do()
// if err != nil {
// 	log.Fatalf("Unable to retrieve next ten of the user's events: %v", err)
// }
// fmt.Println("Upcoming events:")
// if len(events.Items) == 0 {
// 	fmt.Println("No upcoming events found.")
// } else {
// 	for _, item := range events.Items {
// 		// date := item.Start.DateTime
// 		// if date == "" {
// 		// 	date = item.Start.Date
// 		// }
// 		// fmt.Printf("%v (%v)\n", item.Summary, date)
// 		fmt.Println("New Element: ")
// 		t := reflect.TypeOf(item).Elem()
// 		v := reflect.ValueOf(item).Elem()
// 		for i := 0; i < t.NumField(); i++ {
// 			fmt.Printf("%+v\n", t.Field(i))
// 			fmt.Println(v.Field(i))
// 		}
// 	}
// }

// pd := pageData{
// 	Title: "Spotlight",
// }

// if len(events.Items) == 0 {
// 	pd = pageData{
// 		Title: "It works",
// 	}
// }

// err = tmpl.ExecuteTemplate(w, "spotlight.html", pd)

// if err != nil {
// 	log.Println(err)
// 	http.Error(w, "Internal Server Error", http.StatusInternalServerError)
// 	return
// }

/* Google Cloud Auth */
// implicit uses Application Default Credentials to authenticate.
// func implicit() {

// }

// func main() {
// 	implicit()
// }
