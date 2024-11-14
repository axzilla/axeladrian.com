package assets

import "embed"

//go:embed css/* js/* img/*
var Assets embed.FS
