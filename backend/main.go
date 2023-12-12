package main

import (
	"fmt"
	"net/http"
)

type emailHandler struct{}

func (e *emailHandler) ServeHTTP(w http.ResponseWriter, r *http.Request) {
	e.handleEmailSend(w, r)
}

func (e *emailHandler) handleEmailSend(w http.ResponseWriter, r *http.Request) {
	fmt.Fprintln(w, "Email sent successfully!")
}

func main() {
	mux := http.NewServeMux()
	mux.Handle("/email/", &emailHandler{})
	http.ListenAndServe(":8080", mux)
}
