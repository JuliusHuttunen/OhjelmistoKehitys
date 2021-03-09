import urllib.request
import json
from datetime import datetime, timedelta

def fetch_events():
    with urllib.request.urlopen('https://open-api.myhelsinki.fi/v1/events/') as response:
        data = response.read()

    events = json.loads(data)
    return events['data']

def next_month_filter(event):
    events = fetch_events()
    min = datetime.utcnow()
    max = min + timedelta(days=30)min = datetime.utcnow()
    max = min + timedelta(days=30)

    alku_str = min.isoformat()
    loppu_str = max.isoformat()
    





    