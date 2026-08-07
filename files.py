import os

# List of desired file names
file_names = [
    "28.js",
    "29.js",
    "30.js",
   "31.js",
   "32.js",
    "33.js",
    "34.js",
     "35.js",
     "36.js",
     "37.js",
     "38.js",
     "39.js",
      "40.js",
      "41.js",
      "42.js",
      "43.js",
      "44.js",
      "45.js",
      "46.js",
      "47.js",
      "48.js"

]

# Create each file in the same folder as this script
for name in file_names:
    path = os.path.join(os.getcwd(), name)  # os.getcwd() gets current folder
    with open(path, 'w') as f:
        f.write("")  # Creates an empty file
    print(f"Created: {path}")

print("All files created successfully.")



# alternative method 
import os

# Set how many files you want
num_files = 21  # Change this number to however many files you need
start_number = 28  # Starting number for file names

# Create each file
for i in range(start_number, start_number + num_files):
    filename = f"{i}.js"
    path = os.path.join(os.getcwd(), filename)
    with open(path, 'w') as f:
        f.write("")  # Creates an empty file
    print(f"Created: {path}")

print("All files created successfully.")
