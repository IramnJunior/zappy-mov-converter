package main

import (
	"fmt"
	"github.com/wailsapp/wails/v3/pkg/application"
	"os/exec"
)

type ConvertService struct {
	paths []string
}

func (c *ConvertService) UploadFile() ([]string, error) {
	dialogOptions := application.OpenFileDialogOptions{
		Title: "Select Video(s)",
		Filters: []application.FileFilter{
			{
				DisplayName: "Video (*.mov)",
				Pattern:     "*.mov",
			},
		},
	}
	dialog := application.OpenFileDialogWithOptions(&dialogOptions)

	paths, err := dialog.PromptForMultipleSelection()
	if err != nil {
		return nil, fmt.Errorf("erro ao fazer upload de arquivos: %v", err)
	}
	c.paths = paths

	return paths, nil
}

func (c *ConvertService) ConvertVideo() (string, error) {
	options := application.OpenFileDialogOptions{
		Title:                "select the folder you want to save",
		CanChooseDirectories: true,
		CanChooseFiles:       false,
	}

	dialog := application.OpenFileDialogWithOptions(&options)

	savePath, err := dialog.PromptForSingleSelection()
	if err != nil {
		fmt.Println(err)
		return "", err
	}
	fmt.Println(savePath)

	for _, video := range c.paths {
		cmd := exec.Command(
			"ffmpeg", "-i", video,
			"-c:v", "libx264",
			"-c:a", "aac",
			"-preset", "ultrafast",
			savePath+"/video.mp4",
		)

		err := cmd.Run()
		if err != nil {
			fmt.Println(err)
			return "", fmt.Errorf("erro: %v", err)
		}
	}
	return "Sucesso!", nil
}
