package main

import (
	"fmt"
	"net/http"

	"github.com/axzilla/axeladrian/assets"
)

func main() {
	mux := http.NewServeMux()

	// Serve static files
	mux.Handle("/assets/", http.StripPrefix("/assets/", http.FileServer(http.FS(assets.Assets))))

	// Serve main page
	mux.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
		http.ServeFile(w, r, "./templates/index.html")
	})

	fmt.Println("Server running on http://localhost:8090")
	http.ListenAndServe(":8090", mux)
}
