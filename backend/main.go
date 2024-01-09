package main

import (
	"encoding/json"
	"fmt"
	"log"
	"net/http"
	"net/smtp"

	"github.com/rs/cors"
)

type EmailRequest struct {
	SenderEmail string `json:"senderEmail"`
	SenderName  string `json:"senderName"`
	Message     string `json:"message"`
}

func SendEmail(emailReq EmailRequest) error {
	auth := smtp.PlainAuth("", "cihanbatas@gmail.com", "swnhmrwnqfrsrdqo", "smtp.gmail.com")
	msg := fmt.Sprintf("From:\r%s\nName:\r%s\nMessage:\r%s\n", emailReq.SenderEmail, emailReq.SenderName, emailReq.Message)
	err := smtp.SendMail("smtp.gmail.com:587", auth, "cihanbatas@gmail.com", []string{"cihanbatas@gmail.com"}, []byte(msg))
	if err != nil {
		return err
	}
	return nil
}

func Email(w http.ResponseWriter, r *http.Request) {
	if r.Method != "POST" {
		w.Header().Set("Allow", "POST")
		w.WriteHeader(405)
		w.Write([]byte("Method Not Allowed"))
		return
	}
	var emailReq EmailRequest
	if err := json.NewDecoder(r.Body).Decode(&emailReq); err != nil {
		w.WriteHeader(http.StatusBadRequest)
		w.Write([]byte("Bad Request"))
		return
	}
	if err := SendEmail(emailReq); err != nil {
		w.WriteHeader(http.StatusInternalServerError)
		w.Write([]byte("Internal Server Error"))
		log.Printf("Error with the SendEmail func execution: %v", err)
		return
	}
	w.WriteHeader(http.StatusOK)
	w.Write([]byte("Email sent successfully"))
}

func main() {
	c := cors.New(cors.Options{
		AllowedOrigins:   []string{"http://cihanbatasul.com"},
		AllowedMethods:   []string{http.MethodPost},
		AllowCredentials: true,
	})
	mux := http.NewServeMux()
	mux.HandleFunc("/email/", Email)

	handler := c.Handler(mux)

	log.Print("Listening on port :8080")
	err := http.ListenAndServe(":8080", handler)
	log.Fatal(err)
}
