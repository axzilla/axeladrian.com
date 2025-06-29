APP_NAME=axeladrian

.PHONY: build run clean

build:
	go build -o $(APP_NAME)

run:
	go run main.go

clean:
	rm -f $(APP_NAME)
