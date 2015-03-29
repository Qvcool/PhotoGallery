PhotoGallery = [];
setTimeout(function() {
	(function(a, b) {
		a.a = document.getElementsByClassName("photo-gallery");
		for(i = 0; i < a.a.length; i++) {
			a.b = a.a[i];
			
			a.b.style.overflow = "hidden";
			
			a.b.style.background = a.b.getAttribute("data-gallery-background") || "#222";
			a.c = a.b.style.width = a.b.getAttribute("width") || "640px";
			a.d = a.b.style.height = a.b.getAttribute("height") || "360px";
			
			var r = document.createElement("p");
			r.style.cursor = "pointer";
			r.style.width = "35px";
			r.style.height = "31px";
			r.style.background = "url(larrow_wht.png)";
			r.style.backgroundRepeat = "no-repeat";
			r.style.backgroundPosition = "4px 0px";
			r.style.margin = "0px";
			r.style.marginTop = "-31px";
			r.style.position = "relative";
			r.style.top = (parseInt(a.d) + 31) / 2 + "px";
			r.style.left = "10px";
			r.onmouseover = function() {this.style.backgroundPosition = "0px 0px";};
			r.onmouseout = function() {this.style.backgroundPosition = "4px 0px";};
			r.onclick = function() {
				for(m = this.parentNode.querySelectorAll("div.gallery-image").length - 1, o = false; m >= 0 && !o; m--) {
					n = this.parentNode.querySelectorAll("div.gallery-image")[m];
					if(m == -1);
					else if(n.style.display == "none") n.style.display = "block", o = true;
				}
			}
			a.b.insertBefore(r, a.b.firstChild);
			var r = document.createElement("p");
			r.style.cursor = "pointer";
			r.style.width = "35px";
			r.style.height = "31px";
			r.style.background = "url(rarrow_wht.png)";
			r.style.backgroundRepeat = "no-repeat";
			r.style.backgroundPosition = "0px 0px";
			r.style.margin = "0px";
			r.style.marginTop = "-31px";
			r.style.position = "relative";
			r.style.top = (parseInt(a.d) + 31) / 2 + "px";
			r.style.left = parseInt(a.c) - 41 + "px";
			r.onmouseover = function() {this.style.backgroundPosition = "4px 0px";}
			r.onmouseout = function() {this.style.backgroundPosition = "0px 0px";}
			r.onclick = function() {
				for(m = 0, o = false; m < this.parentNode.querySelectorAll("div.gallery-image").length && !o; m++) {
					n = this.parentNode.querySelectorAll("div.gallery-image")[m];
					if(m == this.parentNode.querySelectorAll("div.gallery-image").length - 1);
					else if(n.style.display != "none") n.style.display = "none", o = true;
				}
			}
			a.b.insertBefore(r, a.b.firstChild);
			
			PhotoGallery.push({
				width: parseInt(a.c),
				height: parseInt(a.d),
				auto: a.e,
				delay: a.f,
				element: a.b,
				images: []
			});
			a.g = a.b.getElementsByTagName("div");
			for(j = 0; j < a.g.length; j++) {
				if((" "+a.g[j].className+" ").indexOf(" gallery-image ") > -1) {
					PhotoGallery[PhotoGallery.length - 1].images.push({
						width: 0,
						height: 0,
						src: a.g[j].getAttribute("data-src"),
						element: a.g[j],
						fill: (" "+a.g[j].className+" ").indexOf(" fill ") > -1 || ((" "+a.g[j].className+" ").indexOf(" fit ") == -1 && (" "+a.b.className+" ").indexOf(" fill ") > -1)
					});
					a.g[j].style.backgroundImage = "url(" + a.g[j].getAttribute("data-src") + ")";
					a.g[j].style.float = "left"
					a.g[j].style.backgroundRepeat = "no-repeat";
					(function(url, callback, gallery, id, last) {
						img = new Image();
						img.src = url;
						img.onload = function() {
							callback(this.width, this.height, gallery, id, last);
						}
					}(a.g[j].getAttribute("data-src"), function(w, h, gallery, id, last) {
						PhotoGallery[gallery].images[id].width = w;
						PhotoGallery[gallery].images[id].height = h;
						if(last) {
							for(k = 0; k < PhotoGallery.length; k++) {
								for(l = 0; l < PhotoGallery[k].images.length; l++) {
									c = PhotoGallery[k];
									d = c.images[l];
									d.element.style.float = "left";
									d.element.style.width = c.width + "px";
									d.element.style.height = c.height + "px";
									if(d.fill) {
										if(c.width / c.height > d.width / d.height) {
											d.element.style.backgroundSize = c.width + "px " + (c.width * (d.height / d.width)) + "px";
											d.element.style.backgroundPosition = "0px " + Math.round((c.height - (c.width * (d.height / d.width)))/2) + "px";
										}
										else {
											d.element.style.backgroundSize = (c.height * (d.width / d.height)) + "px " + c.height + "px";
											d.element.style.backgroundPosition = Math.round((c.width - (c.height * (d.width / d.height)))/2) + "px 0px";
										}
									}
									else if(c.width / c.height > d.width / d.height) {
										d.element.style.backgroundSize = (c.height * (d.width / d.height)) + "px " + c.height + "px";
										d.element.style.backgroundPosition = Math.round((c.width - (c.height * (d.width / d.height)))/2) + "px 0px";
									}
									else {
										d.element.style.backgroundSize = c.width + "px " + (c.width * (d.height / d.width)) + "px";
										d.element.style.backgroundPosition = "0px " + Math.round((c.height - (c.width * (d.height / d.width)))/2) + "px";
									}
								}
							}
						}
					}, i, j, i == a.a.length - 1 && j == a.g.length - 1));
				}
			}
		}
	}({}, function(e,c) {return (" "+e.className+" ").indexOf(c) > -1;}))
}, 0);
