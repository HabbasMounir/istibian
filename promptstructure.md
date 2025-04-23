I need you to convert the survey questions I provide into a structured JSON format. Please follow these guidelines:

1. The JSON structure should include sections, each with:
   - id (like "section1", "section2", etc.)
   - title (as provided in the survey)
   - icon (use "fa-star" for most sections, "fa-eye" for visibility sections, "fa-user" for personal info)
   - questions array

2. Each question in the array should have:
   - id (create a unique identifier based on the question topic)
   - text (the actual question text)
   - type (one of: "radio", "checkbox", or "likert")
   - options array for radio and checkbox questions

3. For options, include:
   - value (a simple identifier)
   - label (the display text)

4. Use RTL Arabic formatting for all text fields

The survey questions are related to influencer marketing for a brand called "Make" and measure various dimensions of brand personality.

Here's the survey text I need converted:
[YOUR SURVEY TEXT HERE]