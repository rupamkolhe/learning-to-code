
import tkinter as tk 
from pathlib import Path 
from PIL import Image, ImageTk
import time 

from itertools import cycle 


root = tk.Tk()

# list of image path

folder_path = Path(r'C:\Users\LENOVO\OneDrive\Documents\projects for routine\PY mini projects\image data')


image_paths = [f for f in folder_path.iterdir() if f.is_file()]


# resize the images to 1080x1080
image_size = (1080,1080)
images = [Image.open(path).resize(image_size) for path in image_paths]
photo_images = [ImageTk.PhotoImage(image) for image in images]

label = tk.Label(root)
label.pack()


index = 0
afer_id = None
playing = False 

def update_image():
	global index, after_id 
	if not playing or not photo_images :
		return
	label.config(image=photo_images[index])
	index = (index+1)%len(photo_images)
	after_id = root.after(1000,update_image)

def start_slideshow():
	global playing 
	if not photo_images or playing : 
		return 
	playing = True 
	update_image()

def stop_slideshow():
	global playing, after_id 
	playing = False 
	if after_id is not None :
		root.after_cancel(after_id)
		print('YUP WE needed it')
		print(after_id)
		after_id = None 

def close_window():
	stop_slideshow()
	root.destroy()

play_button = tk.Button(root, text="Play Slideshow",command=start_slideshow)
play_button.pack()

root.protocol('WM_DELETE_WINDOW',close_window)

root.title('Image Slideshow Viwer')
root.mainloop()



