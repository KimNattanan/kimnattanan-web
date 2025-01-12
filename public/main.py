import cv2 as cv

arr = [
  "./public/email_icon.png",
  "./public/ig_icon.png",
  "./public/facebook_icon.png",
  "./public/linkedin_icon.png",
  "./public/github_icon.png",
]
new_col = [241,142,67]

for e in arr:
  img = cv.imread(e,cv.IMREAD_UNCHANGED)
  for i in range(img.shape[0]):
    for j in range(img.shape[1]):
      if(img[i,j,3]):
        img[i,j] = [new_col[2],new_col[1],new_col[0],img[i,j,3]]
  cv.imwrite(e[:-4]+"_2.png",img)