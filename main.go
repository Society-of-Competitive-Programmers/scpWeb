package main

import (
	"log"
	"net/http"
	"os"

	"github.com/gin-contrib/static"
	"github.com/gin-gonic/gin"
)

/* Change to init when Deploying */
func init() {
	//Initializing variables
	router := gin.Default()
	const staticDirPath string = "./scpWeb-ui/dist/scpWeb-ui"

	//Getting Port #
	port := os.Getenv("PORT")
	if port == "" {
		port = "8080"
		log.Printf("Defaulting to port %s", port)
	}

	//Host Static Angular Page
	router.Use(static.Serve("/", static.LocalFile(staticDirPath, false)))

	//Mapping GET Requests
	router.GET("/spotlightInfo", getSpotlightInfo)
	router.GET("/upcomingHackathons", getUpcomingHackathonInfo)
	router.GET("/workshops", getWorkshopInfo)
	router.GET("/hackathonPrep", getHackathonPrepInfo)

	//If no route is met, redirect to home
	router.NoRoute(func(c *gin.Context) {
		c.Redirect(http.StatusMovedPermanently, "/")
	})

	//Running application
	err := router.Run(":" + port)
	if err != nil {
		panic(err)
	}
}

/* GET Requests */
func getSpotlightInfo(c *gin.Context) {
	c.Header("Access-Control-Allow-Origin", "*")
	c.Header("Access-Control-Allow-Headers", "access-control-allow-origin, access-control-allow-headers")

	var spotlightInfoArray = RetrieveSpotlightJSON()

	c.JSON(http.StatusOK, spotlightInfoArray)
}

func getUpcomingHackathonInfo(c *gin.Context) {
	c.Header("Access-Control-Allow-Origin", "*")
	c.Header("Access-Control-Allow-Headers", "access-control-allow-origin, access-control-allow-headers")

	upcomingHackathonInfoArray := RetrieveHackathonInfo()

	c.JSON(http.StatusOK, upcomingHackathonInfoArray)
}

func getWorkshopInfo(c *gin.Context) {
	c.Header("Access-Control-Allow-Origin", "*")
	c.Header("Access-Control-Allow-Headers", "access-control-allow-origin, access-control-allow-headers")

	workShopInfoArray := RetrieveInfoFromDrive("W")

	c.JSON(http.StatusOK, workShopInfoArray)
}

func getHackathonPrepInfo(c *gin.Context) {
	c.Header("Access-Control-Allow-Origin", "*")
	c.Header("Access-Control-Allow-Headers", "access-control-allow-origin, access-control-allow-headers")

	hackathonPrepInfoArray := RetrieveInfoFromDrive("HP")

	c.JSON(http.StatusOK, hackathonPrepInfoArray)

}
