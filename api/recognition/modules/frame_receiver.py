import numpy as np
import cv2
import urllib.request

URL = ""

def get_frame() -> np.array:
    image_response = urllib.request.urlopen(URL)
    image_array = np.array(bytearray(image_response), dtype=np.uint8)
    image = cv2.imdecode(image_array, -1)
    return image