# ImgUri

As Internet connections became quicker and computers more powerful,
website performance used to be an often overlooked best practice. 
Today, ensuring that your website is performing well is absolutely vital for keeping both
your users and the search engines happy; especially when the site is being accessed using
mobile data and under-powered phones and other devices.


We can represent an image (actually any binary data) in your HTML or CSS using only an ASCII text string.
This reduces overall HTTP request and the technique is called DATA URI scheme.

The Main advantage of using data URIs is performance enhancement. Any resources that are used in your site are fetched by your browser using an HTTP request. This includes everything from stylesheets, to JavaScript files, to images. If the internet connection is slow then more no of HTTP requests will result in poor performance of the site. Combining image data into the HTML or CSS of the site instantly removes the need for the browser to fetch additional resources

You can use the above library where you can inclue the data-uri instead of actual image. 

#### Normal way of including an icon

```html
div.icon {
background-repeat: repeat;
background-image: url("icon.git");
```

#### including icon as data-uri
``` html

div.icon {
background-repeat: repeat;
background-image: url(data:image/jpeg;base64,/9j/4QAYRXhpZgAASUkqAAgAAAAAAAAAAAAAAP/sABFEdWNreQABAAQAAABkAAD/4QMraHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjMtYzAxMSA2Ni4xNDU2NjEsIDIwMTIvMDIvMDYtMTQ6NTY6MjcgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDUzYgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjlCNDA1N0EyRkNEQzExRTE5NEEyOEY1NEFFMzlEMzVFIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjlCNDA1N0EzRkNEQzExRTE5NEEyOEY1NEFFMzlEMzVFIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6OUI0MDU3QTBGQ0RDMTFFMTk0QTI4RjU0QUUzOUQzNUUiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6OUI0MDU3QTFGQ0RDMTFFMTk0QTI4RjU0QUUzOUQzNUUiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7/7gAOQWRvYmUAZMAAAAAB/9sAhAABAQEBAQEBAQEBAQEBAQEBAQEB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);
}
 ```
 
 
 But Data-uri's should be choosen wisely, Here are few **drawbacks**:
 
 - Data URIs are not cached by the browser, so they will need to be downloaded on every page, even if they've already been rendered by the browser.
 - The site user will not see anything until the entire asset is downloaded, which could be undesirable for users on mobile or with slow Internet connection.
 - Data URIs make your CSS and HTML documents look very messy. For large sites and widespread Data URI utilization, stylesheets and markup become more difficult to read, navigate and maintain.
 - whenever the icon is changed then you need use the converter for the new code.
 
 
 ### Steps to execute the above code
 
 -  Use ```npm install``` to install the necessery files specified in package.json . 
 - You can find index.js file under test folder, run the file using ```node index.js``` which will fetch the images from the specified server and converts them if their size is less than 4kb.
 - Use the generated code in Html or css. 
 - ![alt output] (https://github.com/Zakir289/ImgUri/blob/master/ExplanationImages/Screen%20Shot%202015-08-06%20at%2019.37.13.png)
