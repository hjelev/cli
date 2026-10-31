---
name: "Reading-plan CSV to calendar"
category: "Data Processing"
short_description: "Convert dated Bible-reading CSV rows into all-day ICS calendar events offline."
description: "Offline Python 3.9+ command-line converter for a dated Bible-reading schedule. Supply a UTF-8 CSV with date and passage columns plus optional notes; the tool writes all-day ICS events and preserves gaps between dates. It validates dates and duplicate date/passage pairs, preserves Unicode text, and refuses to overwrite an existing output file.\n\nDownload the repository ZIP from GitHub, extract it, and open a terminal in that folder. Run the example command below with Python 3.9 or later. It uses only the Python standard library and needs no account, API key, or network access after downloading.\n\nI maintain this MIT-licensed resource for TrustBible. It does not choose passages, generate a reading plan, validate Bible references, connect to accounts, synchronize calendars, or import events for the user. The included example and six tests were verified locally on Windows. Calendar-vendor import UIs and other operating systems have not been tested."
repository_url: "https://github.com/szj2ys/bible-reading-calendar"
author: "szj2ys"
license: "MIT"
language: "Python"
installation: [{"method": "other", "command": "python reading_calendar.py example.csv reading-plan.ics"}]
platforms: ["Windows"]
tags: ["csv", "icalendar", "calendar", "bible"]
---
