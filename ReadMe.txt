What kind of information can you capture using a form? (List as many as you can) 
( I took these from W3Schools)

button
checkbox
color
date
datetime-local
email
file
hidden
image
month
number
password
radio
range
reset
search
submit
tel
text
time
url
week


What types of tags can you use to create forms?  

<input type="button">
<input type="checkbox">
<input type="color">
<input type="date">
<input type="datetime-local">
<input type="email">
<input type="file">
<input type="hidden">
<input type="image">
<input type="month">
<input type="number">
<input type="password">
<input type="radio">
<input type="range">
<input type="reset">
<input type="search">
<input type="submit">
<input type="tel">
<input type="text">
<input type="time">
<input type="url">
<input type="week">

What are the benefits / disadvantages of using some tags over others? 
	Some input types come with built in validation at the HTML level.  Others need input defines
	like size, format, ranges.

How do you start to programmatically use the data provided by the user? 
	Apply validation at the HTML level, access the data in JavaScript using  
        document.querySelector(field).
	Do additional validation on the data.
	Apply any business rules on the data and display on the HTML.
	Write data to a database or XML file for storage.