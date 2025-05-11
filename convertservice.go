package main

import (
	"fmt"
	"github.com/wailsapp/wails/v3/pkg/application"
)

type ConvertService struct{}

func (c *ConvertService) UploadFile() ([]string, error) {
	dialogOptions := application.OpenFileDialogOptions{
		Title: "Select Image",
		Filters: []application.FileFilter{
			{
				DisplayName: "Videos (*.mov)",
				Pattern:     "*.mov",
			},
		},
	}
	dialog := application.OpenFileDialogWithOptions(&dialogOptions)

	paths, err := dialog.PromptForMultipleSelection()
	if err != nil {
		return nil, fmt.Errorf("erro ao fazer upload de arquivos: %v", err)
	}

	return paths, nil
}

func (c *ConvertService) ConvertVideo() (string, error) {
	options := application.SaveFileDialogOptions{
		Title:     "Save Your Video",
		Directory: "/home/ivan/",
		Filters: []application.FileFilter{
			{
				DisplayName: "Video (*.mp4)",
				Pattern:     "*.mp4",
			},
		},
	}
	dialog := application.SaveFileDialogWithOptions(&options)

	if path, err := dialog.PromptForSingleSelection(); err == nil {
		return path, nil
	}

	return "", nil
}
