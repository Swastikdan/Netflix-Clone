import os

# Get the current directory of the script
current_dir = os.path.dirname(os.path.abspath(__file__))

# Create 38 folders with names "folder1" to "folder38"
for i in range(1, 39):
    folder_name = "folder" + str(i)
    folder_path = os.path.join(current_dir, folder_name)
    os.makedirs(folder_path)

    html_string1 = '''
        <!doctype html> <html lang="en"><head><meta charset="UTF-8"><meta content="IE=edge" http-equiv="X-UA-Compatible"><meta content="width=device-width, initial-scale=1" name="viewport"><title>Netflix Clone Movie Page</title><meta name="apple-touch-icon" content="https://assets.nflxext.com/en_us/layout/ecweb/netflix-app-icon_152.jpg" />
    <link rel="shortcut icon" href="https://assets.nflxext.com/us/ffe/siteui/common/icons/nficon2016.ico" />
    <link rel="apple-touch-icon" href="https://assets.nflxext.com/us/ffe/siteui/common/icons/nficon2016.png" /><meta content="Netflix Clone Movie Description"name="description"><script crossorigin src="/assets/script-page.js" type="module"></script> <link href="/assets/style-page.css" rel="stylesheet"> </head> <body class="bg-black"><div id="loader"></div> <header class="fixed flex flex-row flex-wrap items-center justify-between p-5 px-20 top-0 w-full z-[900]" id="header" > </header> <main><div id="hero-section-
        '''
    html_string2= '''
    "></div><div id="more-like-this" class="mx-16"></div></main><footer class="bg-black footer pt-5" id="footer"></footer></body></html>

        '''
    html_string=html_string1+str(i)+html_string2


    # Create an index.html file in each folder
    with open(os.path.join(folder_path, "index.html"), "w") as file:
        file.write(html_string)
