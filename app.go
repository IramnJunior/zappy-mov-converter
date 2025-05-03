package main

import (
	"context"
	"fmt"
	"os"
	"os/exec"
	"path/filepath"
)

// App struct
type App struct {
	ctx context.Context
}

// NewApp creates a new App application struct
func NewApp() *App {
	return &App{}
}

// startup is called when the app starts. The context is saved
// so we can call the runtime methods
func (a *App) startup(ctx context.Context) {
	a.ctx = ctx
}

func (a *App) ConvertVideo(data []byte, filename string) (string, error) {
	inputPath := filepath.Join(os.TempDir(), filename)
	err := os.WriteFile(inputPath, data, 0644)
	if err != nil {
		return "", err
	}

	outputPath := inputPath + ".mp4"

	cmd := exec.Command(
		"ffmpeg", "-i", inputPath,
		"-c:v", "libx264",
		"-preset", "ultrafast",
		"-crf", "22",
		outputPath,
	)
	output, err := cmd.CombinedOutput()
	if err != nil {
		return "", fmt.Errorf("ffmpeg error: %v, output: %s", err, string(output))
	}

	return outputPath, nil
}
