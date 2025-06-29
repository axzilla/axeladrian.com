package main

import (
	"embed"
	"fmt"
	"net/http"

	"github.com/axzilla/axeladrian/assets"
)

//go:embed templates/index.html
var htmlFS embed.FS

func main() {
	mux := http.NewServeMux()

	// Serve static files
	mux.Handle("/assets/", http.StripPrefix("/assets/", http.FileServer(http.FS(assets.Assets))))

	// Serve main page
	mux.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
		data, err := htmlFS.ReadFile("templates/index.html")
		if err != nil {
			http.Error(w, "not found", 404)
			return
		}
		w.Header().Set("Content-Type", "text/html")
		w.Write(data)
	})

	fmt.Println("Server running on http://localhost:8090")
	http.ListenAndServe(":8090", mux)
}
