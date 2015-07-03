# PhotoGallery
PhotoGallery is a standalone JavaScript plugin that can be used to create simple photo galleries very easily.
## Demo
[Demo](https://jsfiddle.net/zjvtydo2/embedded/result/)
![Image](http://i.imgur.com/CVgzBFL.jpg)
## Installation
To include PhotoGallery in an HTML webpage, download `photogallery.min.js` from this GitHub repository, and add this tag to your header (with the path to `photogallery.min.js` in place of `path/to/photogallery.min.js`):

    <script src="path/to/photogallery.min.js"></script>
## Usage
To create a photo gallery using PhotoGallery, create a `<div>` element with `class="photo-gallery"`, and include all images as `<div>`s with `class="gallery-image"` and an image source as `data-src="path/to/image"` (as seen below). That's all there really is to it as long as you've [added the script to your page](#installation).

    <div class="photo-gallery">
		<div class="gallery-image" data-src="http://i.imgur.com/EkIiBwB.jpg"></div>
		<div class="gallery-image" data-src="http://i.imgur.com/57q5KId.jpg"></div>
		<div class="gallery-image" data-src="http://i.imgur.com/IqT3SjC.jpg"></div>
		<div class="gallery-image" data-src="http://i.imgur.com/KkaqG7r.jpg"></div>
    </div>
### Changing the gallery's width and height
To customize the width and height of a gallery, use the `width="value"` and `height="value"` with a *pixel* value. For example, if you want a gallery to have a width of 720 pixels and a height of 400 pixels, you would add these attributes to the container `<div>`:

    <div class="photo-gallery" width="720px" height="400px">
By default, the width is set to 640 pixels and the height is set to 360 pixels.

Adjusting the `div`'s `width` and `height` properties in CSS will have no effect on the element, even if it isn't assigned `width` and `height` attributes in the HTML.
### Make images fill instead of fit
If you want to make images take up the entire gallery frame, which will usually cut off some parts of the image, add the `fill` class to each image, or if you want to make the *entire* gallery fill instead of fit, then you can add the `fill` class to the container `<div>`. If the container `<div>` has the `fill` class and you want a `<div>` to fit, add the `fit` class to said `<div>`.

    <div class="photo-gallery fill">
		<div class="gallery-image" data-src="http://i.imgur.com/EkIiBwB.jpg"></div>
		<div class="gallery-image fit" data-src="http://i.imgur.com/57q5KId.jpg"></div>
		<div class="gallery-image" data-src="http://i.imgur.com/IqT3SjC.jpg"></div>
		<div class="gallery-image" data-src="http://i.imgur.com/KkaqG7r.jpg"></div>
    </div>

## License
PhotoGallery is licensed under the [public domain](https://github.com/Qvcool/PhotoGallery/blob/master/LICENSE).
