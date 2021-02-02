import urllib.request
import json

with urllib.request.urlopen('https://raw.githubusercontent.com/theikkila/postinumerot/master/postcode_map_light.json') as response:
	data = response.read()

postinumerot = json.loads(data)

postitmp = input("Anna postitoimipaikka: ")

avaimet = [k for k in postinumerot if postinumerot[k] == postitmp.upper()]

if avaimet:
	print("Postitoimipaikan postinumerot: ")
	print(*avaimet, sep=', ')
else:
	print("Virheellinen postitoimipaikka!")	


